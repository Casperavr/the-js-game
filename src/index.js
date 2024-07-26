// create player instance of player class
const myPlayer = new Player();
// const obstacle1 = new Obstacle();
const obstArray = [];   // array of obstacle class instances





// FUNCTIONALITY: -----------------------------------------------

// listening for kepresses
document.addEventListener("keydown", (event) => {

    if (event.code === 'ArrowLeft') {
        myPlayer.moveLeft();
    } else 

    if (event.code === 'ArrowRight') {
        myPlayer.moveRight();
    }

});

// interval for creating obstacles
setInterval(() => {
    const newObstacle = new Obstacle(); 
    obstArray.push(newObstacle);
}, 2000);


setTimeout(() => {
    setInterval(() => {obstArray.shift()}, 2000)
}, 8000)



// setInterval(() => {
//     obstArray.forEach((obsIns) => {
//         obsIns.moveDown();
//     });
// }, 100);

