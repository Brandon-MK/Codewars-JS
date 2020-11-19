// Squares numbers individually and concentrates it which then returns a number not a string
function square(num) {
  var arr = num.toString(10).replace(/\D/g, "0").split("").map(Number);

  var sqr = arr.map((n) => Number(n) * n).join("");

  return Number(sqr);
}

square(9414);
