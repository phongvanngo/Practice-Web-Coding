function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}


console.log(parentFunc());