const fruits = [ "Banana", "Orange", "Lemon", "Apple", "Mango" ];

// slice method don't change the original array it's work  start the slice from starting value like index[1] orange end point index[3] then cut the value before index[3] like before apple and returns the new array
const citrus = fruits.slice( 1, 3 );

//returns the new array
console.log( citrus );

// returns the original array
console.log( fruits );