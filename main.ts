input.onButtonPressed(Button.A, function () {
    teller01 = teller01 + 1
    teller01 = teller01 % roter_rull_teller
    basic.showNumber(teller01)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Txt")
    basic.showString(telletekst)
    basic.showString("Nr")
    basic.showNumber(parseFloat(telletekst))
    tallet = parseFloat(telletekst)
    basic.showString("T")
    basic.showString("" + telletekst + "er et ")
    if (tallet % 2 == 0) {
        basic.showString("partall")
    } else {
        basic.showString("oddetal")
    }
})
input.onButtonPressed(Button.B, function () {
    telletekst = "" + telletekst + convertToText(teller01)
    basic.showNumber(teller01)
    basic.showString("T")
    basic.showString("" + telletekst + ".")
    teller01 = 0
    basic.showNumber(teller01)
})
input.onGesture(Gesture.Shake, function () {
    telletekst = ""
    teller01 = 0
    basic.showNumber(teller01)
})
let tallet = 0
let roter_rull_teller = 0
let teller01 = 0
let telletekst = ""
telletekst = "Rist starter. A legger inn tall. B neste siffer A+B beregner."
teller01 = 0
roter_rull_teller = 10
basic.showString(telletekst)
// Plasser under show om en vil se info-melding
telletekst = ""
basic.forever(function () {
	
})
