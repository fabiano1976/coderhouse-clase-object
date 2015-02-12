var auto = {marca:"ford", 
			ano:2014, 
			dni:31456789};

var auto1 = {marca:"porsche", 
			ano:1999, 
			dni:61502297};

var auto2 = {marca:"mazda", 
			ano:2013, 
			dni:31456789};

auto.vmax = 30;
auto1.vmax = 45;
auto2.vmax = 40;

auto.acelerar = function () {
	console.log(this.vmax * 2);
}

auto.frenar = function (){
	this.vmax = 0;
}

auto1.acelerar = function () {
	console.log(this.vmax * 2);
}

auto1.frenar = function (){
	this.vmax = 0;
}

auto2.acelerar = function () {
	console.log(this.vmax * 2);
}

auto2.frenar = function (){
	this.vmax = 0;
}