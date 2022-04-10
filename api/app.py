import json
from flask import Flask, jsonify, make_response, request
from controller.dispenser import *

dispenser = None

app = Flask(__name__)


@app.route('/api/menu')
def menu():
    m = dispenser.get_menu()
    return make_response(json.dumps(m), 200)


@app.route('/api/dispenser/dispense', methods=['POST'])
def dispense():
    error = None
    try:
        order = json.loads(request.data)
    except:
        error, code = "Badly formatted Order", 400
    if error is None:
        print(order)
        error, code = dispenser.dispense(order)
    if error is None:
        resp = make_response("Enjoy your drink!", 200)
    else:
        resp = make_response(error, code)
    return resp


@app.route('/api/glass/ignore')
def dispenser_ignore_glass():
    return make_response(dispenser.glass_ignore(), 200)


@app.route('/api/dispenser/stop')
def dispenser_stop():
    return make_response(dispenser.stop(), 200)


@app.route('/api/dispenser/start_flush')
def dispenser_flush():
    return make_response(dispenser.start_flush(), 200)


@app.route('/api/glass/status')
def glass_status():
    return make_response(dispenser.get_glass_status(), 200)


@app.route('/api/glass/sizes')
def glass_sizes():
    return make_response(json.dumps(dispenser.get_glass_sizes()), 200)


def main():
    global dispenser
    dispenser = Dispenser()
    app.run(host="0.0.0.0", port=8080)
