const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

const solveMeFirst = (a, b) => {
  return a + b;
};

solveMeFirst(2, 3);

checkedResult(1, 1);
