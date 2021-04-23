function sum() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) res += arguments[i];
  return res;
}

function avg(...arg) {
  let res = 0;
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
    res += arg[i];
  }
  return res / arg.length;
}

//------------------------------------

function PrintArguments(fristValue, ...arg) {
  console.log(fristValue);
  console.log(arg);
}

//------------------------------------






//------------------------------------

(function main () {
//   var arr = [3, 5, 3, 2, 5, 3, 5, 3, 5];
//   console.log(avg(3, 3, 2, 4, 3, 4, 3, 2, 3, 1));

//   console.log(sum(1, 2, 3, 5, 6, 4, 43));

//   console.log(avg.apply(null, arr));

  PrintArguments("fristValue", 344, 34, 5, 3, 3, 2, 24, 4, 3, 3);
})();
