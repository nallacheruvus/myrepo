let bArr = [];
function Books(name, auth) {
    this.name = name;
    this.auth = auth;
}
Books.prototype.toString = function () {
    return `Name:${this.name}\tAuthor:${this.auth}`;
}
let arr1 = ['Rogue lawyer', 'kane and abel', 'gorky park', 'hide away', 'ramayan'];
let arr2 = ['grisham', 'archer', 'martin cruz', 'koontz', 'valmiki'];
for (let i = 0; i < arr1.length; i++) {
    let book = new Books(arr1[i], arr2[i]);
    console.log(book.toString());
    bArr.push(book);
}
async function simServCall() {
    let a = JSON.stringify(bArr);
    setTimeout(() => {
        console.log(a);
    }, 10000);
    return a;
}
// let prom = new Promise((resolve, reject) => {
//     resolve(simServCall());
// });
// let ss = '';
// prom.then(n => {
//     ss = n
// });
// console.log(ss);
simServCall().then(a => console.log(a));
