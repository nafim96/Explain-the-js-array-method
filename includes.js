const fruits = [ "Banana", "Orange", "Apple", "Mango" ];

// if value are stored in array includes function return (true) value
const value = fruits.includes( "Mango" );
// Returns true
console.log( value );

// if can't find any value from the array includes method return false because is case sensitive
const value2 = fruits.includes( "Kiwi" );
const value3 = fruits.includes( "mango" );   // first latter small it's return false
// Returns false
console.log( value2 );
console.log( value3 );