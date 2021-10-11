const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
// keys don't change the original array just count the array element
const keys = fruits.keys();

console.log( keys );
let text;
for ( let x of keys )
{
    // how many element in the array it's count and keys value storing in x ;
    console.log( x );
}
