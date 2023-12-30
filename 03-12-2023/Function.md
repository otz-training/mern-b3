# Function in Javascript

- Functions are the first class citizen in Javascript.

- Definition Of Function :

  It is a self defined block which performs a predefined task.

  for example : Math.pow() get the power of a number.

- Adavantages of Function:

  - Modularity

  - Reusability

  - Reduce codebase

  - Easy to Debug

  - Reduce the complexity of the program

  Example:

  let num1 =5;
  let num2 =4;
  console.log(num1+num2);
  console.log(num1-num2);
  console.log(num1\*num2);
  console.log(num1/num2);
  console.log(45+60);

  ## Example of Modularity and Reusability :

  let num1 = 5;
  let num2 = 4;
  console.log(sum(num1,num2));
  console.log(sub(num1,num2));
  console.log(mul(num1,num2));
  console.log(div(num1,num2));
  console.log(sum(30,40));
  console.log(sum(12,38));
  function sum(x,y)
  {
  return x+y;
  }
  function sub(x,y)
  {
  return x-y;
  }
  function mul(x,y)
  {
  return x\*y;
  }
  function div(x,y)
  {
  return x/y;
  }

## How to define a function in JS

syntax :

function <function_name>(parameters)
{
// logic
[return <value>]
}

Example :

function sum(num1,num2)
{
return num1+num2;
}

- return statement is optional

## Parts of the function :

- In generally a function consists of three things

  a. Function Declaration (Not Required) / function prototype

  b. Function Call :

         let res = sum(5,6);

         - Arguments : The value we passed to the function call is known as arguments
         - Function call  statement simply calls the function definition just by passing
           arguments to the parameter of the function.

  c. Function Definition

        - In function defintion we actually write the logic of the function .

        - Example:

          function sum(x,y)
          {
              return x+y;
          }

       - Here , x and y is called formal parameter.They suppose to be initialized
         during function call.



       - The number of time we call to the function by passing different arguments
         the formal parameters receive those arguments differently with each function call.

## Categories of Function :

1.  Function without parameter and without return type

    ```
    function printLine(){
        let str='';
        for(let i=0;i<=100;i++)
        {
           str+='#';
        }
        console.log(str);
    }

    printLine();
    ```

2.  Function with parameter and without return type

    ```
    function PrintVal(val){

        console.log("val="+val);
    }

    printVal(5);
    ```

3.  Function without parameter and with return type

    ```
    function PI(){

        return 3.141;
    }
    // find area of circle whose radius r is 5
    let r = 5;
    let area = PI() * r * r;
    console.log(`${PI()}*${r}*${r}=${area}`);
    ```

4.  Function with parameter and with return type

    ```
    function fact(num){
       let f=1;
       while(num!=0)
       {
          f = f * num;
          num--;
       }
       return f;
    }

    let x = fact(5);
    console.log(x);
    ```

## Types of Function

There are two types of function

1.  User Defined Function

2.  Predefined Function

    a. Mathmatical Functions

    b. Date Functions

    c. String Functions

    d. Numeric Functions

    e. Array Functions

# Exercises Using User defined Function :

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

https://contactmentor.com/js-function-exercises-solution/

# Adavance Concepts On function :

1. Arrow Function

2. Default Arguments

3. In JS function are kind of object with type function

4. Function Properties :
   arguments
   Length
   Prototype
5. Function Methods :
   call()
   apply()
   bind()

6. Anonymous Function

7. Callback Function

8. Closure in JS

## Predefined Functions :

# 1. Mathematical Functions :

- These functions are responsible for mathematical operations.

- These functions are present under an Object known as Math Object.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

- Math object having Properties and Methods

  Properties :

  ***

  Math.E
  Euler's number and the base of natural logarithms; approximately 2.718.

Math.LN10
Natural logarithm of 10; approximately 2.303.

Math.LN2
Natural logarithm of 2; approximately 0.693.

Math.LOG10E
Base-10 logarithm of E; approximately 0.434.

Math.LOG2E
Base-2 logarithm of E; approximately 1.443.

