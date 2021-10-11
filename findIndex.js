const ages = [ 3, 10, 18, 20, 25, 24, 26 ];

// findIndex method pass the first finding index and return the value.
const findAge = ages.findIndex( ( age ) => age > 18 );

console.log( findAge );

// when findIndex don't find the index number and it's return -1 value
const findAge2 = ages.findIndex( ( age ) => age > 26 );
console.log( findAge2 );