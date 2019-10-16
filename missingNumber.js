A = [1, 2, 4, 5, 6];

function getMissingNo(A) {
  let n = A.length;
  let total = ((n + 1) * (n + 2)) / 2;

  let sum = A.reduce((a, b) => a + b);

  console.log(sum);
  return total - sum;
}

let total = getMissingNo(A);
console.log("Final " + total);
