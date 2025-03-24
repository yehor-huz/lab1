import { Transport } from "./transport";

export class Plane extends Transport {
    serialNumber: string = ' ';
    constructor(override type: string, override name: string, override maxSpeed: number, override range: number, serialNumber: string){
        if(serialNumber.length <= 0) throw new Error ("Plane must have a serial number");
        super(type, name, maxSpeed, range);
        this.serialNumber = serialNumber;
    }
    fly(){
        console.log("I FLY")
    }
}
