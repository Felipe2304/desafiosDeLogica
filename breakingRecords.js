const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

const breakingRecords = (scores) => {
  let quantityMaxPoints = 0;
  let quantityMinPoints = 0;
  let maxPoint = scores[0];
  let minPoint = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxPoint) {
      maxPoint = scores[i];
      quantityMaxPoints++;
    }

    if (scores[i] < minPoint) {
      minPoint = scores[i];
      quantityMinPoints++;
    }
  }

  return [quantityMaxPoints, quantityMinPoints];
};

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

const result = breakingRecords(scores);

checkedResult(result, [4, 0]);
