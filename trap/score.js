function score(player) {
    env.score[player] ++
    trap('puck')
    lib.sfx(res.sfx.score, .8)
}
