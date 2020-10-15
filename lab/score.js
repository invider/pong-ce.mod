function evo(dt) {
    if (this.countdown > 0) {
        const prev = this.countdown
        this.countdown -= dt
        if (this.countdown < 0) {
            this.countdown = 0
            sfx(res.sfx.start, .7)
        }
        if (floor(prev) > floor(this.countdown)) sfx(res.sfx.count, .5)
    }
}

function draw() {

    // center line
    lineWidth(4)
    stroke('#202020')
    line(rx(.5), 0, rx(.5), ry(1))

    // configure text
    baseTop()
    alignCenter()

    // score
    fill(.04, .4, .5)
    font('48px moon')

    const y = 20
    text('' + env.score.left,  rx(.25), y)
    text('' + env.score.right, rx(.75), y)

    // count-down timer
    if (this.countdown > 0) {
        fill(.15, .4, .5)
        font('64px moon')
        text('' + ceil(this.countdown),  rx(.5), ry(.2))
    }
}
