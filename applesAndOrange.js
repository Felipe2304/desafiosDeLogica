const checkedResult = (a, b) => {
  if (a === b) console.log("resultado correto");
  else console.log(`o resultado ${a}, não se concede com o ${b}`);
};

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const NApples = apples
    .map((applesValues) => {
      return applesValues + a;
    })
    .filter((applesValues) => applesValues >= s && applesValues <= t).length;

  const NOranges = oranges
    .map((orangesValues) => {
      return orangesValues + b;
    })
    .filter((orangesValues) => orangesValues >= s && orangesValues <= t).length;

  console.log(NApples);
  console.log(NOranges);
};

const apples = [-2, 2, 1];
const oranges = [5, -6];

const result = countApplesAndOranges(7, 11, 5, 15, apples, oranges);

checkedResult((1, 1), result);
