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
    kyle: {                                                            //object 1
        name: 'kyle',                                                  //property 1
        getHand: getHand                                                //property 2
    },
    iggy: {                                                             //object 2
        name: 'iggy',                                                   //property 1
        getHand: getHand                                                //property 2
    },
}


function playRound(p1,p2) {
    const deanoHand = p1.getHand();
    const jackHand = p2.getHand();
    console.log(`${p1.name} plays ${deanoHand}`);
    console.log(`${p2.name} plays ${jackHand}`);                     
    

    if (deanoHand === jackHand) {                                       //returns draw if same hands are played
        return "DRAW";
    } else if (                                                         //returns jack wins if deano plays lesser hands
        (deanoHand === 'rock' && jackHand === 'paper') ||
        (deanoHand === 'paper' && jackHand === 'scissors') ||
        (deanoHand === 'scissors'&& jackHand === 'rock') 
        
    ) {
        return p2
    }
    else {                                                              //returns deano wins if jack plays lesser hands
        return p1
        }

}

// const result = playRound();                                             //placed at the bottom as the variable can only be called after the function "playRound" is defined
// console.log(result);                                                    

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

        console.log(`Score ${deano.name} ${deanoWins} - ${jack.name} ${jackWins}`);
    }

if (deanoWins === playUntil) {
    console.log(`${deano.name} beats ${jack.name}`);
    return deano;
}
else {
    console.log(`${jack.name} beats ${deano.name}`);
    return jack;
}
}

const gameChamp = playGame(players.deano, players.jack, 3);
console.log(`${gameChamp.name} is the Champion!`);

const gameChamp2 = playGame(players.kyle, players.iggy, 3);
console.log(`${gameChamp2.name} is the Champion!`);

function playTournament(gameChamp, gameChamp2, playUntil) {
    
    let champion1 = playGame(p1, p2, playUntil);
    console.log(`${champion1.name} Progresses to the final battle!`);

    let champion2 = playGame(p3, p4, playUntil);
    console.log(`${champion2.name} Progresses to the final battle!`);
    
    console.log("Final Round!");
    let tournamentChampion = playGame(champion1, champion2, playUntil);
    console.log(`Score ${tournamentChampion.name} is the world champion `);
    }


playTournament(players.deano, players.jack, players.kyle, players.iggy, 3);


