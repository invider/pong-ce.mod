function keyUp(e) {
    switch(e.code) {
        case 'KeyA': lab.left.up(false); break;
        case 'KeyZ': lab.left.down(false); break;
        case 'ArrowUp': lab.right.up(false); break;
        case 'ArrowDown': lab.right.down(false); break;
    }
}
