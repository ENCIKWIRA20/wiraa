input.onGesture(Gesture.Shake, function () {
    basic.showNumber(88)
})
serial.writeString("999")
basic.showString(" HELLO ENCIKWIRA")
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . # . #
    # # . # #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(1000)
    basic.showArrow(ArrowNames.South)
})
