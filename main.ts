input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin13, kitronik_smart_greenhouse.onOff(true))
    basic.pause(100)
    kitronik_smart_greenhouse.controlHighPowerPin(kitronik_smart_greenhouse.HighPowerPins.pin13, kitronik_smart_greenhouse.onOff(false))
})
input.onButtonPressed(Button.B, function () {
    kitronik_smart_greenhouse.servoWrite(135)
})
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(3)
kitronik_smart_greenhouse.setBuzzerPin()
kitronik_smart_greenhouse.setTime(0, 0, 0)
zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(8)
let ZipStick = zipLEDs.zipStickRange()
basic.forever(function () {
    zipLEDs.setZipLedColor(0, kitronik_smart_greenhouse.colors(ZipLedColors.Red))
    zipLEDs.setZipLedColor(1, kitronik_smart_greenhouse.colors(ZipLedColors.Green))
    zipLEDs.setZipLedColor(2, kitronik_smart_greenhouse.colors(ZipLedColors.Blue))
    zipLEDs.show()
    basic.showString(kitronik_smart_greenhouse.readTime())
})
basic.forever(function () {
    ZipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Red))
    basic.pause(2000)
    ZipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Green))
    basic.pause(2000)
    ZipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Blue))
    basic.pause(2000)
})
basic.forever(function () {
    if (kitronik_smart_greenhouse.readIOPin(kitronik_smart_greenhouse.PinType.analog, kitronik_smart_greenhouse.IOPins.p0) > 500) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
})
basic.forever(function () {
    basic.showString("Pressure:")
    basic.showNumber(kitronik_smart_greenhouse.pressure(PressureUnitList.mBar))
    basic.pause(500)
    basic.showString("Temperature:")
    basic.showNumber(kitronik_smart_greenhouse.temperature(TemperatureUnitList.C))
    basic.pause(500)
    basic.showString("Humidity:")
    basic.showNumber(kitronik_smart_greenhouse.humidity())
    basic.pause(500)
})
