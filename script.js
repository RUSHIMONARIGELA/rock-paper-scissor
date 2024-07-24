const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissor = document.getElementById('scissor-btn');

const macimg = document.getElementById('mac');
const yourimg = document.getElementById('your')

let numofrounds = 0;
let imginfo = "";

let gamesound="";
let winnerthing=""

let macScore = 0;
let yourScore = 0;

let userInput = "";
let machineInput = "";

function playsound(musicName){
    const audio = new Audio(musicName);
    audio.loop = false;
    audio.play();

}

function machineMakesChoice(){
    let tempvar = Math.floor(Math.random() *3);
    switch(tempvar){
        case 0:
            machineInput = "rock";
            macimg.setAttribute("src", "./images/anorock.png");
            break;
        case 1:
            machineInput = "paper";
            macimg.setAttribute("src", "./images/anopaper.png");
            break;
        case 2:
            machineInput = "scissor";
            macimg.setAttribute("src", "./images/anoscissor.png");
            break;
    }
}

rock.addEventListener('click',()=>{
    numofrounds+=1;
    userInput = "rock";
    yourimg.setAttribute("src","./images/anorock.png");
    machineMakesChoice();
    playGame(machineInput,userInput);
})

paper.addEventListener('click',()=>{
    numofrounds+=1;
    userInput = "paper";
    yourimg.setAttribute("src", "./images/anopaper.png");
    machineMakesChoice();
    playGame(machineInput,userInput);
})

scissor.addEventListener('click',()=>{
    numofrounds+=1;
    userInput = "scissor";
    yourimg.setAttribute("src", "./images/anoscissor.png");
    machineMakesChoice();
    playGame(machineInput,userInput);
})

function playGame(machineInput,userInput){
    if(numofrounds >= 5){
        btnmiss();
    }
    if((machineInput === "rock" && userInput === "scissor") || (machineInput === "scissor" && userInput === "paper") || machineInput === "paper" && userInput === "rock"){
        macScore+=2;
    }
    else if((userInput === "rock" && machineInput === "scissor") || (userInput === "scissor" && machineInput === "paper") || userInput === "paper" && machineInput === "rock"){
        yourScore+=2;
    }
    else{
        macScore+=1;
        yourScore+=1;
    }
}


function winner(yourScore,macScore){
    if(macScore > yourScore){
        gamesound = "./audio/lost.mp3";
        playsound(gamesound);
        winnerthing = "You Lost!😶";
        imginfo = "./images/wasted.png";
    }
    else if(yourScore > macScore){
        gamesound = "./audio/victory.mp3";
        playsound(gamesound);
        winnerthing = "you won!💪";
        imginfo = "./images/respect.png";

    }
    else{

        winnerthing ="It's a Draw!";
        imginfo = "./images/Draw.png"
    }

}

function btnmiss(){
        rock.remove();
        paper.remove();
        scissor.remove();
        const divch = document.querySelector(".choice");
        const winnerBtn = document.createElement("BUTTON");
        winnerBtn.id = "winnerBtn"
        winnerBtn.innerHTML = "Declare Winner";
        // winnerBtn.setAttribute("id","declarebutton");        
        divch.appendChild(winnerBtn);
        
        
        winnerBtn.addEventListener("click",() => {    
                winner(yourScore,macScore);
            
                const rmimg1 = document.querySelector(".yourscore");
                const rmimg2 = document.querySelector(".Machinescore");
                const rmvs = document.querySelector("#vvs");
                rmimg1.remove();
                rmimg2.remove();
                rmvs.remove();
    
                const maindiv = document.querySelector(".areasofshow");
                maindiv.id = "perfectly";
                const resultimg = document.createElement("img");
                const hth = document.createElement("h1");
                hth.innerHTML= winnerthing;
                maindiv.appendChild(hth);
                resultimg.src = imginfo;
                resultimg.id = "finalimg";
                maindiv.appendChild(resultimg);




                setTimeout(()=>{
                    winnerBtn.remove();
                    const reloadbtn = document.createElement("button");
                    reloadbtn.innerHTML = "Play Again";
                    reloadbtn.id  = "refbtn"
                    reloadbtn.setAttribute("onclick", "window.location.reload();");
                    
                    maindiv.appendChild(reloadbtn);
                },5000)
                
    
        })


    }



