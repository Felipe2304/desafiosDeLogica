function miniMaxSum(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const totalSum = arr.reduce((acc, value) => {
    return (acc += value);
  }, 0);

  const min = totalSum - maxValue;
  const max = totalSum - minValue;

  console.log(min, max);
}
miniMaxSum([7, 69, 2, 221, 8974]);
// 299 , 9271
