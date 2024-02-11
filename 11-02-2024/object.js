let employee = {
  firstName: "Alok",
  lastName: "Kumar",
  email: "alok@gmailcom",
  phone: "8988787676",
};

let employee1 = null;
console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.email);
console.log(employee.phone);
// let { firstName: fn, lastName, email, phone } = employee;

// console.log(fn);
// console.log(lastName);
// console.log(email);
// console.log(phone);

let { firstName, lastName, email, phone } = employee1 ?? {};
console.log(firstName);
