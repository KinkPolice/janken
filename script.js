
//start the game 
let PlayerSelection = 'rock';
    //computer chooses between rock, paper, scissors
function getComputerChoice() {
    const getChoice = Math.floor(Math.random() * possibleChoices.length)
        if (getChoice =0){
            getChoice === 'rock';
        }else if(getChoice <=1){
            getChoice === 'paper';
        }else{
            getChoice === 'scissors'
        }
        return getComputerChoice;
        }
   


        function getWin(playerSelection, computerSelection){
            if (playerSelection === getComputerChoice){
               return('tie')
            }
            //player chose rock
            else if (playerSelection === 'rock') {
                if (computerSelection === 'paper') {
                    return('you lost')
                }
                else if (computerSelection ==='scissors'){
                    return('you won')
                }

            //player chose paper
            }
            else if (playerSelection=== 'paper'){
                if (computerSelection ==='scissors'){
                    return('you lost')
                }
                else if (computerSelection==='rock'){
                    return('you won')
                }
            }
            //player chose scissos
            else if (playerSelection==='scissors'){
                if (computerSelection=== 'paper'){
                    return('you won')
                }
                else if (computerSelection=== 'rock'){
                    return('you lost')
                }
        }
        return(getWin);
       
        }
 



