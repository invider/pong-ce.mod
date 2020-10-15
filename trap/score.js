function score(player) {
    env.score[player] ++
    trap('spawnPuck')
    lib.sfx(res.sfx.score, .8)
}
