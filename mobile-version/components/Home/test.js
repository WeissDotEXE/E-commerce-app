function area(shape) {
    switch (shape.kind) {
        case "rectangle": return shape.height * shape.width;
        case "circle": return Math.PI * Math.pow(shape.radius, 2);
    }
}
var myRectangle = { kind: "rectangle", width: 10, height: 20 };
console.log("Rectangle's area is " + area(myRectangle));
var myCircle = { kind: "circle", radius: 10 };
console.log("Circle's area is " + area(myCircle));
