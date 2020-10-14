function draw() {
    baseTop()
    alignCenter()

    fill(.04, .4, .5)
    font('48px moon')

    const y = 20
    text('' + env.score.left,  rx(.25), y)
    text('' + env.score.right, rx(.75), y)

    lineWidth(4)
    stroke('#202020')
    line(rx(.5), 0, rx(.5), ry(1))
}
