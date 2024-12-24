// Implement the Car class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2020);
// Call the start method on the instance of the Car class
myCar.start(); // Logs "Car engine started" to the console
