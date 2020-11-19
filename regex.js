const string = "my name is Brandon";
const regex = /my name is ([a-zA-Z]+)/;
const match = regex.exec(string);
if (match) {
  const name = match[1];
  console.log(name);
} else {
  console.log("No match");
}
