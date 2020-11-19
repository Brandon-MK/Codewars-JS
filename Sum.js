var getSum = function (a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1);
  }
};
function su() {
  this.su2 = function () {
    return this;
  };
}

var sup = new su();
var suw = sup.su2();
var com = sup === suw;
console.log(com);
