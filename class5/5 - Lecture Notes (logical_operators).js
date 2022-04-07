/*

There are 3 logical operators i.e. NOT, AND, OR
In a program, these are written as:
    1. !    (NOT, unary operator)
    2. &&	(AND, binary operator)
    3. ||	(OR, binary operator) 

These are generally applied to boolean operands.

Before understanding logical operators, understand what is true and false

Logical operators to evaluate boolean expressions

The ! operator is very simple. It just inverts (reverses) the operand value.
If you pass it true, it would make it false. If you pass it false, it would make it true. 

For example: */

let x = true;

console.log(!x); // you see, ! has inverted the value of x

// && returns true when both operands are true, othewise, it returns false
console.log("Lets understand how && works ... ");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("example 2");
let a = 1;
let b = 2;
let c = 3;

// we can create composite expressions combining multiple boolean expressions with logical operators

console.log(a < b && b < c);
console.log(a < b && b > c);
console.log(a > b && b < c);
console.log(a > b && b > c);

/* 
|| i.e OR logical operator. returns true, if any of the operand is true.
when both operands are false, it returns false 
*/

console.log("Lets understand how || work ... ");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/* 
Some example from life:
    1. I would visit you if I got free time this weekend and you came back from Karachi.
    2. We would go to picnic if weather was good and we had no assignment due on Monday.
    3. I would run until I tired badly or its 1 hour past.
    4. When you go to shop, buy a copy and pencil for me.
*/

