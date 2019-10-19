import serial
from flask import Flask, render_template, send_from_directory
from controls import NorthChip, SouthChip

app = Flask(__name__)
#ser = serial.Serial('/dev/ttyACM0')

@app.route('/py/control/')
def control():
    return "Hello"

if __name__ == '__main__':
    app.run(debug=True) 