function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getName = function () {
    return this.name;
}

Product.prototype.getPrice = function () {
    return this.price;
}
Product.prototype.status = true;

let a = new Product("Phong", 1500);
console.log(a.getName());

a.status = false;
console.log(a.status);

let myDay = new Date();
console.log(myDay);

//mở rộng đối tượng Date

Date.prototype.vnFormat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth();
    var dd = this.getDay();
    return `${dd}/${mm}/${yyyy}`;
}

let today = new Date();
console.log('today ', today.vnFormat());