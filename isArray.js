const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
const newFruits = { "i": "hello", "you": "hi" };

// isArray method just contain the array and return (true )
const value = Array.isArray( fruits );
// Returns true
console.log( value );


// isArray method when contain without array is just return (false)
const value2 = Array.isArray( newFruits );
// Returns false
console.log( value2 );