//start the game 

;;debugger
const btn = document.querySelector('#btn')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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
    return alert(onePlay());
}