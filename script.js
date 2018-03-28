function Phone(brand, price, color,benchmark) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.benchmark = benchmark;
	this.year = year;
}
Phone.prototype.printInfo = function () {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' $.' + '. The phone is' + this.benchmark + ' benchmark points.')
}
var iPhone6S = new Phone('Aplle',2250,'silver', 23032)
iPhone6S.printInfo();
var SamsungGalaxyS6 = new Phone('Samsung',2550,'black',43555)
SamsungGalaxyS6.printInfo();
var OnePlusOne = new Phone('OnePlus',1980,'red',65332)
OnePlusOne.printInfo();