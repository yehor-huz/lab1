import { Plane } from "./plane";
import { Transport } from "./transport";

describe("Plane", () => {
    let plane: Plane;
    
    beforeEach(() => {
        plane = new Plane("Airplane", "Boeing 747", 900, 15000, "SN12345");
    });

    it("should create an instance of Plane", () => {
        expect(plane).toBeTruthy();
        expect(plane instanceof Plane).toBeTrue();
        expect(plane instanceof Transport).toBeTrue();
    });

    it("should have correct properties", () => {
        expect(plane.type).toBe("Airplane");
        expect(plane.name).toBe("Boeing 747");
        expect(plane.maxSpeed).toBe(900);
        expect(plane.range).toBe(15000);
        expect(plane.serialNumber).toBe("SN12345");
    });

    it("should call fly() and log 'I FLY'", () => {
        spyOn(console, "log");
        plane.fly();
        expect(console.log).toHaveBeenCalledWith("I FLY");
    });
});