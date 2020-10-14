function newGame() {
    env.score = {
        left: 0,
        right: 0,
    }
    lab.left.y = ry(.5)
    lab.right.y = ry(.5)
    kill(lab.puck)
    trap('puck')
}
