//While Each

Array.prototype.whileEach = function(callback, thisArg) {

    if (this == null) { throw new TypeError('Array.prototype.forEach called on null or undefined'); }

    var T, k;
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") { throw new TypeError(callback + ' is not a function'); }
    
    if (arguments.length > 1) { T = thisArg; }
    k = 0;
    while (k < len) {

      var kValue;
      if (k in O) {
      
        kValue = O[k];
        console.log(T, kValue, k, O)
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
  
  const arr = [1,2,3,4]
  
  arr.whileEach(ele=>console.log(ele))


//SQR

const arr = [1,2,3,4]

Array.prototype.squarer = function(callback, thisArg){
console.log(arguments, this, callback)
	for(i=0;i<this.length;i++ ) {
  const sqr = this[i]*this[i];
  	callback.call(thisArg, sqr, i, this)
	}
  console.log('element', this)
  return this;
}

arr.squarer(ele => console.log('ele', ele))
