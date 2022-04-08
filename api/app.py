import json
from flask import Flask, jsonify, make_response
from controller.dispenser import *
dispenser = None

app = Flask(__name__)


@app.route('/menu')
def menu():
    m = dispenser.get_menu()
    return make_response(json.dumps(m), 200)


@app.route('/dispense', methods=['POST'])
def dispense():
    error = None
    try:
        order = json.loads(request.data)
    except:
        error = "Bad Order"
    if error is None:
        print(order)
        if dispenser.glass_status() == 'Red':
            error = "Insert the Glass"
        else:
            dispenser.dispense(order)
    if error is None:
        resp = make_response("Enjoy your drink!", 200)
    else:
        resp = make_response(error, 400)
    return resp


@app.route('/glass/status')
def glass_status():
    return make_response(dispenser.get_glass_status(), 200)


@app.route('/glass/sizes')
def glass_sizes():
    return make_response(json.dumps(dispenser.get_glass_sizes()), 200)


def main():
    global dispenser
    dispenser = Dispenser()
    app.run()
