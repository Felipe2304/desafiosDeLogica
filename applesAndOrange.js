const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const NApples = apples.filter(
    (applesValues) => applesValues + a >= s && applesValues + a <= t
  ).length;

  const NOranges = oranges.filter(
    (orangesValues) => orangesValues + b >= s && orangesValues + b <= t
  ).length;

  console.log(NApples);
  console.log(NOranges);
};

const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(7, 11, 5, 15, apples, oranges);
