import os
from .sensor import GlassSensor
from .pump import Pump
import configparser
import json
import RPi.GPIO as GPIO
import asyncio
from concurrent.futures import ThreadPoolExecutor

class Dispenser:
    MAX_PUMPS = 3
    PUMP_PINS = [4, 14, 15]

    def __init__(self):
        GPIO.setmode(GPIO.BCM)
        self.drink_types = None
        self.glass_sizes = None
        self.amounts = None
        self.busy = False
        self.ignore_glass = False
        self.configure()
        self.pumps = []
        self.tasks = []
        for pin in Dispenser.PUMP_PINS:
            self.pumps.append(Pump(pin))
        self.sensor = GlassSensor()
        self.stop()

    async def run_pumps(self, drinks, amount):
        self.busy = True
        loop = asyncio.get_running_loop()
        with ThreadPoolExecutor() as pool:
            for drink in drinks:
                pump_no = self.drink_types.index(drink)
                self.tasks.append(loop.run_in_executor(pool, self.pumps[pump_no].pour, amount))

        loop.create_task(self.wait_till_dispensed)

    async def  wait_till_dispensed(self):
        print("Waiting for pumps to finish dispensing")
        await asyncio.wait(self.tasks)
        self.tasks.clear()
        self.busy = False
        print("Wait over")

    def glass_ignore(self):
        self.ignore_glass = True
        return "Ignoring glass presence sensor"

    def dispense(self, recipe_dict):
        if self.busy:
                return "Dispenser is currently busy. Please try again later", 503
        if "drinks" not in recipe_dict or "size" not in recipe_dict:
                return "Missing size or drinks in the order", 400
        drinks = recipe_dict['drinks']
        num_drinks = len(drinks)
        if num_drinks < 1:
                return "Select at least one drink", 400
        if num_drinks > 3:
                return "Select up to 3 drinks; you selected {}".format(num_drinks), 400
        for d in drinks:
            if d not in self.drink_types:
                return "Bad drink {} in the order".format(d), 400
        glass_size = recipe_dict['size']
        if glass_size not in self.glass_sizes:
            return "Bad size {} in the order".format(glass_size), 400
        amount = self.amounts[glass_size]/num_drinks

        if not self.ignore_glass and not self.sensor.is_glass_present():
            return "Please Place a Cup to Dispense Drinks", 400

        asyncio.run(self.run_pumps(drinks, amount), debug=True)
        return None, 200

    def start_flush(self):
        self.busy = True
        for pump in self.pumps:
            pump.start()
        return "All Pumps are Running"


    def stop(self):
        self.busy = False
        for pump in self.pumps:
            pump.stop()
        return "All Pumps Stopped"


    def get_glass_status(self):
        return "Green" if self.sensor.is_glass_present() else "Red"

    def get_glass_sizes(self):
        return self.glass_sizes

    def configure(self):
        config = configparser.ConfigParser()
        try:
                config.read_file(open('dispenser.config', "r"))
        except Exception as ex:
                raise(ex)
        self.drink_types = [config['pumps']['1'], config['pumps']['2'], config['pumps']['3']]
        self.glass_sizes = []
        self.amounts = {}
        for  i, gsz in enumerate(config['sizes']):
                self.amounts[gsz] = float(config['sizes'][gsz])
                self.glass_sizes.append(gsz)
        Pump.FLOW_RATE = float(config['pumps']['flow_rate'])
        GlassSensor.MIN_DISTANCE = float(config['sensor']['min_distance'])
        GlassSensor.TIME_OUT = float(config['sensor']['timeout'])

    def get_menu(self):
        return self.drink_types
