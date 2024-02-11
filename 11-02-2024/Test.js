let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

let [x, y, z, ...arr2] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(arr2);

let arr3 = [10, 20];
let p = arr3[3] != undefined ? arr3[3] : 0;
console.log(p);
let [a, b, q = 5] = arr3;
console.log(q);

function getEmployeeDetails() {
  return ["Jhon", "Doe", ["playing", "Swimming", "Singing"]];
}

let employee = getEmployeeDetails();
console.log(employee);

let fName = employee[0];
let lName = employee[1];
let hb1 = employee[2][0];
let hb2 = employee[2][1];
let hb3 = employee[2][2];
console.log(`fName:${fName},LName:${lName},HB1:${hb1}`);
let [firstName, lastName, [hobbies1, hobbies2, hobbies3]] =
  getEmployeeDetails();

console.log(firstName);
console.log(lastName);
console.log(hobbies1);
console.log(hobbies2);
console.log(hobbies3);
