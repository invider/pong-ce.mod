function keyUp(e) {
    switch(e.code) {
        case 'KeyW': case 'KeyA': lab.left.up(false); break;
        case 'KeyS': case 'KeyZ': lab.left.down(false); break;
        case 'ArrowUp':   case 'PageUp':   lab.right.up(false); break;
        case 'ArrowDown': case 'PageDown': lab.right.down(false); break;
    }
}
