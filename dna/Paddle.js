const df = {
    w: 15,
    h: 100,
}

const REFLECT_VECTORS = [
     .25,
     .20,
     .15,
     .10,
      0,
      0,
    -.10,
    -.15,
    -.20,
    -.25,
]

class Paddle {

    constructor(st) {
        augment(this, df, st) // set default and init values
        this.actions = {}     // a storage object for up and down actions
        this.speed = ry(1)    // speed = screen width in pixels
    }

    init() {
        this.left = (this.name === 'left')
    }

    rect() {
        return {
            x1: this.x-this.w/2,
            y1: this.y-this.h/2,
            x2: this.x+this.w/2,
            y2: this.y+this.h/2,
        }
    }

    touch(puck) {
        const { x1, y1, x2, y2 } = this.rect()
        const x = this.left? x2 : x1
        const d = lib.math.distanceToSegment(puck.x, puck.y, x, y1, x, y2)

        if (d < puck.r) {
            // calculate normal vector components
            const nvec = lib.math.normalVector(x, y1, x, y2) 
            // normal vector is inverted for the left paddle
            // |           |
            // |-->  o  <--|
            // |           |
            const nx = this.left? -nvec[0] : nvec[0]
            const ny = this.left? -nvec[1] : nvec[1]

            // calculate relative vertical hit point
            const dy = puck.y - this.y

            // reflection angles are inverted for the left paddle
            const dir = this.left? -1 : 1
            let fi = atan2(ny, nx)
            const zone = clamp(floor((dy + 50)/10), 0, 9)
            fi += dir * REFLECT_VECTORS[zone] * PI

            puck.dx = cos(fi)
            puck.dy = sin(fi)

            lib.sfx(res.sfx.boing, .3)
            return true
        }
        return false
    }

    evo(dt) {
        // adjust x coordinate
        if (this.left) this.x = rx(.05)
        else this.x = rx(.95)

        // move according to pressed keys
        if (this.actions.up) {
            this.y -= this.speed * dt
            if (this.y < this.h/2) this.y = this.h/2 // top edge
        }
        if (this.actions.down) {
            this.y += this.speed * dt
            if (this.y > ry(1)-this.h/2) this.y = ry(1)-this.h/2 // bottom edge
        }
    }

    draw() {
        save()
        translate(this.x, this.y)

        fill(.6, .35, .45)
        rect(-this.w/2, -this.h/2, this.w, this.h)

        restore()
    }

    up(active) {
        this.actions.up = active
    }

    down(active) {
        this.actions.down = active
    }
}
