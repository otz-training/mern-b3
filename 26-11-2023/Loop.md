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