Math.PI
Ratio of a circle's circumference to its diameter; approximately 3.14159.

Math.SQRT1_2
Square root of ½; approximately 0.707.

Math.SQRT2
Square root of 2; approximately 1.414.

Methods :

---

1.  Math.abs()
2.  Math.floor()
3.  Math.max()
4.  Math.min()
5.  Math.pow()
6.  Math.random()
7.  Math.round()
8.  Math.sign()
9.  Math.sqrt()
10. Math.trunc()
11. Math.ceil()

# 2. String Handling Functions :

## String In Javascript :

let name = "Alok Kumar"

console.log(typeof name);

### String Function Lists :

---

| SLNO | FUNCTION NAME | PURPOSE |

---

1.  anchor() :(Deprecated) Adds an anchor tag to the specified string

    Example :
    let str = "Welcome to Javascript string handling function tutorial";
    let a = str.anchor();
    console.log(a);

    output :
    <a name="undefined">Welcome to Javascript string handling function tutorial</a>

2.  at() : It accepts the index of string and returns the charcater present at that index.

        Example :
        let str = "Welcome to Javascript string handling function tutorial";
        let item = str.at(0);
        console.log(item); //W

        let item = str.at(55);
        console.log(item);// undefined

        let item = str.at(-1);
        console.log(item);//l

        let item = str.at(54);
        console.log(item);//l

        let item = str.at(-55);
        console.log(item);//W

        Example-2 : Count Number of r's in the string

        let count = 0;
        for (let i = 0; i < str.length; i++) {
        if (str.at(i) == "r" || str.at(i) == "R") {
        count++;
        }
        // console.log(str.at(i));
        }
        console.log("Total Number of r's :" + count);

        Example-3 : Print Words in the string line by line using at() method

        let str = "Welcome to Javascript string handling function tutorial";
        let word = "";
        let arr = [];
        for (let i = 0; i < str.length; i++) {
        if (str.at(i) == " ") {
        console.log(word);
        arr.push(word);
        word = "";
        continue;
        }
        word = word + str.at(i);
        }

        console.log(arr);
        console.log(arr[0]);

        Example-4 : Count the frequency of a word in a string

        console.log(

          findWordFrequesncy("this is a ball , this is a flower, this is a dog", "this")
          );
          function findWordFrequesncy(str, word) {
          //logic
          let w = "";
          let arr = [];
          for (let i = 0; i < str.length; i++) {
          if (str.at(i) == " ") {
          arr.push(w);
          w = "";
          continue;
          }
          w = w + str.at(i);
          }
          console.log(arr);
          let count = 0;
          for (let i = 0; i < arr.length; i++) {
          if (word === arr[i]) {
          count++;
          }
          }
          return count;
          }

3.  big() :(deprecated) add the <big></big> tag to the string
     <script>
        let str = "Welcome to Javascript string handling function tutorial";
        let b = str.big();
        document.write(str);
        document.write(b);
        let a = str.anchor();
        document.write(a);
    </script>

4.  blink()

5.  bold()

6.  charAt() : same as at()

    let str = "Welcome to Javascript string handling function tutorial";
    let b = str.charAt(0);
    console.log(b);

7.  charCodeAt()
    character ASCII Code

    ***

        A-Z        65 - 90
        a-z        97 - 122
        0-9        48 - 57

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < str.length; i++) {
          console.log(str.charAt(i) + "----->" + str.charCodeAt(i));
        }

        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
          console.log(str.charAt(i) + "----->" + str.charCodeAt(i));
        }

        str = "0123456789";
        for (let i = 0; i < str.length; i++) {
          console.log(str.charAt(i) + "----->" + str.charCodeAt(i));
        }

        //1. Count number of vowel and consonant in a string

        //2. Create a  function which will return true if the string contains only alphabets not digits or any symbols

        function IsAlphabets(str) {
          for (let i = 0; i < str.length; i++) {
            // A-Z : 65-90
            //a-z :97-122
            if (
              str.charCodeAt(i) < 65 ||
              (str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97) ||
              str.charCodeAt(i) > 122
            ) {
              return false;
            }
          }
          return true;
        }

        console.log(IsAlphabets("Abcd1"));

