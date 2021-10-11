const fruits = [ "Banana", "Orange", "Apple", "Mango" ];

// copyWithin method copy by started number from array past the started value on target value override the original array.. notes://copyWithin(required:target, optional:[start, end])
const value = fruits.copyWithin( 2, 3 );
console.log( value );
console.log( fruits );