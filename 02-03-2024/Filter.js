const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
const evenarr = arr.filter((element) => element % 2 == 0);
console.log(evenarr);

const names = ["Rahul", "Alok", "Rabi", "Sambit", "Sam"];
const fourletternames = names.filter((name) => name.length == 4);
console.log(names);
console.log(fourletternames);
