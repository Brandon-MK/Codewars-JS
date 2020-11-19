function solve(arr) {
  const freq = arr.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {});

  return [...arr].sort((a, b) => {
    return freq[b] - freq[a] || a - b;
  });
}
solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
