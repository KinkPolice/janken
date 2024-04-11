//start the game 
const btn = document.querySelector('btn')
const rock = document.querySelector('rock');
const paper = document.querySelector('paper');
const scissors = document.querySelector('scissors');

btn.append(rock)
btn.append(paper)
btn.append(scissors)

btn.addEventListener('click', playRound);



    function playRound(){
        let PlayerSelection = choice();
        function choice() {
            if (btn = rock){
            return PlayerSelection = 'rock';
        }else if (btn = paper){
            return PlayerSelection = 'paper';
        }else if (btn = scissors){
            return PlayerSelection = 'scissors';
        }
    };

        let possibleChoices = ['rock', 'paper', 'scissors'];


function onePlay(){
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

        
    return(onePlay(PlayerSelection, getComputerChoice())); 
}
}