const ages = [ 3, 10, 15, 16, 17 ];

function checkAdult ( age )
{
    return age >= 14;
}
// Some if condition are success Returns true
const someValue = ages.some( checkAdult );
console.log( someValue );