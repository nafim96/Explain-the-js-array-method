const numbers = [ 175, 50, 25 ];

// reducer is take the initial value from the array first index[175]

const value = numbers.reduce( myFunc );

function myFunc ( initial, action )
{
    return initial - action;
}

console.log( value );

const value2 = numbers.reduce( ( initial, action ) => initial - action );

const value3 = numbers.reduce( ( initial, action ) => initial + action );

console.log( "decrement value", value2 );
console.log( "increment value", value3 );