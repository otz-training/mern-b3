/*
  - It requires single operands to operate

  - 1. Increment/decrement operator
    2. Unary Plus
    3. Unary Minus

  - Increment/Decrement :
    a. Pre Increment (++x) / Pre Decrement(--x)
    b. Post Increment (x++) / Pre Decrement(x--)

  - These operators increments or decrements the value by 1.

  - Rule :
    1. For PRE : Here at first value will be updated,then used.
    2. For POST : Here at first vlue is used then it is updated.

  - Example-1 :

    let x=5;
    ++x; // x=x+1
    console.log(x);
 
    Example-2 :

    let y = 6;
    y++; // y=y+1
    console.log(y);

    Example-3 :

    let p = 8;
    console.log(++p); //9
    console.log(p); //9

    Example-4 :

    let p = 8;
    console.log(p++); //8
    console.log(p); //9

    Example-5 :

    let p = 8;
    let q = ++p;
    console.log(q); //9
    console.log(p); //9

    Example-5 :

    let p = 8;
    let q = p++;
    console.log(q); //8
    console.log(p); //9

    Example-6 :
    let a=5;
    let b = ++a + a--;
            6   + 6
    console.log(a); //5
    console.log(b); //12

    Example-7 :
    let a=5;
    let b = ++a + --a;
           
    console.log(a); //5
    console.log(b); //11

    Example-8 :
    let a = 5;
    let b = ++a + --a ;
             6  + 5
    let c = --a + b++ + a++ + b-- + a + b;
              4 + 11  + 4   + 12  + 5 + 11
    console.log(a);//
    console.log(b); //11
    console.log(c);//

    let a = 5;
    console.log(Math.pow(a, 2));
    console.log(a ** 3);

    let x = 9;
    let y = 5;
    let r = x ?? y;
    console.log(r);


    Ternary Operator/Conditional Operator:
    --------------------------------------
    - First expression must be boolean value 
    - In javascript any non-zero consider as true, where  zero is consider as false
    - syntax :

        exp1 ? exp2 : exp3

    - Example:

       let r = 4>5 ? 5 : 3;
       console.log(r);

    - Program:
      Check a numbe ris even or odd ?

      let num = 5;
      let r = num % 2 === 0 ? "Even" : "odd"; 
      console.log(r);
*/

let num = 6;
let r = false ? "Even" : "odd";
console.log(r);
