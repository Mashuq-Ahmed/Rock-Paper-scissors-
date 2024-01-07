function getComputerChoice() {
  var q= Math.random();
  if (q<=0.33)
    return "rock";
  else if (q<=0.67 && q>0.33) 
    { return "paper";
    
    }
  else if  (q<1 && q>0.67)
    {
      return "scissors";
    } 
}
var a=0;
var b=0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection=="paper"||"Paper"||"PAPER"){
      if (computerSelection=="scissors"){
        b=b+1;  
        return "You lose! scissors beats paper";
         
        
      }
      else if (computerSelection=="rock") {
        a+=1;  
        return "You win! paper beats rock";
       
      }
      
      else if (computerSelection=="paper") 
        {return "It's a tie!";}
      
    }
    else if (playerSelection=="rock"||"Rock"||"ROCK"){
      if (computerSelection=="scissors"){
        a+=1;  
        return "You win! rock beats scissors";
         
        
      }
      else if (computerSelection=="rock"){
        return "Its a tie";
      }
      else if (computerSelection=="paper"){
        b+=1;
        return "You lose! paper beats rock";
        
      }
    }
    else if (playerSelection=="scissors"||"Scissors"||"SCISSORS"){
      if (computerSelection=="scissors"){
          return "Its a tie!";
        
      }
      else if (computerSelection=="rock"){
        b+=1;
        return "You lose! rock beats scissors";
        
      }
      else if (computerSelection=="paper"){
        a+=1;
        return "You win! scissors beats paper";
        
      }
    }
   

  }

function game() {
    var c=1;
    while (c<=5) {
      const playerSelection = prompt("Enter your throw : rock/scissors/paper");
      const computerSelection = getComputerChoice();
      c+=1;
      console.log(playRound(playerSelection, computerSelection));
      
    }
    if (a>b){
      console.log("You win!");
    }
    else if (a==b) {
      console.log("Its a tie!");
    }
    else if(a<b){
      console.log("You lose!");
    }
}
   
  

game();
