input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(3)
kitronik_smart_greenhouse.setBuzzerPin()
kitronik_smart_greenhouse.setTime(0, 0, 0)
basic.forever(function () {
    zipLEDs.setZipLedColor(0, kitronik_smart_greenhouse.colors(ZipLedColors.Red))
    zipLEDs.setZipLedColor(1, kitronik_smart_greenhouse.colors(ZipLedColors.Green))
    zipLEDs.setZipLedColor(2, kitronik_smart_greenhouse.colors(ZipLedColors.Blue))
    zipLEDs.show()
    basic.showString(kitronik_smart_greenhouse.readTime())
})
basic.forever(function () {
	
})
