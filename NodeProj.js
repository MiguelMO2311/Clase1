//  Reto 2. Tema 5 Funciones. 
function sum(op1, op2, op3) {
    result = op1 - op2 - op3
}
sum(4, 2)
console.log('sum');



function subs(op1, op2) {
    result = op1 - op2
}
subs(4, 2)
console.log('subs');


function mult(op1, op2) {
    result = op1 *= op2
}
mult(4, 2)
console.log('mult')


function div(op1, op2) {
    result = op1 /= op2
}
div(4, 2)
console.log('div')


function square(op1, op2) {
    op1 = op2
    result = op1 * op2
}
square(4, 4)
console.log('square')


module.exports = { sum, subs, mult, div, square }