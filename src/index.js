// create player instance of player class
const myPlayer = new Player();
// const obstacle1 = new Obstacle();
const obstArray = [];   // array of obstacle class instances

// let pause = false;




// FUNCTIONALITY: -----------------------------------------------

// listening for kepresses


document.addEventListener("keydown", (event) => {

    if (event.code === 'ArrowLeft') {
        myPlayer.moveLeft();
    } else 

    if (event.code === 'ArrowRight') {
        myPlayer.moveRight();
    } 

    // if(event.code === "Space" && pause === false){
    //     pause = true;
    // } else

    // if(event.code === "Space" && pause === true){
    //     pause = false;
    // }

});



//Math.floor(Math.random() * (maximum - minimum + 1) + minimum)


// interval for creating obstacles


setInterval(() => {
    const newObstacle = new Obstacle(); 
    obstArray.push(newObstacle);
}, 3000);


//obstacleinstance.domelement.remove()
//remove from array



setTimeout(() => {
    setInterval(() => {
        obstArray[0].domElement.remove()
        obstArray.shift()
    }, 3000)
}, 10000)


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