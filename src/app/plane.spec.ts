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
    it("should throw an error if maxSpeed is not positive", () => {
        expect(() => new Plane("Jet", "Boeing", 0, 5000, "SN123")).toThrow(new Error("Speed must be positive"));
      });
    
    it("should throw an error if range is not positive", () => {
        expect(() => new Plane("Jet", "Boeing", 900, 0, "SN123")).toThrow(new Error("Range must be positive"));
      });
    
    it("should throw an error if name is empty", () => {
        expect(() => new Plane("Jet", "", 900, 5000, "SN123")).toThrow(new Error("Transport must have a name"));
      });

    it("should throw an error if serialNumber is empty", () => {
        expect(() => new Plane("Jet", "Boeing", 900, 5000, "")).toThrow(new Error("Plane must have a serial number"));
      });
});