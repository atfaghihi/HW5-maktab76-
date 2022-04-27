const rectangles = {
    retangle1: [{ x: 2, y: 1 }, { x: 5, y: 5 }],
    rectangle2: [{ x: 3, y: 2 }, { x: 5, y: 7 }]
    };

function areaRectangles(){
    let value1 = Object.values(rectangles)[0][1];
    let value2 = Object.values(rectangles)[1][0];

    let width = Object.values(value1)[0] - Object.values(value2)[0];
    let length = Object.values(value1)[1] - Object.values(value2)[1];

    return width * length;
}

console.log(areaRectangles(rectangles));
