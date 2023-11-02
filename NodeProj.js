//  Reto 2. Tema 5 Funciones. 
function sum(op1, op2, op3) {
    result = op1 + op2 + op3
    return result;
}
sum(1, 2, 3)


function subs(op1, op2) {
    result = op1 - op2
    return result;
}
subs(4, 2)



function mult(op1, op2) {
    result = op1 *= op2
    return result;
}
mult(4, 2)



function div(op1, op2) {
    result = op1 /= op2
    return result;
}
div(4, 2)



function square(op1, op2) {
    op1 = op2
    result = op1 * op2
    return result;
}
square(4, 4)



module.exports = { sum, subs, mult, div, square }