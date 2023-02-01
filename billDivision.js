function bonAppetit(bill, k, b) {
  const annaAccountValue = bill.reduce((acc, itens, _index, arr) => {
    if (itens !== arr[k]) acc += itens / 2;

    return acc;
  }, 0);
  if (annaAccountValue === b) console.log("Bon Appetit");
  else {
    console.log(b - annaAccountValue);
  }
}

const arr = [3, 10, 2, 9];

bonAppetit(arr, 1, 7);
