let color = 'black';
let click = false;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    
    board.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    board.style.gridTermplateRows = "repeat(" + size + ", 1fr)";

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "black";
        board.insertAdjacentElement("beforeend", square);
    }
} 

function changeSize(input) {

    if (input >= 2 || input <= 100){
        populateBoard(input);
    }else{
        console.log("issue with squares");
    }
    
}

function colorSquare(){
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
        } else {
            this.style.backgroundColor = color;
        }

    }
    
    
}

function changeColor(picked){
    color = picked
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor="black");
}

document.querySelector("body").addEventListener("click", (e)=> {
    if(e.target.tagName != 'BUTTON'){
        click=!click;
        if (click) {
            document.querySelector(".mode").textContent = "Pen: ON!";
        }else{
            document.querySelector(".mode").textContent = "Pen: Off :(";
        }
    }
    
})


populateBoard(69);

