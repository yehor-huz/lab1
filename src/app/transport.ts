export abstract class Transport {
    type: string = '';
    name: string = '';
    maxSpeed: number = 0;
    range: number = 0;
    constructor(type: string, name: string, maxSpeed: number, range: number){
        if (maxSpeed <= 0) throw new Error ("Speed must be positive");
        if( range <= 0) throw new Error ("Range must be positive");
        if(name.length <= 0) throw new Error ("Transport must have a name");
        this.type = type;
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.range = range;
    }
    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
    getRange(){
        return this.range;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
    getFullInfo(){
        return "Name: " + this.getName() + "\n" + "Type: " + this.getType() + "\n" + "Max speed: " + this.getMaxSpeed() + "\n" + "Range: " + this.getRange() + "\n";
    }
}
