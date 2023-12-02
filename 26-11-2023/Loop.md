# Loops in Javascript

A. Entry Control loop

In this case at first condition has been tested if condition satisfies then statement(s) present inside the loop will execute or not.

## while Loop :

-syntax :

```
initialization
while(condition)
{
statement(s)
updation
}
```

- Example :

#### WAP to print 1 to 100

let i = 1;
while(i<=100)
{
consoe.log(i);
i++;
}

#### WAP to print all odd numbers between 100 to 200

```

let i=100;
while(i<=200)
{
if(i%2!=0)
{
consoe.log(i);
}
i++;
}

```

#### WAP to count number of even numbers and odd numbers between specific range

```

function calculate(start, end) {
let evenCount = 0;
let oddCount = 0;
if (start < end) {
while (start <= end) {
if (start % 2 == 0) {
evenCount++;
} else {
oddCount++;
}
start++;
}
}
console.log("Total Even Numbers :" + evenCount);
console.log("Total Odd Numbers :" + oddCount);
}

```

#### WAP to print multiplication table of a number

```

5 x 1 = 5
5 x 2 = 10
.
.
.
5 x 10 = 50

```

```

function table(num) {
let i = 1;
while (i <= 10) {
console.log(`${num} x ${i} = ${num * i}`);
i++;
}
}

    table(15);

```

# Task : Fllow the algorith and Flowchart PPT for Exercise on While Loop

B. Exit Control Loop :

At first the statement(s) present inside the loop will execute at least once ,then checks for the condition if condition is true then it will execute the statments of the loop and the process will repeat untill the condition is true.

```

```

```

```

```

```

# 02-12-2023 : SATURDAY

---

## For Loop :

- It is an entry control loop

- It is used in definitie case i.e priorly we know how many times loop will continue.

- Syntax :

  for(initialization;condition;updation)
  {
  statements(s)
  }

- Example :

  for(let i=1;i<=100;i++)
  {
  Console.log(i);
  }

- Nested For loop :

  When a loop present within another loop then this is called nested loop.

- let str='';
  for(let i=1;i<=4;i++)
  {
  for(let j=1;j<=i;j++)
  {
  str+='\* '
  }
  str+='<br>';
  }

# Do while Loop :

---

- It is an exit control loop

- The statement(s) will execute at least once even if condition is false.

- syntax :

  initialization

  do{

  statement(s)

  }while(condition);

- Print one to 100 using do while
  let i=1;
  do{
  console.log(i);
  i++;
  }while(i<=100)

# Jumping Statement : break & continue

### break Statement :

- it is used inside switch statement and Loop Statement

- when break statements executes it makes the control out from the body.

- Inside the loop ,break statement stops the loop unconditional or immaturly.

- Example:

  for(let i=1;i<=10;i++)
  {
  if(i==5)
  {
  break;
  }
  console.log(i);
  }

### continue Statement :

      -------------------
    - It is only used inside loop body.

    - When continue statement executes it goes to the next iteration from that place.

    - for (let i=1;i<=10;i++)
      {
           if(i==5)
           {
              continue;
           }
           console.log(i);
      }

    - WAP to accept 10 positive Number
