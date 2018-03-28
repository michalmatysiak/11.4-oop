function Phone(brand, price, color,benchmark,year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.benchmark = benchmark;
	this.year = year;
}
Phone.prototype.printInfo = function () {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' $.' + 'The phone is ' + this.benchmark + ' benchmark points ' + 'and was released on the market in ' + this.year + '.')
}
var iPhone6S = new Phone('Aplle',2250,'silver', 23032,2016)
iPhone6S.printInfo();
var SamsungGalaxyS6 = new Phone('Samsung',2550,'black',43555,2017)
SamsungGalaxyS6.printInfo();
var OnePlusOne = new Phone('OnePlus',1980,'red',65332,2018)
OnePlusOne.printInfo();