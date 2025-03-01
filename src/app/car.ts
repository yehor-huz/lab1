import { Transport } from "./transport";

export class Car extends Transport {
    fuelType: string = ' ';
    constructor(override type: string, override name: string, override maxSpeed: number, override range: number, fuelType: string){
        super(type, name, maxSpeed, range);
        this.fuelType = fuelType;
    }
    drive(){
        console.log("I DRIVE")
    }
}
