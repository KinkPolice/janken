//start the game 

;;debugger
const btn = document.querySelector('#btn');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

btn.appendChild(rock)
btn.appendChild(paper)
btn.appendChild(scissors)


btn.addEventListener('click', playRound);


    function playRound(event){


        function playerS(){


            let PlayerSelection =  '';
            if (event.target.dataset.type == 'rock'){
            return PlayerSelection = 'rock';
        }else if (event.target.dataset.type == 'paper'){
            return PlayerSelection = 'paper';
        }else if (event.target.dataset.type == 'scissors'){
            return PlayerSelection = 'scissors';
    };
            return PlayerSelection;
        }



        let possibleChoices = ['rock', 'paper', 'scissors'];


        function getComputerChoice() {

        let computerChoice= ''
            let getChoice = Math.floor(Math.random() * possibleChoices.length)
                if (getChoice === 0){
                    computerChoice = 'rock';
                }else if(getChoice <=1){
                    computerChoice = 'paper';
                }else{
                    computerChoice = 'scissors'
                }
                return computerChoice;
         }

function onePlay(){

   

        function getWin(PlayerSelection, computerChoice){
            win = ''
            if (PlayerSelection === computerChoice){
                return('tie')
            }
            if (PlayerSelection === 'rock') {
            
                if (computerChoice === 'paper') {
                    return('you lost')
                }
                else{
                    return('you won')
                }

            }
            if (PlayerSelection === 'paper'){
                if (computerChoice === 'scissors'){
                    return('you lost')
                }
                else{
                    return('you won')
                }
            }
            if (PlayerSelection === 'scissors'){
                if (computerChoice === 'paper'){
                    return('you won')
                }
                else{
                    return('you lost')
                }

        }
        }
 return getWin(playerS(), getComputerChoice());
        
}

document.getElementsByName('result')[0].value= onePlay();


function scoreCount(){
let playerScore = 0;
let computerScore = 0;
if(win === 'you won'){
    playerScore= playerScore + 1;
    return document.querySelector('#playerScore').value(playerScore);
}else{
    computerScore = computerScore +1;
    return document.querySelector('#computerScore').value(computerScore);
}
}
document.getElementsByName('score')[0].value = scoreCount();
    }
