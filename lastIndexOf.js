const fruits = [ "Apple", "Orange", "Apple", "Mango" ];

// this method count the selected index and return the index value but it's case sensitive when don't found any element it's return -1
const last = fruits.lastIndexOf( "Orange" );   // Returns 1

console.log( last );
