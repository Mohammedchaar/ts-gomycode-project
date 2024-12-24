// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Car class
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);

// Call the start method on the instance of the Car class
myCar.start(); // Logs "Car engine started" to the console
