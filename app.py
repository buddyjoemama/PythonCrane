from flask import Flask, render_template
import serial

app = Flask(__name__)
ser = serial.Serial('/dev/ttyACM0')

@app.route('/')
def index():
    return render_template('Index.html')

@app.route('/control')
def control():
    return None

if __name__ == '__main__':
    app.run(debug=True) 