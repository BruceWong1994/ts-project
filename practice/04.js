"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
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
