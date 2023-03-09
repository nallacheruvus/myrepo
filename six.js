//Declarations
//#region 
let arr = [21, 3, 4, 56, 7, 8, 90, 201, -77];
//#endregion
//#region 
let sums = arr.reduce((a, b) => a + b);//aggregate
console.log(sums);
console.log('Average of the array nums is ' + (sums) / arr.length);
let sumsa = arr.reduceRight((a, b) => a + b);
console.log(sumsa);
//#endregion
/**
 * Some operations pertaining to strings
 */
//#region 
let str = 'Hey there Achilees heal is a disease';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let cArr = str.split('');
// console.log(cArr);
console.log(str.split('').reverse().join(''));
let dArr = str.split(' ');
console.log(dArr.length);
console.log('The no of white spaces ' + (dArr.length - 1));
console.clear();
//print only the even chars in the string
let s = '';
for (let i = 0; i < cArr.length; i++) {
    if (i % 2 == 0) {
        s += (cArr[i]);
    }
}
console.log(s.replace(' ', '').replace('  ', ''));
//#endregion