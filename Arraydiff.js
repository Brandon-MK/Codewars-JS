function arrayDiff(a, b) {
  var difference = a.filter((x) => {
    b.indexOf(x) === -1;
    a.splice(x, 1);
  });
  console.log(difference);
  console.log(a);
}

arrayDiff([1, 2, 3], [2, 3, 1]);
