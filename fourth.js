let aObj = { name: 'sunil', email: 'sun@yahoo.com' };
let bObj = { name: 'samuel', email: 'sam@yahoo.com' };
let cObj = { name: 'defoe', email: 'defoe@yahoo.com' };
let dObj = { name: 'john', email: 'john@yahoo.com' };
let eObj = { name: 'kaivalya', email: 'kaivalya@yahoo.com' };
let oArr = [aObj, bObj, cObj, dObj, eObj];
let p = oArr.slice(3, 4);//copies and returns the elements
console.log(p);
console.log(oArr.length);
// let q = oArr.splice(0, 3);//removes these elements from array
// console.log(q);
// console.log(oArr.length);
let r = oArr.map(n => '[' + n.name + ' ' + n.email + ']').join("-").toString();
console.log(r);
let oR = r.split('-');
oR.forEach(n => console.log(n));
oArr.flatMap((i, j, k) => {
    console.log(i.name + " " + i.email);
}, null);
//used to combine arrays
let ss = oArr.concat({ name: 'Rodriguez', email: 'rod@steven.com' }, { name: 'Jarvis', email: 'vis@steven.com' });
console.log(ss);
let sd = oArr.reverse();
console.log(sd);

