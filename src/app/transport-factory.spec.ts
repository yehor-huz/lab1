import { TransportFactory } from "./transport-factory";
import { Car } from "./car";
import { Bicycle } from "./bicycle";
import { Plane } from "./plane";
import { TransportNameMap } from "./transport-name";

describe("TransportFactory", () => {
    it("should create a Car instance", () => {
        const car = TransportFactory.getTransport(TransportNameMap['Car'], "Tesla", 200, 500, "Electric");
        expect(car).toBeTruthy();
        expect(car instanceof Car).toBeTrue();
        expect(car.type).toBe(TransportNameMap['Car']);
        expect(car.name).toBe("Tesla");
        expect(car.maxSpeed).toBe(200);
        expect(car.range).toBe(500);
    });

    it("should create a Bicycle instance", () => {
        const bicycle = TransportFactory.getTransport(TransportNameMap['Bicycle'], "Giant", 30, 100, "Mountain");
        expect(bicycle).toBeTruthy();
        expect(bicycle instanceof Bicycle).toBeTrue();
        expect(bicycle.type).toBe(TransportNameMap['Bicycle']);
        expect(bicycle.name).toBe("Giant");
        expect(bicycle.maxSpeed).toBe(30);
        expect(bicycle.range).toBe(100);
    });

    it("should create a Plane instance", () => {
        const plane = TransportFactory.getTransport(TransportNameMap['Plane'], "Boeing 747", 900, 15000, "SN12345");
        expect(plane).toBeTruthy();
        expect(plane instanceof Plane).toBeTrue();
        expect(plane.type).toBe(TransportNameMap['Plane']);
        expect(plane.name).toBe("Boeing 747");
        expect(plane.maxSpeed).toBe(900);
        expect(plane.range).toBe(15000);
    });

    it("should throw an error for an unknown transport type", () => {
        expect(() => TransportFactory.getTransport("Unknown", "Test", 100, 500, "Param"))
            .toThrowError("Unknown vehicle");
    });
});