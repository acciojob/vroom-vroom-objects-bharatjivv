// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Inherit properties from Car
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit prototype methods from Car
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add method specific to SportsCar
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
