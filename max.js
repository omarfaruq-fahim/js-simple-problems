const business = 950;
const minister = 750;
const army = 600;
// if(business > minister){
//     console.log('Business person er pola is bigger');
// }
// else{
//     console.log('minister er pola is bigger');
// }

// if(business > minister && business > army){
//     console.log('Business is bigger');
// }
// else if(minister > business && minister > army){
//     console.log('minister is bigger');
// }
// else{
//     console.log('army is bigger');
// }

var max = Math.max(business, minister, army);
console.log('largest is: ', max);