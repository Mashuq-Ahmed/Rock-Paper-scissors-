function getComputerChoice() {
  var q= Math.random();
  if (q<=0.33)
    return "rock";
  else if (q<=0.67 && q>0.33) 
    {return "paper";
    
    }
  else if  (q<1 && q>0.67)
    {
      return "scissors";
    } 
}

// Few declarations
var a=0;
var b=0;
var playerSelection ="";
const d= document.querySelector("#d");
const di= document.querySelector("#di");
const py= document.querySelector("#py");
const pc= document.querySelector("#pc");
const cc= document.querySelector("#cc");
const yc= document.querySelector("#yc");

function playRound(playerSelection , computerSelection) {
    
    if (playerSelection==("paper"||"Paper"||"PAPER")){
      if (computerSelection=="scissors"){
        b=b+1;  
        d.textContent= "You lose! scissors beats paper";
         
        
      }
      else if (computerSelection=="rock") {
        a+=1;  
        d.textContent= "You win! paper beats rock";
       
      }
      
      else if (computerSelection=="paper") 
        {d.textContent= "It's a tie!";}
      
    }
    else if (playerSelection==("rock"||"Rock"||"ROCK")){
      if(computerSelection=="scissors"){
        a+=1;  
        d.textContent= "You win! rock beats scissors";
         
        
      }
      else if (computerSelection=="rock"){
        d.textContent= "Its a tie";
      }
      else if (computerSelection=="paper"){
        b+=1;
        d.textContent= "You lose! paper beats rock";
        
      }
    }
    else if (playerSelection==("scissors"||"Scissors"||"SCISSORS")){
      if (computerSelection=="scissors"){
          d.textContent= "Its a tie!";
        
      }
      else if (computerSelection=="rock"){
        b+=1;
        d.textContent= "You lose! rock beats scissors";
        
      }
      else if (computerSelection=="paper"){
        a+=1;
        d.textContent= "You win! scissors beats paper";
        
      }
    }
   

  }

function game(){
    
    if (a>b){
      

    }
    else if (a==b) {
      alert("")
    }
    else if(a<b){
      alert("You lose");
    }
}
   
  




// Event handlers


const r = document.querySelector("#r");
const p = document.querySelector("#p");
const s = document.querySelector("#s");


r.addEventListener("click",()=>{
if (a<5 && b<5) { 
  playerSelection="rock";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  yc.textContent="Your choice is "+playerSelection;
  cc.textContent="Computer choice is "+computerSelection;
  py.textContent="Your score: " +String(a);
  pc.textContent="pc score: " +String(b);
  }
else if(a==5){
    alert("You win!");
  }
else if (b==5 && a==5) {
    alert("It's a tie!");
  }
else if(b==5){
    alert("You lose!");
  }
  });
p.addEventListener("click", ()=>{
if (a<5 && b<5) { 
  playerSelection="paper";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  yc.textContent="Your choice is "+playerSelection;
  cc.textContent="Computer choice is "+computerSelection;
  py.textContent="Your score: " +String(a);
  pc.textContent="pc score: " +String(b);
}
else if(a==5){
  alert("You win!");
}
else if (b==5 && a==5) {
  alert("It's a tie!");
}
else if(b==5){
  alert("You lose!");
}});

s.addEventListener("click",()=>{ 
if (a<5 && b<5) { 
  playerSelection="scissors";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  yc.textContent="Your choice is "+playerSelection;
  cc.textContent="Computer choice is "+computerSelection;
  py.textContent="Your score: " +String(a);
  pc.textContent="pc score: " +String(b);
}
else if(a==5){
  alert("You win!");
}
else if (b==5 && a==5) {
  alert("It's a tie!");
}
else if(b==5){
  alert("You lose!");
}});


