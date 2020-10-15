function newGame() {
    env.score = {
        left: 0,
        right: 0,
    }
    lab.left.y = ry(.5)
    lab.right.y = ry(.5)

    // replace the puck
    kill(lab.puck)
    trap('puck')

    // show the start timer
    lab.score.hold = 3
    lab.puck.hold = 0
}
