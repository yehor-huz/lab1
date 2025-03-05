import { Bicycle } from './bicycle';
import { Transport } from "./transport";

describe("Bicycle", () => {
    let bicycle: Bicycle;
    
    beforeEach(() => {
        bicycle = new Bicycle("Bicycle", "Ranger XTX", 22, 100, "7");
    });

    it("should create an instance of bicycle", () => {
        expect(bicycle).toBeTruthy();
        expect(bicycle instanceof Bicycle).toBeTrue();
        expect(bicycle instanceof Transport).toBeTrue();
    });

    it("should have correct properties", () => {
        expect(bicycle.type).toBe("Bicycle");
        expect(bicycle.name).toBe("Ranger XTX");
        expect(bicycle.maxSpeed).toBe(22);
        expect(bicycle.range).toBe(100);
        expect(bicycle.gearCount).toBe("7");
    });

    it("should call cycle() and log 'I CYCLE'", () => {
        spyOn(console, "log");
        bicycle.cycle();
        expect(console.log).toHaveBeenCalledWith("I CYCLE");
    });
});