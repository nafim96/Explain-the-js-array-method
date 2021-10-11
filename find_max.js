function findMax ( arr )
{
    let max = [];
    for ( let i = 0; i < arr.length; i++ )
    {
        const value = arr[ i ];
        if ( value > max )
        {
            max = value;
        }
    }
    return max;
}

function findMin ( arr )
{
    let min = arr[ 0 ];
    for ( let i = 0; i < arr.length; i++ )
    {
        const value = arr[ i ];
        if ( value < min )
        {
            min = value;
        }
    }
    return min;
}

let numbers1 = [ 3, 4, 100, 88, 0, 1, 3, 5, 6, 7, 9 ];
// const bigNumber = findMax( numbers1 );
// console.log( "Max Number", bigNumber );

const max = Math.max( ...numbers1 );
numbers1.sort( function ( a, b )
{
    return a - b;
} );
// console.log( numbers1 );


const numbers2 = [ 99, 91, 15, 100, 88, 77 ];
const numbers3 = [ 99, 91, 15, 100, 88, 77 ];
// const lowNumber = findMin( numbers2 );
// console.log( "Low Number", lowNumber );

const min = Math.min( ...numbers2 );
// console.log( min );
let sorting = numbers2.sort( ( a, b ) => a - b );

const revers = numbers2.reverse( ( a, b ) => b - a );

console.log( revers );
console.log( sorting );