let allInsideDivs = document.querySelectorAll('.inside')
let pressedDiv = '';
// Adding Event Listeners to the Divs and returning which div was pressed.

for (let index = 0; index < allInsideDivs.length; index++) {
    const element = allInsideDivs[index];
    element.addEventListener('pointerdown' , ()=> {
        pressedDiv = element;
        whosTurnIsIt();
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
function whoWon() {
    for (let index = 0; index < allInsideDivs.length; index++) {
        if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[1].innerText === 'X' && 
            allInsideDivs[2].innerText === 'X' ) {   
                console.log('X Won')         
        }
        else if (
            allInsideDivs[3].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[5].innerText === 'X'
        ){}
        else if (
            allInsideDivs[6].innerText === 'X' && 
            allInsideDivs[7].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {}
        else if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[3].innerText === 'X' && 
            allInsideDivs[6].innerText === 'X'
        ) {}
        else if (
            allInsideDivs[1].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[7].innerText === 'X'
        ) {}
        else if (
            allInsideDivs[2].innerText === 'X' && 
            allInsideDivs[5].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {}
        else if (
            allInsideDivs[0].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[8].innerText === 'X'
        ) {}
        else if (
            allInsideDivs[2].innerText === 'X' && 
            allInsideDivs[4].innerText === 'X' && 
            allInsideDivs[6].innerText === 'X'
        ) 
        // This is for O Winning
        if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[1].innerText === 'O' && 
            allInsideDivs[2].innerText === 'O' ) {}
        else if (
            allInsideDivs[3].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[5].innerText === 'O'
        ) { }
        else if (
            allInsideDivs[6].innerText === 'O' && 
            allInsideDivs[7].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) { }
        else if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[3].innerText === 'O' && 
            allInsideDivs[6].innerText === 'O'
        ) { }
        else if (
            allInsideDivs[1].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[7].innerText === 'O'
        ) { }
        else if (
            allInsideDivs[2].innerText === 'O' && 
            allInsideDivs[5].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) { }
        else if (
            allInsideDivs[0].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[8].innerText === 'O'
        ) {}
        else if (
            allInsideDivs[2].innerText === 'O' && 
            allInsideDivs[4].innerText === 'O' && 
            allInsideDivs[6].innerText === 'O'
        ) { }



    }};