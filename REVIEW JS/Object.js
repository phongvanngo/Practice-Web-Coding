function Job(thing) {
  return this.name + " is " + thing;
//   console.log(this.name + " is " + thing);
}

var Person = {
  name: "ngo phong",
};

Person.age = 14;
Person.address = "binh thanh";
Person.job = Job;

console.log(Person.job("student"));
Person.job("dog");

console.log(Person);
