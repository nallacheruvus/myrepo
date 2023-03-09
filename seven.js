function tester(a) {
    return Math.sqrt(a);
}
var aa = tester;
console.log(aa(2));
const bb = (a) => Math.sqrt(a);
console.log(bb(2));
function convCaps(a) {
    return a.toUpperCase();
}
var cc = convCaps;
console.log(cc('verbose'));
const dd = (a) => a.toUpperCase();
console.log(dd('verbose'));
function retSums(a, b) {
    return a + b;
}
const mySums = (a, b) => a + b;
console.log(retSums(1, 2));
console.log(mySums(1, 2));
//Constructor Function
function Person(name, email) {
    this.name = name;
    this.email = email;
}
let aaa = new Person('Jarvis', 'vis2@yahoo.com');
let bba = new Person('Hegde', 'hegde@yahoo.com');
let aab = new Person('Rajesh', 'raj@yahoo.com');
let bbc = new Person('Revanth', 'reva@yahoo.com');
let aac = new Person('Laxmi', 'laxmi@yahoo.com');
let oArr = [aaa, bba, aab, bbc, aac];
oArr.sort((a, b) => a.name.length - b.name.length);
console.log(JSON.stringify(aaa));
console.log(JSON.stringify(bba));
//Javascript Object Notation=Packet exchange lang used in rest services
console.log(JSON.stringify(oArr));

let rr = 'Goats can climb mountains they are sturdy';
let l = rr.length;
for (let i = 0; i < l; i++) {
    // const t = rr.charAt(i);
    const t = String.fromCodePoint(Number.parseInt(rr.charCodeAt(i)));//typecasting a whole no to char
    console.log(t);
}

let zz = "abracadabra ";
let zza = zz.repeat(6);
console.log(zza);
console.log(zz.replace('a', 'c').replace('a', 'c'));




