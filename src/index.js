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
}, 3000);


setTimeout(() => {
    setInterval(() => {obstArray.shift()}, 3000)
}, 8000)


// interval for moving obstacles down and checking for collisions

setInterval(() => {
    obstArray.forEach((obsIns) => {
        obsIns.moveDown();

        
        // detect collision
        if (
            myPlayer.positionX < obsIns.positionX + obsIns.width &&
            myPlayer.positionX + myPlayer.width > obsIns.positionX &&
            myPlayer.positionY < obsIns.positionY + obsIns.height &&
            myPlayer.positionY + myPlayer.height > obsIns.positionY
        ){
            console.log("suck it dumbass");
            location.href = "gameover.html"
        }
    });
}, 100);
