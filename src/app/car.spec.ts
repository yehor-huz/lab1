import { Car } from "./car";
import { Transport } from "./transport";

describe("Car", () => {
    let car: Car;
    
    beforeEach(() => {
        car = new Car("Car", "Chevrolet Camaro", 220, 1000, "Diesel");
    });

    it("should create an instance of car", () => {
        expect(car).toBeTruthy();
        expect(car instanceof Car).toBeTrue();
        expect(car instanceof Transport).toBeTrue();
    });

    it("should have correct properties", () => {
        expect(car.type).toBe("Car");
        expect(car.name).toBe("Chevrolet Camaro");
        expect(car.maxSpeed).toBe(220);
        expect(car.range).toBe(1000);
        expect(car.fuelType).toBe("Diesel");
    });

    it("should call drive() and log 'I DRIVE'", () => {
        spyOn(console, "log");
        car.drive();
        expect(console.log).toHaveBeenCalledWith("I DRIVE");
    });
});