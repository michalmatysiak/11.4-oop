function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function () {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' $.')
}
var iPhone6S = new Phone('Aplle',2250,'silver')
iPhone6S.printInfo();
var SamsungGalaxyS6 = new Phone('Samsung',2550,'black')
SamsungGalaxyS6.printInfo();
var OnePlusOne = new Phone('OnePlus',1980,'red')
OnePlusOne.printInfo();