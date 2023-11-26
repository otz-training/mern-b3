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

calculate(1, 100);

function table(num) {
  let i = 1;
  while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
}

table(15);
