const hands = ['rock', 'paper', 'scissors']; //an array that creates rock papaer scissors as the constant variables

function getHand(){
    return hands[parseInt(math.random()*10)%3] //returns hands from the array
}

let players = {                               //variable
    deano: {                                  //object 1
        name: 'deano',                        //property 1
        getHand: getHand                      //property 2
    },
    jack: {                                   //object 2
        name: 'jack'                          //property 1
        getHand: getHand                      //property 2
    },
}


function playRound() {
    const player1Hand = players.deano.getHand();
    const player2Hand = players.jack.getHand();
    console.log(`$players.name.deano + plays $player1Hand);
    console.log(`$players.name.jack + plays $player2Hand);                     
    
}

