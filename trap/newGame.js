function newGame() {

    // reset the score
    env.score = {
        left: 0,
        right: 0,
    }

    // move paddles to the center
    lab.left.y = ry(.5)
    lab.right.y = ry(.5)

    // replace the puck
    kill(lab.puck)
    trap('spawnPuck')

    // show the start timer
    lab.score.hold = 3
    lab.puck.hold = 0 // puck shouldn't wait
}
