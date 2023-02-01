const divisibleSumPairs = (n, k, ar) => {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let a = i + 1; a < n; a++) {
      if ((ar[a] + ar[i]) % k === 0) count++;
    }
  }

  console.log(count);
  return count;
};
divisibleSumPairs(
  20,
  7,
  [
    36, 46, 25, 97, 57, 14, 21, 50, 75, 58, 54, 32, 73, 11, 36, 22, 95, 46, 54,
    61,
  ]
);
