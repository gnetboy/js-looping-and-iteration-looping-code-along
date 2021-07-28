// Code your solutions in this file
function writeCards(array,birthday){
 let thankyouMessages = []
for (let i = 0; i < array.length; i++) {
    thankyouMessages.push(`Thank you, ${array[i]}, for the wonderful ${birthday} gift!`);
  }
  return thankyouMessages
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}
