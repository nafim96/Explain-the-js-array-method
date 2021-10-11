function lowHigherSum ( arr )
{
    const min = arr[ 0 ] < arr[ 1 ] ? arr[ 0 ] : arr[ 1 ];
    const max = arr[ 0 ] > arr[ 1 ] ? arr[ 0 ] : arr[ 1 ];
    let sum = 0;
    for ( let i = min; i <= max; i++ )
    {
        sum += i;
    }
    return sum;
}

console.log( lowHigherSum( [ 4, 1 ] ) );