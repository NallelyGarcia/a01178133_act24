input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # . # #
            . . . . .
            `)
    }
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 2)
        basic.pause(1000)
        led.unplot(0, 2)
        basic.pause(200)
        led.plot(1, 2)
        basic.pause(1000)
        led.unplot(1, 2)
        basic.pause(200)
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(2, 2)
        basic.pause(200)
        led.plot(3, 2)
        basic.pause(1000)
        led.unplot(3, 2)
        basic.pause(200)
        led.plot(4, 2)
        basic.pause(1000)
        led.unplot(4, 2)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
    }
    basic.clearScreen()
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
