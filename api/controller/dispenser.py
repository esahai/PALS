from .sensor import GlassSensor
from .pump import Pump
import configparser
import json
import asyncio

class Dispenser:
    MAX_PUMPS = 3
    PUMP_PINS = [4, 14, 15]

    def __init__(self):
        self.drinks = None
        self.amounts = None
        self.configure()
        self.pumps = []
        for pin in Dispenser.PUMP_PINS:
            self.pumps.append(Pump(pin))
        self.sensor = GlassSensor()

    async def dispense(self, recipe):
        recipe_dict = json.loads(recipe)
        drinks = recipe_dict['drinks']
        num_drinks = len(drinks)
        glass_size = recipe_dict['size']
        amount = self.amounts[glass_size]/num_drinks
        tasks = []
        if not self.sensor.is_glass_present():
            return 1, "Please Place a Cup to Dispense Drinks"
        for drink in drinks:
            pump_no = self.drink_type.index(drink)
            tasks.append(asyncio.create_task(self.pumps[pump_no].pour(amount)))
        for t in tasks:
            await t
        return 0, "Done"

    def glass_status(self):
        return "Green" if self.sensor.is_glass_present() else "Red"

    def configure(self):
        config = configparser.ConfigParser()
        config.read('dispenser.config')
        self.drink_types = [config['pumps']['1'], config['pumps']['2'], config['pumps']['3']]
        self.amounts = config['sizes']
        Pump.FLOW_RATE = config['pumps']['flow_rate']
        GlassSensor.MIN_DISTANCE = config['sensor']['min_distance']
        GlassSensor.TIME_OUT = config['sensor']['timeout']

    def get_menu(self):
        return self.drink_types