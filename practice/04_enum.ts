//枚举类型

//数字枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction[2]);

//字符串枚举
// enum Direction {
//     Up = 'up',
//     Down = 'down',
//     Left = 'left',
//     Right = 'right'
// }
// console.log(Direction.Right);
// console.log(Direction['Down']);

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