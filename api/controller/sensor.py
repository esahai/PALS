import RPi.GPIO as GPIO
import time
import math


class GlassSensor:
    TRIGGER_PIN = 2
    ECHO_PIN = 3
    MIN_DISTANCE = 10
    TIME_OUT = 1

    def __init__(self):
        GPIO.setup(GlassSensor.TRIGGER_PIN, GPIO.OUT)
        GPIO.setup(GlassSensor.ECHO_PIN, GPIO.IN)

    def distance(self):
        # set Trigger to HIGH
        GPIO.output(GlassSensor.TRIGGER_PIN, True)

        # set Trigger after 0.01ms to LOW
        time.sleep(0.00001)
        GPIO.output(GlassSensor.TRIGGER_PIN, False)

        start_time = time.time()
        stop_time = time.time()
        time_elapsed = 0
        # save StartTime

        while GPIO.input(GlassSensor.ECHO_PIN) == 0:
            start_time = time.time()

        # save time of arrival
        while GPIO.input(GlassSensor.ECHO_PIN) == 1 and time_elapsed <= GlassSensor.TIME_OUT:
            stop_time = time.time()
            time_elapsed = stop_time - start_time

        if time_elapsed >= GlassSensor.TIME_OUT:
            distance = math.inf
        else:
            # multiply with the sonic speed (34300 cm/s)
            # and divide by 2, because there and back
            distance = (time_elapsed * 34300) / 2
        return distance

    def is_glass_present(self):
        d = self.distance()
        if d <= GlassSensor.MIN_DISTANCE:
            return True
        else:
            return False
