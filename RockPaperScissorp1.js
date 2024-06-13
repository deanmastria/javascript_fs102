const hands = ['rock', 'paper', 'scissors'];

function getHand(){
    return hands[parseInt(math.random()*10)%3]
}

let players = {
    deano: {
        name: 'deano',
        getHand: getHand
    },
    jack: {
        name: 'jack'
        getHand: getHand
    },
}


function playRound() {
    
}

