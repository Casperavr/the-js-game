// create player instance of player class
const myPlayer = new Player();
// const obstacle1 = new Obstacle();
const obstArray = [];   // array of obstacle class instances

let isPaused = false;




// FUNCTIONALITY: -----------------------------------------------

// listening for keypresses


document.addEventListener("keydown", (event) => {

    if (event.code === 'ArrowLeft') {
        myPlayer.moveLeft();
    } else 

    if (event.code === 'ArrowRight') {
        myPlayer.moveRight();
    } 

    if(event.code === "Space" && isPaused === false){
        isPaused = true;
        pauseGame();
        document.getElementById("pause").style.display = "inline-flex";
    } else

    if(event.code === "Space" && isPaused === true){
        isPaused = false;
        startGame();
        document.getElementById("pause").style.display = "none";
    }

});

let obsCreateID;
let obsDelID;
let obsMoveID;




// interval for creating obstacles
obsCreateID = setInterval(() => {
    const newObstacle = new Obstacle(); 
    obstArray.push(newObstacle);
}, 3000);


// interval for deleting elements outside of window
obsDelID = setTimeout(() => {
    setInterval(() => {
        obstArray[0].domElement.remove()
        obstArray.shift()
    }, 3000)
}, 10000)


// interval for moving obstacles down and checking for collisions
obsMoveID = setInterval(() => {
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

        if(pause = false){

        }
    });
}, 100);


// pausing logic

function pauseGame(){
    clearInterval(obsCreateID);
    clearInterval(obsDelID);
    clearInterval(obsMoveID);
}




function startGame(){
    // interval for creating obstacles
    obsCreateID = setInterval(() => {
        const newObstacle = new Obstacle(); 
        obstArray.push(newObstacle);
    }, 3000);
    
    
    // interval for deleting elements outside of window
    obsDelID = setTimeout(() => {
        setInterval(() => {
            obstArray[0].domElement.remove()
            obstArray.shift()
        }, 3000)
    }, 10000)
    
    
    // interval for moving obstacles down and checking for collisions
    obsMoveID = setInterval(() => {
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
    
            if(pause = false){
    
            }
        });
    }, 100);
}







