function puck() {
    lab.spawn('Puck', {
        name: 'puck',
        x: rx(.5),
        y: ry(.5),
        speed: ry(.8),
    })
    lib.sfx(res.sfx.slide, .5)
}
