const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
// just it's converts the string and all value separator by comma Returns "Banana,Orange,Apple,Mango"
const value = fruits.join();


console.log( value );

// join method don't change the original array
console.log( fruits );