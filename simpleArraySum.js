const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

function simpleArraySum(ar) {
  let account = 0;

  for (let i = 0; i < ar.length; i++) {
    account += ar[i];
  }

  return account;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const result = simpleArraySum(arr);

checkedResult(28, result);
