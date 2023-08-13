//Make bubbles----

const makeBubble =()=>{
    let clutter = ""
    for(let i = 1; i<=168; i++ ){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".pbtm").innerHTML =clutter
}


//Timer interval----

let timer = 60

const timerint =()=>{
    let timerref = setInterval(()=>{
        if(timer>0){
            timer--
            document.querySelector('#timerVal').textContent =timer
        }else{
            clearInterval(timerref);
            document.querySelector('.pbtm').innerHTML=`<div class="gameOver">
            <h1 class = "over">Game Over</h1>
            <h1 class = "score" >Your Score: ${score}</h1>
            <h1><button id="refreshButton">Play Again</button></h1 </div>`;

            document.getElementById('refreshButton').addEventListener('click', function() {
                // Reload the current page
                location.reload();
            });

            updateHighestScore()
            
        }

    },1000)
}

//Make New HIt----

let hitrn = 0

const newHit = ()=> {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#newHit").textContent = hitrn
}


//Score Increment----

let score = 0

const scoreinc =()=>{
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}


//Logic with event bubbling----

document.querySelector('.pbtm').addEventListener('click',(e)=>{
    let clikedVal = Number(e.target.textContent)
    if(clikedVal === hitrn){
        scoreinc();
        makeBubble ();
        newHit();
    }
})



//Update Highest code in local storage
let highestScore = 0
const updateHighestScore = ()=>{
    if (score > parseInt(localStorage.getItem("highestScore") || 0)){
        localStorage.setItem('highestScore',score);
        document.querySelector('#highScore').textContent = score;

    }
};

//Display highest score on page load

document.addEventListener('DOMContentLoaded', ()=>{
    highestScore = localStorage.getItem('highestScore') ||0;
    document.querySelector('#highScore').textContent = highestScore;
});



timerint();
makeBubble ();
newHit()