const numbers = [ 175, 50, 500 ];


// Right reducer take the first element like function first parameter total take value last element of array this array last element 500..  reduceRight work flow: (500 - 50 = 450 - 175 = 275)
let value = numbers.reduceRight( myFunc );
const value2 = numbers.reduceRight( ( initial, action ) => initial - action );
console.log( "decrement value", value2 );

const value3 = numbers.reduceRight( ( initial, action ) => initial + action );
console.log( "increment value", value3 );


function myFunc ( total, num )
{
    return total - num;
}

console.log( value );

// don't change the original array
console.log( numbers );