8.  codePointAt()

    SAME as charCodeAt()

9.  concat()

    let str1 = "Hello ";
    let str2 = "World ";
    let str3 = str1 + str2;
    let str4 = str1.concat(str2);
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);

10. String() : Constructor Function ,using it you can create string object

        let str = new String();
        console.log(str);

        let str1 = new String("Welcome");
        console.log(str1);

        console.log(String.prototype);

11. endsWith()

    let str = "Welcome";
    let names = ["Rahul", "Rakul", "Pikul", "Ravi", "Rajesh", "Milu"];
    console.log(str.endsWith("e"));

    //Find out the names who is end with l.

    for (let i = 0; i < names.length; i++) {
    if (names[i].endsWith("l")) {
    console.log(names[i]);
    }
    }

12. fixed()

13. fontcolor()

14. fontsize()

        console.log(str.fontsize("80px").fontcolor("green"));

        document.write(str1.fixed());
        document.write('<br>');
        document.write("Font Color is "+str1.fontcolor("red"));
        document.write('<br>');
        document.write("Font Size is "+str1.fontsize("80px").fontcolor("green"));
        document.write('<br>');

15. includes() : Returns true /false based on searching

        str2 = "Rahul,Rakul,Pikul,Ravi,Rajesh,Milu";
        console.log(str2.includes("Ravindra"));

16. indexOf()

17. isWellFormed()

18. italics()

19. lastIndexOf()

20. link()

21. localeCompare()

22. match()
23. matchAll()
24. normalize()
25. padEnd()
26. padStart()
27. repeat()
28. replace()
29. replaceAll()
30. search()
31. slice()
32. small()
33. split()
34. startsWith()
35. strike()
36. sub()
37. substr()
38. substring()
39. sup()
40. toLocaleUpperCase()
41. toLowerCase()
42. toString()
43. toUpperCase()
44. toWellFormed()
45. trim()
46. trimEnd()
47. trimStart()
48. trimRight()
49. trimEnd()
50. trimStart()

    let str = " Welcome ";

    console.log(str);
    console.log(str.length);

    let str2 = str.trim(); //removes leading space and trailing space
    console.log(str2.length);

    let str3 = str.trimEnd();
    console.log(str3.length);

    let str4 = str.trimStart();
    console.log(str4.length);

51. valueOf()

Exercises :

https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

## 30-12-2023 :SATURDAY

# Date Functions :

1.constructor Date()
2.getDate()
3.getDay()
4.getFullYear()
5.getHours()
6.getMilliseconds()
7.getMinutes()
8.getMonth()
9.getSeconds()
10.getTime()
11.getTimezoneOffset()
12.getUTCDate()
13.getUTCDay()
14.getUTCFullYear()
15.getUTCHours()
16.getUTCMilliseconds
17.getUTCMilliseconds()
18.getUTCMinutes()
19.getUTCMonth()
20.getUTCSeconds()
21.getYear()
22.setDate()
23.setFullYear()
24.setHours()
25.setMilliseconds()
26.setMinutes()
27.setMonth()
28.setSeconds()
29.setTime()
30.setUTCDate()
31.setUTCFullYear()
32.setUTCHours()
33.setUTCMilliseconds()
34.setUTCMinutes()
35.setUTCMonth()
36.setUTCSeconds()
37.setYear()
38.toDateString()
39.toUTCString()
40.toISOString()
41.toJSON()
42.toLocaleDateString()
43.toLocaleString()
44.toLocaleTimeString()
45.toString()
46.toTimeString()
47.toUTCString()
https://www.w3resource.com/javascript-exercises/javascript-date-exercises.php

## Array :

1. What is array
2. Why array
3. How to implement array in js
4. Types of array
5. Manipulation of array using different loop
6. Array Methods
7. Operations on Array

   -> Traversal
   -> Sorting
   -> Searching
