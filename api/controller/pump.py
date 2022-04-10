import RPi.GPIO as GPIO
import asyncio


class Pump:
    FLOW_RATE = 60.0/100.0

    def __init__(self, pin):
        GPIO.setup(pin, GPIO.OUT)
        self.pin = pin

    async def pour(self, amount):
        wait_time = amount / Pump.FLOW_RATE
        print("Turning on pin Number {} and waiting for {} seconds to dispense amount {}".format(self.pin, wait_time, amount))
        self.start()
        await asyncio.sleep(wait_time)
        self.stop()
        print("Turning off pin Number {}".format(self.pin))


    def start(self):
        GPIO.output(self.pin, GPIO.HIGH)

    def stop(self):
        GPIO.output(self.pin, GPIO.LOW)