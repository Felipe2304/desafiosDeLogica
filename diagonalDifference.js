const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - i - 1];
  }

  let result = diagonal1 - diagonal2;

  if (result < 0) {
    result = Math.abs(result);
  }

  console.log(result);

  return result;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const result = diagonalDifference(matriz);

checkedResult(2, result);
