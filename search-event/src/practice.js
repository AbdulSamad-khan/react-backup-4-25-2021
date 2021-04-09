class Car {
  setSound(sound) {
    this.sound = sound;
  }
  drive() {
    return this.sound;
  }
}

car = new Car();

let truck = {
  sound: "putputput",
  driveTruck: car.drive,
};

// This is called the 'dot rule in 'this' context

console.log(truck.driveTruck()); // putputput
car.setSound("Vroom");
console.log(car.drive()); //Vroom
