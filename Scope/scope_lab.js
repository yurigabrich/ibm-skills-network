// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }

show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// Practice task
{
    let x = 10;
    const y = 20;
    var z = 30;

    // step 1
    x = 40;
    // y = 50; // Throws TypeError
    z = 60;

    console.log(x, y, z) // Works fine
}

// console.log(x, y, z) // Throws ReferenceError only for 'x' and 'y'
console.log(z) // Works fine

// step 2
x = 70; // new declaration of the variable, now it is a global one
y = 80; // new declaration of the variable, now it is a global one
z = 90; // reassignment of the block variable

console.log(x, y, z) // Throws ReferenceError only for 'x' and 'y' if l.53 and l.54 are commented