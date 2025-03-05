import { Transport } from "./transport";

export class Plane extends Transport {
    serialNumber: string = ' ';
    constructor(override type: string, override name: string, override maxSpeed: number, override range: number, serialNumber: string){
        super(type, name, maxSpeed, range);
        this.serialNumber = serialNumber;
    }
    fly(){
        console.log("I FLY")
    }
}
