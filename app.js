let boxes = document.querySelectorAll(".box");
let Resetbutton = document.querySelector("#Reset-button");
let newGamebtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO =true;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO) {
            box.innerText = "O";
            turnO= false;
        }else {
            box.innerText="X";
            turnO= true;
        }
        box.disabled = true;

        checkWinner();
    });

});


const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled= true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}

const showWinner =(winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for ( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2val != "" && pos3Val != ""){
            if(pos1Val === pos2val && pos2val === pos3Val){
                showWinner(pos1Val);
            }
        }

    }
};

newGamebtn.addEventListener("click",resetGame);
Resetbutton.addEventListener("click",resetGame);

