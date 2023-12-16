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

//2. Create a  function which will return true if the does contain only alphabets not digits or any symbols
