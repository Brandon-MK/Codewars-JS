function removeParentheses(s) {
  s.includes("(") ? removeParentheses(s.replace(/\([^()]*?\)/, "")) : s;
}
removeParentheses("(w)hello(e)");
