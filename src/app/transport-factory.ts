import { Bicycle } from "./bicycle";
import { Car } from "./car";
import { Transport } from "./transport";
import { TransportNameMap } from "./transport-name";

export class TransportFactory {
    public static getTransport(type: string, name: string, maxSpeed: number, range: number, parameter: string): Transport {
        if(type == TransportNameMap['Car']) return new Car(type, name, maxSpeed, range, parameter);
        else if(type == TransportNameMap['Bicycle']) return new Bicycle(type, name, maxSpeed, range, parameter);
        else throw new Error("Unknown vehicle");
    }
}
