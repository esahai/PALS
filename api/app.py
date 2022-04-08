import json
from flask import Flask, jsonify
from controller.dispenser import *
dispenser = None

app = Flask(__name__)


@app.route('/menu')
def menu():
    m = dispenser.get('/menu')
    return json.dumps(m)


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


@app.route('/glass')
def glass():
    return dispenser.glass_status()


def main():
    global dispenser
    dispenser = Dispenser()
    dispenser.configure()
    app.run()
