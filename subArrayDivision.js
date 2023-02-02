const birthday = (s, d, m) => {
  let count = 0;
  let sum = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let a = i; a < i + m; a++) {
      if (s[a] !== undefined) {
        console.log(s[a]);
      }
    }

    console.log("espaço");
  }
};

const arr = [1, 2, 1, 3, 2];

birthday(arr, 3, 2);
