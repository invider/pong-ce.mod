function keyDown(e) {
    switch(e.code) {
        case 'Escape':
            trap('newGame')
            break

        case 'KeyW': case 'KeyA': lab.left.up(true); break;
        case 'KeyS': case 'KeyZ': lab.left.down(true); break;
        case 'ArrowUp':   case 'PageUp':   lab.right.up(true); break;
        case 'ArrowDown': case 'PageDown': lab.right.down(true); break;
    }
}
