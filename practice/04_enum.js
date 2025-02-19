"use strict";
//枚举类型
//数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
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
let walk = (dir) => {
    switch (dir) {
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
};
walk(Direction.Up);
