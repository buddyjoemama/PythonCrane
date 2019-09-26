from flask import Flask, render_template
from picamera import PiCamera
from time import sleep

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Index.html')

if __name__ == '__main__':
    app.run(debug=True) 