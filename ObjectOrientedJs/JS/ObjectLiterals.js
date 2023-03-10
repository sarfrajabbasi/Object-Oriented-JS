// Encapsulation means mixing of datas and functionalites in one object;

var car = {
    Model :"i10",
    Color:"black",
    speed(){
        console.log(`${this.Model
        } maximum speed is 120km/hr`);
    },
    numberOfSits(){
        console.log(`${this.Model
        } is 4 siters`);
    }
}
car.wheels = 4
car["Model"] = "rx20"
var product = "wheels"
console.log(car[product]);
car.speed =  function(){console.log("Error");};
car.speed()
car.numberOfSits();
console.log(car);
