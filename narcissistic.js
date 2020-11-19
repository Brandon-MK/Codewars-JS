function narcissistic(value) {
  if (value.toString(10).length < 3 || value.toString(10).length === 3) {
    console.log(true);
  } else if (value.toString(10).length !== 3) {
    var arr = value.toString(10).replace(/\D/g, "0").split("").map(Number);
    var arrLength = arr.length;
    var multi = arr.map((i) => Math.pow(Number(i), arrLength));
    var sum = multi.reduce(function (a, b) {
      return a + b;
    }, 0);

    if (
      sum.toString(10).length === 3 ||
      sum.toString(10).length < 3 ||
      sum == value.toString(10)
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
narcissistic(1634);
