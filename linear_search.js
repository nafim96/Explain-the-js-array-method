const arr = [ 4, 5, 3, 5, 3, 6, 2, 63, 6754, 35, -5, -10, 672, 43465, 54, 653, 732, 73, 44, 6, 3 ];
const searchLinear = 6;
const firstDate = new Date();


for ( let i = 0; i < arr.length; i++ )
{
    const element = arr[ i ];
    if ( element === searchLinear )
    {
        console.log( element, i );
        // @ts-ignore
        return;
    }
}
console.log( "Not found" );
const oldDate = new Date();
console.log( Number( oldDate ) - Number( firstDate ) );