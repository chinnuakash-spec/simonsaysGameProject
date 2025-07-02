let gameseq = [];
let userseq = [];


let btns = ["blue","green","yellow","red"]

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game was started");
        started = true;

        levelUp();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },100);
}

function userFlash(btn){
    btn.classList.add("fla");

    setTimeout(function(){
        btn.classList.remove("fla")
    },100);
}

function levelUp(){
    userseq=[];
    level++;
    h4.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}


function checkAns(Idx){
    if(userseq[Idx]===gameseq[Idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h4.innerHTML = `Game Over! Your Score is <b>${level}<b> <br> Press any Key to Start Game.`

        document.querySelector('body').style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor ="white"
        },75)
        resetTo();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id")
    //console.log(userColor);
    userseq.push(userColor);
    //userseq.push(id)
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resetTo(){
    started = false;
    gameseq =[];
    userseq=[];
    level = 0;
}