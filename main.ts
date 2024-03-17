let αγωγιμότητα = 0
loops.everyInterval(10000, function () {
    basic.showString("ΟΚ")
    αγωγιμότητα = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(αγωγιμότητα)
    if (αγωγιμότητα < 800) {
        if (input.lightLevel() < 50) {
            music.play(music.stringPlayable("C5 A G - - - - - ", 120), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
