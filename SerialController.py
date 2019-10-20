import serial

class SerialController(object):
    
    port = '/dev/ttyACM0'
    
    def __init__(self, p):
        self.port = p
    