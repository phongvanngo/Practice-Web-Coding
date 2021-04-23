var arr = [1, 34, 2, 5, 3, 5, 3, 4];

//copy array -----------------------------

//copy array --> use .slice()
console.log("arr: ", arr);
console.log("arr 2: ", arr2);

var arr2 = arr.slice();
arr2[0] = 10000;

console.log("arr: ", arr);
console.log("arr 2: ", arr2);

//----------------------------------------
const mang = arr.slice();
mang[3] = "hello";

const a = 45;
// a = 34; ---> error
console.log(a);

console.log(mang);

console.log(arr);

//const array can change value
//array can include multi type of data

//delete element in array-------------------
console.log(arr);
var remove = arr.splice(1, 1);
console.log(arr);
console.log(remove);
