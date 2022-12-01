let allInsideDivs = document.querySelectorAll('.inside')


// Adding Event Listeners to the Divs and returning which div was pressed.

for (let index = 0; index < allInsideDivs.length; index++) {
    const element = allInsideDivs[index];
    element.addEventListener('pointerdown' , ()=> {return pressedDiv = element});
    
};

// Defining Players

const player = (playerName , Mark) => {
    
}
