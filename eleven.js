function Books(name, author) {
    this.name = name;
    this.author = author;
}
let pubs = 'Greyman press';
Books.prototype.pubs = pubs;
Books.prototype.toString = function () {
    return this.name + " " + this.author + " " + this.pubs;
}
let a = new Books('Rogue Lawyer', 'John Grisham');
console.log(a.toString());