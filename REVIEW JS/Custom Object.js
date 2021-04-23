function makePerson(lastname, fristname) {
  return {
    lastname: lastname + "van",
    fristname: fristname,
    fullName: function () {
      return this.fristname + " " + this.lastname;
    },
    fullNameReverse: function () {
      return this.lastname + " " + this.fristname;
    },
  };
}

var novapo = makePerson("ngo", "phong");

// console.log(novapo.fullNameReverse());
// console.log(novapo.fullName());

// ------------------------------------------------------------

function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}

var mei = new Person("truc", "mei");
// console.log(mei.fullName());
// console.log(mei.fullNameReversed());

// console.log(personFullName());
// ------------------------------------------------------------

Person2.prototype.fullNameReverse = function () {
  return this.first + " " + this.last;
};

Person2.prototype.fullName = function () {
  return this.last + ", " + this.first;
};

function Person2(first, last) {
  this.first = first;
  this.last = last;
}

var nova = new Person2("ngo", "phong");
console.log(nova.fullNameReverse());

// ------------------------------------------------------------

//prototype co the dinh nghia lai object co san trong javascript

