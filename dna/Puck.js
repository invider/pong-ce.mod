const MAX_SPEED = 1500
const HIT_ACCELERATION = 1.07

const df = {
    x: 0,
    y: 0,
    r: 10,
    hold: 1,
    speed: 100,
}

class Puck {

    constructor(st) {
        augment(this, df, st) // set default  and init values

        // select a random direction
        let fi = ( rnd() * .4*PI - .2*PI ) - ( PI * floor(rnd(2)) )
        this.dx = cos(fi)
        this.dy = sin(fi)
    }

    evo(dt) {
        if (lab.score.countdown) return // the counter is still on

        if (this.hold > 0) {
            // hold on
            this.hold -= dt
            if (this.hold < 0) lib.sfx(res.sfx.slide, .5)
            return
        }

        // save previous x/y
        const px = this.x
        const py = this.y

        // move
        let touched = false
        this.x += this.dx * this.speed * dt
        this.y += this.dy * this.speed * dt

        // detect edge collisions
        const r = this.r
        if (this.x < r) {
            // hit the left edge
            kill(this)
            trap('score', 'right')
        } else if (this.x > rx(1)-r) {
            // hit the right edge
            kill(this)
            trap('score', 'left')
        }
        if (this.y < r) {
            // reflect from the top edge
            this.y = r
            this.dy *= -1
            touched = true
            lib.sfx(res.sfx.boing, .2)
        } else if (this.y > ry(1)-r) {
            // reflect from the bottom edge
            this.y = ry(1)-r
            this.dy *= -1
            touched = true
            lib.sfx(res.sfx.boing, .2)
        }

        // detect collision with paddles
        const puck = this
        lab._ls.forEach(e => {
            if (e.touch) {
                if (e.touch(puck)) {
                    touched = true
                    this.speed = min(this.speed * HIT_ACCELERATION, MAX_SPEED)
                }
            }
        })

        if (touched) {
            // move back to previous coordinates
            this.x = px
            this.y = py
        }
    }

    draw() {
        lineWidth(2)
        stroke(.55, .5, .5)
        circle(this.x, this.y, this.r)
    }
}
