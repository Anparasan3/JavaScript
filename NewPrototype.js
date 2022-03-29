var Quo = function (status) {
    this.status = status;
}

Quo.status = "enlightened";

Quo.get_status = function() {
    return this.status;
}

Quo.prototype.get_status = function() {
    return this.status;
}

var quo = new Quo("confused");
Function.prototype.greet = function(a) {
    console.log('hello' + ' ' +  this, a);
}

function g() {

}

console.log(Quo.get_status()); // "enlightened"
console.log(quo.get_status()); // "confused"
console.dir(g.greet("t"))
