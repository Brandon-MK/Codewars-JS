function maskify(cc) {
  console.log(
    cc
      .split("")
      .map((i, index) => (index < cc.length - 4 ? "#" : i))
      .join("")
  );
}
maskify("67890");
