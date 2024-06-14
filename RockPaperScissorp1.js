const hands = ['rock', 'paper', 'scissors'];                            //an array that creates rock papaer scissors as the constant variables
let winner = null;

function getHand(){
    return hands[parseInt(Math.random()*10)%3]                          //returns hands from the array
}

let players = {                                                         //variable
    deano: {                                                            //object 1
        name: 'deano',                                                  //property 1
        getHand: getHand                                                //property 2
    },
    jack: {                                                             //object 2
        name: 'jack',                                                   //property 1
        getHand: getHand                                                //property 2
    },
}


function playRound() {
    const deanoHand = players.deano.getHand();
    const jackHand = players.jack.getHand();
    console.log(`${players.deano.name} plays ${deanoHand}`);
    console.log(`${players.jack.name} plays ${jackHand}`);                     
    

    if (deanoHand === jackHand) {                                       //returns draw if same hands are played
        return "DRAW";
    } else if (                                                         //returns jack wins if deano plays lesser hands
        (deanoHand === 'rock' && jackHand === 'paper') ||
        (deanoHand === 'paper' && jackHand === 'scissors') ||
        (deanoHand === 'scissors'&& jackHand === 'rock') 
        
    ) {
        return 'Jack WINS!'
    }
    else {                                                              //returns deano wins if jack plays lesser hands
        return 'Deano WINS!'
        }

}

const result = playRound();                                             //placed at the bottom as the variable can only be called after the function "playRound" is defined
console.log(result);                                                    

function playGame(deano, jack, playUntil) {
    let deanoWins = 0;
    let jackWins = 0; 

    while (deanoWins < playUntil && jackWins < playUntil) {
        const victor = playRound(deano, jack);

    if (victor === deano) {
        deanoWins++;
        }
    else if (victor === jack) {
            jackWins++;
        }

        console.log(`Score ${players.deano.name} ${deanoWins} - ${players.jack.name} ${jackWins}`);
    }

if (deanoWins === playUntil) {
    console.log(`${players.deano.name} beats ${playesrs.jack.name}`)

}
else {
    console.log(`${players.jack.name} beats ${playesrs.deano.name}`)
}
}

const gameChamp = playGame(players.deano, players.jack, 3);
console.log(`${winner} is the Champion!`);
// function playTournament() {}
//     deano 
//     jack 
//     playuntil


