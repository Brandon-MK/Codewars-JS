function arrayMadness(a, b) {
  return (
    a.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b, 0) >
    b.map((el) => Math.pow(el, 3)).reduce((a, b) => a + b, 0)
  );
}
arrayMadness([4, 5, 6], [1, 2, 3]);
