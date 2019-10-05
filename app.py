from flask import Flask, render_template, send_from_directory
import serial

app = Flask(__name__)
#ser = serial.Serial('/dev/ttyACM0')

@app.route('/js/<path:path>')
def get_js(path):
    return send_from_directory('templates/js', path)

@app.route('/html/<path:path>')
def get_html(path):
    return send_from_directory('templates', path)

@app.route('/')
def index():
    return render_template('Index.html')

@app.route('/control')
def control():
    return None

if __name__ == '__main__':
    app.run(debug=True) 