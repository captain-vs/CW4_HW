interface Vehicle {
    speed: number;
    startEngine(): void;
}

class Bike implements Vehicle {
    speed: number = 60;

    startEngine(): void {
        console.log("Bike engine started" + this.speed);
    }
}

const myBike = new Bike();
myBike.startEngine();
