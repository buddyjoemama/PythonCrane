from enum import Enum

class NorthChip(Enum):
    CabCW = 0
    CabCCW = 1
    BoomUp = 2
    BoomDown = 3

class SouthChip(Enum):
    HookUp = 0
    HookDown = 1
    PlatformEast = 2
    PlatformWest = 3
    PlatformNorth = 4
    PlatformSouth = 5
    Magnet = 6