const lucas = (h, m) => {
  const numeros = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
  };
  if (m == 0) {
    return `${numeros[h]} o' clock`;
  }
  if (m == 1) {
    return `${numeros[m]} minute past ${numeros[h]}`;
  }
  if (m < 15) {
    return `${numeros[m]} minutes past ${numeros[h]}`;
  }
  if (m == 15) {
    return `quarter past ${numeros[h]}`;
  }
  if (m < 30) {
    if (m > 20) {
      unidade = m % 10;
      m -= unidade;
      return `${numeros[m]} ${numeros[unidade]} minutes past ${numeros[h]}`;
    }
    return `${numeros[m]} minutes past ${numeros[h]}`;
  }
  if (m == 30) {
    return `half past ${numeros[h]}`;
  }
  if (m == 45) {
    if (h == 12) {
      return `quarter to ${numeros[1]}`;
    }

    return `quarter to ${numeros[h + 1]}`;
  }
  if (m > 30) {
    m = 60 - m;
    if (m > 20) {
      unidade = m % 10;
      m -= unidade;
      if (h == 12) {
        return `${numeros[m]} ${numeros[unidade]} minutes to ${numeros[1]}`;
      }

      return `${numeros[m]} ${numeros[unidade]} minutes to ${numeros[h + 1]}`;
    }
    if (h == 12) {
      return `${numeros[m]} minutes to ${numeros[1]}`;
    }

    return `${numeros[m]} minutes to ${numeros[h + 1]}`;
  }
};

console.log(lucas(5, 45));
