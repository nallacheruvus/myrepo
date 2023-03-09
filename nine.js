let cars = {};
cars.name = 'Octavio';
cars.brand = 'Skoda';
console.log(cars);
let pers = new Object();
pers.name = 'James';
pers.email = 'james@yahoo.com';
console.log(pers);
let booka = { name: 'Rogue Lawyer', author: 'John Grisham' };
booka.email = "jai@yahoo.com";
console.log(booka);
function fa() {
    console.log("fa");
    fb();
}
function fb() {
    console.log("fb");
    fc();
}
function fc() {
    throw new Error("Not applicable");
}
// fa();
// console.trace(fa);