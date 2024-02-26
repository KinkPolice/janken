
//start the game 
let PlayerSelection = (prompt('rock, paper, scissors?'));
let possibleChoices = ['rock', 'paper', 'scissors'];

debugger;;

    //computer chooses between rock, paper, scissors
function getComputerChoice() {
    let getChoice = Math.floor(Math.random() * possibleChoices.length)
        if (getChoice === 0){
            getChoice = 'rock';
        }else if(getChoice <=1){
            getChoice = 'paper';
        }else{
            getChoice = 'scissors'
        }
        return(getChoice);
 }
   

        function getWin(playerSelection, getComputerChoice){
            if (playerSelection === getComputerChoice){
               return('tie')
            }
            //player chose rock
            if (playerSelection === 'rock') {
            
                if (getComputerChoice === 'paper') {
                    return('you lost')
                }
                else{
                    return('you won')
                }

            //player chose paper
            }
            if (playerSelection === 'paper'){
                if (getComputerChoice === 'scissors'){
                    return('you lost')
                }
                else{
                    return('you won')
                }
            }
            //player chose scissos
            if (playerSelection === 'scissors'){
                if (getComputerChoice === 'paper'){
                    return('you won')
                }
                else{
                    return('you lost')
                }
        }
        return(getWin);
       
        }

        console.log(getWin(PlayerSelection, getComputerChoice()));