var auto = {marca:"ford", 
			ano:2014, 
			dni:31456789};

var auto1 = {marca:"porsche", 
			ano:1999, 
			dni:61502297};

var auto2 = {marca:"mazda", 
			ano:2013, 
			dni:18296789};

var persona = { nombre: "Juan",
				dni:61502297} 

var persona1 = {nombre: "Fabiano",
				dni:18296789}

var persona2 = {nombre: "Maria",
				dni:31456789}

var autos = [auto, auto1, auto2];
var personas = [persona, persona1, persona2];

function pordni (doc) {
	for ( i = autos.length - 1; i >= 0; i--) {
		if (autos[i].dni === doc) {
			for ( j = personas.length - 1; j >= 0; j--) {
				if (autos[i].dni === personas[j].dni) {
				console.log("El auto " + autos[i].marca + " ano: " + autos[i].ano + " pertenece a " + personas[j].nombre );
			};
		};
	};
};

};




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