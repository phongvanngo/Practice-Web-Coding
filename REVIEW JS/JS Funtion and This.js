//Link: https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

function hello(thing) {
  return this + " hello " + thing;
}

function hello2(thing) {
  return " heellooo " + thing;
}
(function main() {
  console.log(hello.call("novapo", "trucmei"));
  console.log(hello2.call(undefined,"world"));
})();
