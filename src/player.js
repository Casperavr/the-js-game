class Player {
    constructor(){
        // create basic position and size properties
        this.positionX = 20;
        this.positionY = 20;
        this.width = 20;
        this.height = 10;

        this.createDomElement();
    }


    createDomElement(){
        // create dom element for player
        this.domElement = document.createElement("div");
        const boardElement = document.getElementById("board");


        this.domElement.id = "player";
        this.domElement.style.left = `${this.positionX}vw`;
        this.domElement.style.bottom = `${this.positionY}vh`;
        this.domElement.style.width = `${this.width}vw`;
        this.domElement.style.height = `${this.height}vh`;


        boardElement.appendChild(this.domElement);
    }

    moveLeft(){
        console.log("moving left");
        this.positionX-=2;
        console.log(this.positionX)
        this.domElement.style.left = `${this.positionX}vw`;
    };
    
    moveRight(){
        console.log("moving right");
        this.positionX+=2;
        console.log(this.positionX)
        this.domElement.style.left = `${this.positionX}vw`;

    }
}


