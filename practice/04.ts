enum Direction {
    Up,
    Down,
    Left,
    Right
}

let walk = (dir:Direction) => {
    switch (dir){
        case Direction.Up:
            console.log('go up');
            break;

        case Direction.Down:
            console.log('go down');
            break;

        case Direction.Left:
            console.log('go left');
            break;
            
        case Direction.Right:
            console.log('go right');
            break;
        
    }
        
}

walk(Direction.Up)