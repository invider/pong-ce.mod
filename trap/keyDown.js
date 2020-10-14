function keyDown(e) {
    switch(e.code) {
        case 'Escape':
            trap('newGame')
            break

        case 'KeyW': lab.left.up(true); break;
        case 'KeyS': lab.left.down(true); break;
        case 'ArrowUp': lab.right.up(true); break;
        case 'ArrowDown': lab.right.down(true); break;
    }
}
