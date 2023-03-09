//loops=do something repeatedly
// let i = 0;
// for (; ;) {
//     if (i < 10) {
//         console.log(i + 1);
//     } else {
//         break;
//     }
//     i++;
// }

/*
All
these lines are commented
*/

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// do {
//     console.log(j);
//     j++;
// } while (j < 10);

let arr = [1, 2, 3, 4, 5];
// console.log(arr);
arr.push('satish');//add at the end
arr.push({ name: 'gayatri', email: 'gaya@yahoo.com' });
arr.unshift("Goa");//add in the beginning
arr.unshift(1000);
arr.pop();//remove from the end
arr.shift();//remove from the beginning
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let aa = Array.from([21, 22, 3, 4, 4, 5, 6, 7]);
console.log(aa);
let bb = Array('Science', 'Biology', 'Genetics', 'Plant Physiology');
console.log(bb);
let cc = [];
cc.push(1009);
cc.push(9001);
cc.push(1090);
cc.push(9001);
console.log(cc);

//labelled for
even:
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 1) continue even;
    console.log(i);
}

let obj = { name: 'Hansey', email: "han@yahoo.com" };
console.log(obj.name + " " + obj.email);
console.log(obj["name"] + " " + obj["email"]);

let arr2 = ['Rogue wave', 'Tranquil', 'Jersey Gems', 'Range Robots', 'Alphabet'];
for (const key in arr2) {
    console.log(arr2[key]);
}
let arr3 = [101, 901, 809, 977, 665];
for (const key in arr3) {
    console.log(arr3[key]);
}

for (const i of arr2) {
    console.log(i);
}//iterator

function ff() {
    console.log('Test');
}
ff();
function prnMe(a) {
    console.log(a);
}
arr3.forEach(prnMe);
function sqrMe(a) {
    console.log(a * a);
}
arr3.forEach(sqrMe);
function cubeMe(a) {
    console.log(a * a * a);
}
arr3.map(cubeMe);
let arr4 = [1, 2, 3, 4, 5];
//prn the sqrts of all numbs
function prnSqrta(a) {
    console.log(Math.sqrt(a));
}
// arr4.forEach(prnSqrta);
arr4.forEach(n => console.log(Math.sqrt(n)));
// arr4.map(n => console.log(Math.sqrt(n)));
let arr5 = [21, 22, 24, 23, 25];
let c = Array.toString(arr5);
// console.log(c);
// arr5.forEach(n => console.log(Math.sqrt(n)));
arr5.map(n => console.log(Math.sqrt(n)));
let d = true;
d ? console.log("Its true") : console.log("Its false");//ternary operator
console.clear();
let aObj = { name: 'sunil', email: 'sun@yahoo.com' };
let bObj = { name: 'samuel', email: 'sam@yahoo.com' };
let cObj = { name: 'defoe', email: 'defoe@yahoo.com' };
let dObj = { name: 'john', email: 'john@yahoo.com' };
let eObj = { name: 'kaivalya', email: 'kaivalya@yahoo.com' };
let oArr = [aObj, bObj, cObj, dObj, eObj];
// for (const k in oArr) {
//     console.log(oArr[k]);
// }
// for (const i of oArr) {
//     console.log(i);
// }
// oArr.forEach(a => console.log(a.name + " " + a.email));
// oArr.map(a => console.log(a.name + " " + a.email));

for (let i = 0; i < oArr.length; i++) {
    console.log(oArr[i]);
}