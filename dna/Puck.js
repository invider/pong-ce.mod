const df = {
    x: 0,
    y: 0,
    r: 10,
    speed: 300,
}

class Puck {

    constructor(st) {
        augment(this, df)
        augment(this, st)

        // select random direction
        const fi = rnd() * TAU
        this.dx = cos(fi)
        this.dy = sin(fi)
    }

    evo(dt) {
        const px = this.x
        const py = this.y
        this.x += this.dx * this.speed * dt
        this.y += this.dy * this.speed * dt

        const r = this.r
        if (this.x < r) {
            this.x = r
            this.dx *= -1
        } else if (this.x > rx(1)-r) {
            this.x = rx(1)-r
            this.dx *= -1
        }
        if (this.y < r) {
            this.y = r
            this.dy *= -1
        } else if (this.y > ry(1)-r) {
            this.y = ry(1)-r
            this.dy *= -1
        }

        let touched = false
        const puck = this
        lab._ls.forEach(e => {
            if (e.touch) {
                if (e.touch(puck)) touched = true
            }
        })

        if (touched) {
            // reMove
            this.x = px
            this.y = py
            this.x += this.dx * this.speed * dt
            this.y += this.dy * this.speed * dt
        }
        
    }

    draw() {
        save()
        translate(this.x, this.y)

        lineWidth(2)
        stroke(.55, .5, .5)
        circle(0, 0, this.r)
        // line(0, 0, this.dx * 30, this.dy * 30) // speed vector
        restore()
    }

}
