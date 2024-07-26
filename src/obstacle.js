class Obstacle {
    constructor(){
        // create basic position and size properties
        this.positionX = 40;
        this.positionY = 90;
        this.width = 3;
        this.height = 10;

        this.createDomElement();
    }

    createDomElement(){
        // create dom element for obstacle
        this.domElement = document.createElement("div");
        
        this.domElement.className = "obstacle";
        this.domElement.style.left = `${this.positionX}vw`;
        this.domElement.style.bottom = `${this.positionY}vh`;
        this.domElement.style.width = `${this.width}vw`;
        this.domElement.style.height = `${this.height}vh`;
        
        
        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.domElement);
    }

    moveDown(){
        this.positionY--;
        console.log(this.positionY)
        this.domElement.style.bottom = `${this.positionY}vh`;
    }
}