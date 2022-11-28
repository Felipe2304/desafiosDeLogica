const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

function compareTriplets(a, b) {
  let aline = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aline++;
    if (a[i] < b[i]) bob++;
  }

  return [aline, bob];
}

const arr1 = [17, 28, 30];
const arr2 = [99, 16, 8];

const result = compareTriplets(arr1, arr2);
