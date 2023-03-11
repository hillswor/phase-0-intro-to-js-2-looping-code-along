function writeCards(array, eventName) {
    let cards = [];
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

function countDown(integer) {
    let count = integer;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}