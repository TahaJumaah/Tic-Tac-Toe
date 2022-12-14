let allInsideDivs = document.querySelectorAll('.inside')
let pressedDiv = '';
let showWinner = document.querySelector('.game-desc1');

// Adding Event Listeners to the Divs and returning which div was pressed.

for (let index = 0; index < allInsideDivs.length; index++) {
    const element = allInsideDivs[index];
    element.addEventListener('pointerup' , ()=> {
        pressedDiv = element;
        whosTurnIsIt();
        whoWon();
        if (winner === 'O Won' || winner === 'X Won') {
            
            showWinner.textContent = winner + '!';
            showWinner.className = 'winner';
        }
        
})};

let turnCounter = 0;

// Game Definition
const play = (name , mark) =>{
    const drawinDiv = ()=> {
        if (pressedDiv.innerText === '') {
            pressedDiv.innerText = mark;
            turnCounter += 1;
            whoWon();
            // console.log(turnCounter);
        } else {console.log('it ain empty bitch')}
    }
    return {name , mark, drawinDiv}
};



// Player Definition
const playerX = play('Taha' , 'X');
const playerY = play('Sameer' , 'O')

function whosTurnIsIt() {
    if (turnCounter % 2 === 0) {
        playerX.drawinDiv();
    } else{playerY.drawinDiv()}

}


// Deciding Who Wins
let winner = '';
function whoWon() {
    for (let index = 0; index < allInsideDivs.length; index++) {
        if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[1].innerText === 'X' && 
            allInsideDivs[2].innerText === 'X' ) {   
                return winner = 'X Won';   
        };
         if (
            allInsideDivs[3].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[5].innerText === 'X'
        ){
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[6].innerText === 'X' && 
            allInsideDivs[7].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[3].innerText === 'X' && 
            allInsideDivs[6].innerText === 'X'
        ) {
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[1].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[7].innerText === 'X'
        ) {
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[2].innerText === 'X' && 
            allInsideDivs[5].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {
            return winner = 'X Won';   

        }
         if (
            allInsideDivs[2].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[6].innerText === 'X'
        ) {
            return winner = 'X Won';   

        } 
        // This is for O Winning
        if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[1].innerText === 'O' && 
            allInsideDivs[2].innerText === 'O' ) {return winner = 'O Won';   
        }
         if (
            allInsideDivs[3].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[5].innerText === 'O'
        ) {return winner = 'O Won';   
    }
         if (
            allInsideDivs[6].innerText === 'O' && 
            allInsideDivs[7].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) { 
            return winner = 'O Won';   

        }
         if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[3].innerText === 'O' && 
            allInsideDivs[6].innerText === 'O'
        ) { 
            return winner = 'O Won';   

        }
         if (
            allInsideDivs[1].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[7].innerText === 'O'
        ) {
            return winner = 'O Won';   

         }
         if (
            allInsideDivs[2].innerText === 'O' && 
            allInsideDivs[5].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) {
            return winner = 'O Won';   

         }
         if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) {
            return winner = 'O Won';   

        }
         if (
            allInsideDivs[2].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[6].innerText === 'O'
        ) {
            return winner = 'O Won';
         }
    }
};

// Game Ended or We have a Winner




// Resetting the Board
let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('pointerup', ()=>
{
    for (let index = 0; index < allInsideDivs.length; index++) {
        const element = allInsideDivs[index];
        element.innerText = '';
        winner = '';
        showWinner.textContent = 'Tic Tac Toe'
        turnCounter = 0;
        showWinner.className = 'game-desc1';

    }
});