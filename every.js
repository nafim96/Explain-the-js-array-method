const ages = [ 23, 45, 16, 170, 54, 21, 15 ];

// every method work by the roles of all array element are true this function return true and once element false return false notes: when find and take the index[2] is false it's not iterate total array and ideally return false
const newAge = ages.every( ( cValue, index, arr ) =>
{
    console.log( arr, index );
    return cValue > 18;
} );

console.log( newAge );