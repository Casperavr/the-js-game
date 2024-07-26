class Player {
    constructor(){
        // create basic position and size properties
        this.positionX = 20;
        this.positionY = 20;
        this.width = 20;
        this.height = 20;

        // create dom element for player
        this.playerDiv = document.createElement("div");
        const boardElement = document.getElementById("board");


        this.playerDiv.id = "player";
        this.playerDiv.style.left = `${this.positionX}vw`;
        this.playerDiv.style.bottom = `${this.positionY}vh`;
        this.playerDiv.style.width = `${this.width}vw`;
        this.playerDiv.style.height = `${this.height}vh`;


        boardElement.appendChild(this.playerDiv);
    }

    moveLeft(){
        console.log("moving left");
        this.positionX-=2;
        console.log(this.positionX)
        this.playerDiv.style.left = `${this.positionX}vw`;
    };
    
    moveRight(){
        console.log("moving right");
        this.positionX+=2;
        console.log(this.positionX)
        this.playerDiv.style.left = `${this.positionX}vw`;

    }
}


