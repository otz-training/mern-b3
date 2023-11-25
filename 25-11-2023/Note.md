## Control Statements :

These are the statements which controls the flow normal execution.

There are two types of control statements

# 1. Conditional Control Statements

-Based on the condition statement(s) will execute or ignored.

- Javascript provides following conditional statements

  - if Statements
  - if else statements
  - nested if else statements
  - else if ladder

  - switch statements

# 2. Loop Control Statements

- Based on the condition statement(s) will execute repeatedly .

- Javascript Provides you following Loop Control Statements

  A. Entry Control Statements

  while loop
  for loop

  B. Exit Control Statements

  do while loop

# If statement

- Syntax :

  if(condition)
  statement

  if(condition){
  statement(s)
  }

- Example-1:

  if(4<5)
  console.log("A");
  console.log("B");

  OUTPUT:
  A
  B

- Example-2 :

  if(4>5)
  console.log("A");
  console.log("B");

  OUTPUT:
  B

- Example-3 :
  if(4>5){
  console.log("A");
  console.log("B");
  }
  console.log("C");

  OUTPUT:
  C

- Example-4 :
  if(4<5){
  console.log("A");
  console.log("B");
  }
  console.log("C");

  OUTPUT:
  A
  B
  C

- Program :

  WAP to find largest between two number.
  let num1 = 73;
  let num2 = 50;

  if (num1 > num2) {
  console.log(num1 + " is Largest");
  }
  if (num2 > num1) {
  console.log(num2 + " is Largest");
  }

  if (num1 % 2 == 0) {
  console.log(num1 + " is Even");
  }

  if (num1 % 2 != 0) {
  console.log(num1 + " is Odd");
  }

# if else Statement

- Syntax :
  if(condition)
  statement
  else
  statement(s)

  if(condition)
  {
  statement(s)
  }else{
  statement(s)
  }

- Example-1:

  if(4<5)
  {
  console.log("A");
  }else{
  console.log("B");
  }
  console.log("C");

  OUTPUT:
  A
  C

- Example -2

  if(4>5)
  {
  console.log("A");
  }else{
  console.log("B");
  }
  console.log("C");

  OUTPUT:
  A
  C

- Example-3 :

  if(4<5)
  console.log("A");
  console.log("B");
  else
  console.log("C");

  OUTPUT : Error

  - Without else if statement can exist ,but without if statement else can not exists.

  - else should start just after immediate scope of if

  - Above Problems solution

    1. Remove the B statement

       if(4<5)
       console.log("A");
       else
       console.log("C");

    2. Enhance the scope of If

       if(4<5){
       console.log("A");
       console.log("B");
       }
       else
       console.log("C");

- Programs :

  let num1 = 70;
  let num2 = 50;

  if (num1 > num2) {
  console.log(num1 + " is Largest");
  }else {
  console.log(num2 + " is Largest");
  }

  if (num1 % 2 == 0) {
  console.log(num1 + " is Even");
  }else {
  console.log(num1 + " is Odd");
  }

# Nested If else Statements

- Syntax :

  if(condition)
  {

  ***

  ***

  if(condition)
  {

  ***

  if(){

             }else{

             }

         }else{

         }

  }else{
  if(condition)
  {

  ***

  if(){

             }else{

             }

         }else{

         }

  }

  - Find Largest number among three numbers .

        let n1 = 22;

    let n2 = 15;
    let n3 = 50;

    if (n1 > n2) {
    if (n1 > n3) {
    console.log("n1 is largest");
    } else {
    if (n2 > n3) {
    console.log("n2 is largest");
    } else {
    console.log("n3 is largest");
    }
    }
    } else {
    if (n2 > n3) {
    console.log("n2 is largest");
    } else {
    console.log("n3 is largest");
    }
    }

# else If Ladder :

if(conditon)
{

}else if(conditon)
{

}else if(condition)
{

}else{

}

- Program to Find Largest among three number

  if(n1 > n2 && n1 > n3){
  console.lg("n1 is larger");
  }else if(n2>n3 && n2 > n1){
  console.log("n2 is larger");
  }else{
  console.log("n3 is larger");
  }

  - Exercises :

  1.
  2.
  3.

  # switch Statements

  - It a multiway conditional statement

  - It is used to implement menu driven programming.

  - Synatx :

    switch(choice)
    {
    case <value>:
    statement(s)
    break;
    case <value>:
    statement(s)
    break;
    case <value>:
    statement(s)
    break;
    deafult:
    statement(s)
    }

  - Example:

    let ch = 109;

    switch(ch)
    {
    case 100:
    console.log("Call to Police Station");
    break;
    case 101:
    console.log("Call to Fire Station");
    break;
    case 108:
    console.log("Call to Ambulance");
    break;
    default:
    console.log("Invalid Choice");
    }

  - WAP to print day name based on the day number.

    let dayNum = 4;

    switch(dayNum)
    {
    case 0:
    console.log("SUNDAY");
    break;
    case 1:
    console.log("MONDAY");
    break;
    case 2:
    console.log("TUESDAY");
    break;
    case 3:
    console.log("WEDNESSDAY");
    break;
    case 4:
    console.log("THURSDAY");
    break;
    case 5:
    console.log("FRIDAY");
    break;
    case 6:
    console.log("SATURDAY");
    break;
    }

- Exercises :
