let arr1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(arr1[i][j]);
    }
}

let arr2 = [[['a', 'b'], ['c']], [['p', 'q'], ['r']], [['l', 'm'], ['n']]];
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0, k = 0; j < 2, k < 2; j++, k++) {
//         console.log(arr2[i][j][k]);
//     }
// }

arr2.forEach(n =>
    n.forEach(p =>
        p.forEach(n => console.log(n))
    )
)

let arr3 = [['sanjeev', 'rajeev'], ['mukul', 'manish'], ['raj', 'ramesh'], ['euro', 'dollar'], ['peking', 'venice']];
arr3.forEach(n =>
    n.forEach(p => console.log(p))
)

function Person(name, email) {
    this.name = name;
    this.email = email;
}

let pArr = [];
let names = ['James', 'Joyse', 'Pamela', 'Jeevan', 'John'];
let emails = ['James@yahoo.com', 'Joyse@yahoo.com', 'Pamela@yahoo.com', 'Jeevan@yahoo.com', 'John@yahoo.com'];
for (let i = 0; i < names.length; i++) {
    let per = new Person(names[i], emails[i]);
    pArr.push(per);
}

function fmtPer(p) {
    console.log(p.name + " " + p.email);
}

// pArr.forEach(fmtPer);
// pArr.forEach(n => console.log(n.name + " " + n.email));
function fmtr(p) {
    let a = `Name:${p.name}\nEmail:${p.email}\n*************\n`;
    console.log(a);
}
// pArr.forEach(fmtr);
//placeholder-template strings
let r = 'Hello there'
let a = `Haider ${r}`;
console.log(a);

pArr.forEach(n => {
    let p = `Name of the person:${n.name}\tEmail:${n.email}`;
    console.log(p);
});
let arr5 = [[21, 22], [33, 44], [55, 66], [77, 88]];
arr5.map(n =>
    n.map(a => console.log(a))
);
pArr.map(n => {
    let p = `Name:${n.name}\tEmail:${n.email}`;
    console.log(p);
});

