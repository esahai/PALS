import sys
import RPi.GPIO as GPIO
import time


class Pump:
    FLOW_RATE = 60.0/100.0

    def __init__(self, pin):
        GPIO.setup(pin, GPIO.OUT)
        self.pin = pin

    def pour(self, amount):
        wait_time = amount / Pump.FLOW_RATE
        self.start()
        print("Waiting for {} seconds to dispense amount {}".format(wait_time, amount), file=sys.stdout)
        time.sleep(wait_time)
        self.stop()


    def start(self):
        print("Turning on pin Number {}".format(self.pin), file=sys.stdout)
        GPIO.output(self.pin, GPIO.HIGH)

    def stop(self):
        print("Turning off pin Number {}".format(self.pin), file=sys.stdout)
        GPIO.output(self.pin, GPIO.LOW)
