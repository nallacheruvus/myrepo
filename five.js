//Declarations
//#region 
let aObj = { name: 'sunil', email: 'sun@yahoo.com', age: 21 };
let bObj = { name: 'samuel', email: 'sam@yahoo.com', age: 50 };
let cObj = { name: 'defoe', email: 'defoe@yahoo.com', age: 19 };
let dObj = { name: 'john', email: 'john@yahoo.com', age: 27 };
let eObj = { name: 'kaivalya', email: 'kaivalya@yahoo.com', age: 17 };
let oArr = [aObj, bObj, cObj, dObj, eObj];
//#endregion
//Before sorting on age
//#region 
console.log(oArr);
//#endregion
//After sorting on age
//Ascending sort
//#region 
let r = oArr.sort((a, b) => a.age - b.age);
//#endregion
//descending sort
//#region  
// let r = oArr.sort((a, b) => b.age - a.age);
console.log(r);
//#endregion



