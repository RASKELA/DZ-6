// Function declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
}
console.log("Function declaration:", calculateAreaDeclaration(5, 10));

// Function expression
const calculateAreaExpression = function (width, height) {
    return width * height;
};
console.log("Function expression:", calculateAreaExpression(5, 10));

// Arrow function
const calculateAreaArrow = (width, height) => width * height;
console.log("Arrow function:", calculateAreaArrow(5, 10));
