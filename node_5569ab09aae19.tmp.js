const divisibleSumPairs = (n, k, ar) => {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let a = ar.length; a > n - i; a++) {
      console.log(ar[a]);
    }

    console.log("espaço");
  }

  return count;
};
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
