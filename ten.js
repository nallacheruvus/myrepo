async function fa() {
    return "Hai there";
}
console.log(fa());
fa().then(console.log);
async function fb() {
    return "Another function";
}
fb().then(n => console.log(n));
//promise is a piece of code which is executed at later poinnt of time
var prom = new Promise((res, rej) => {
    res(fb())
});
prom.then(console.log);
async function fc(p) {
    let a = Math.sqrt(p);
    setTimeout(() => {
        console.log(a);
    }, 5000);//simulation of network call
}
var proma = new Promise((resolve, reject) => {
    resolve(fc(10));
});
proma.then(a => console.log(a));
for (let i = 0; i < 10; i++) {
    console.log('***' + (i + 1));
}

