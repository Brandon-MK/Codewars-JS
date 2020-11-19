String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      console.log(word.charAt(0).toUpperCase() + word.slice(1));
    })
    .join(" ");
};
var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase();
