from flask import Flask, render_template, send_from_directory, Response
from controls import NorthChip, SouthChip
import SerialController

app = Flask(__name__)
#ser = serial.Serial('/dev/ttyACM0')

sController = SerialController.SerialController('/dev/ttyACM0')

@app.route('/py/control/north/<int:nOp>/south/<int:sOp>')
def control(nOp, sOp):
    north = NorthChip(nOp)
    south = SouthChip(sOp)    
    return Response("Ok", status=200)

if __name__ == '__main__':
    app.run(debug=True) 