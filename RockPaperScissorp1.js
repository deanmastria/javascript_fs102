const hands = ['rock', 'paper', 'scissors']; //an array that creates rock papaer scissors as the constant variables

function getHand(){
    return hands[parseInt(Math.random()*10)%3] //returns hands from the array
}

let players = {                               //variable
    deano: {                                  //object 1
        name: 'deano',                        //property 1
        getHand: getHand                      //property 2
    },
    jack: {                                   //object 2
        name: 'jack',                          //property 1
        getHand: getHand                      //property 2
    },
}


function playRound() {
    const deanoHand = players.deano.getHand();
    const jackHand = players.jack.getHand();
    console.log(`${players.deano.name} plays ${deanoHand}`);
    console.log(`${players.jack.name} plays ${jackHand}`);                     
    

if (deanoHand === jackHand) {
    return ("DRAW");
} else if (
    (deanoHand === 'rock' && jackHand === 'paper') ||
    (deanoHand === 'paper' && jackHand === 'scissors') ||
    (deanoHand === 'scissors'&& jackHand === 'rock') 
    
 ) {
    return ('Jack WINS!')
 }
    else {
    return ('Deano WINS!')
    }

}

