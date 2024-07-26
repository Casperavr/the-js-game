// create player instance of player class
const myPlayer = new Player()





// functionality:

document.addEventListener("keydown", (event) => {

    if (event.code === 'ArrowLeft') {
        myPlayer.moveLeft();
    } else if (event.code === 'ArrowRight') {
        myPlayer.moveRight();
    }
});




