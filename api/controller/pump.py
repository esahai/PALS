import RPi.GPIO as GPIO
import asyncio


class Pump:
    FLOW_RATE = 60.0/100.0

    def __init__(self, pin):
        GPIO.setup(pin, GPIO.OUT)
        self.pin = pin

    async def pour(self, amount):
        wait_time = amount / Pump.FLOW_RATE
        GPIO.output(self.pin, GPIO.LOW)
        await asyncio.sleep(wait_time)
        GPIO.output(self.pin, GPIO.HIGH)