const birthdayCakeCandles = (candles) => {
  const biggestCandle = Math.max(...candles);

  const quantityCandles = candles.filter(
    (values) => values === biggestCandle
  ).length;

  return quantityCandles;
};

birthdayCakeCandles([3, 2, 1, 3]);
