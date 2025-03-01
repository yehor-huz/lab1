import { Transport } from "./transport";

export class Bicycle extends Transport {
    gearCount: string = ' ';
    constructor(override type: string, override name: string, override maxSpeed: number, override range: number, gearCount: string){
        super(type, name, maxSpeed, range);
        this.gearCount = gearCount;
    }
    cycle(){
        console.log("I CYCLE")
    }
}
