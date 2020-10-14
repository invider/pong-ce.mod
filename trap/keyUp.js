function keyUp(e) {
    switch(e.code) {
        case 'KeyW': lab.left.up(false); break;
        case 'KeyS': lab.left.down(false); break;
        case 'ArrowUp': lab.right.up(false); break;
        case 'ArrowDown': lab.right.down(false); break;
    }
}
