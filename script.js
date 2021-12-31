let yourName = prompt('Veuillez saisir votre nom')
let playerName = document.getElementById('playerName')
playerName.textContent = yourName


/*Déclaration de la fonction pour permettre à l'ordinateur d'emettre aléatoirement "rock, paper ou scissors" en utilisant la méthode Math.random()*/

function computerPlay(){
    let randomResponse = Math.random();
    randomResponse = randomResponse * 10; /*on multiplie par 10 pour avoir un entier*/
    if(randomResponse <= 3){
        return "paper"
    }
    else if(randomResponse > 3 && randomResponse <= 6){
        return "rock"
    }
    else{
        return "scissors"
    }
}

let finalPlayerScore = 0
let finalComputerScore = 0

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        let playerSelection = button.id
    
        const computerSelection = computerPlay()
        if(computerSelection === 'paper'){
            let img = document.getElementById("computerPaperImage")
            img.style.visibility = 'visible'
            let img2 = document.getElementById('computerRockImage')
            img2.style.visibility = 'hidden'
            let img3 = document.getElementById('computerScissorsImage')
            img3.style.visibility ='hidden'
        }
        if(computerSelection === 'rock'){
            let img = document.getElementById('computerRockImage')
            img.style.visibility = 'visible'
            let img2 = document.getElementById('computerPaperImage')
            img2.style.visibility = 'hidden'
            let img3 = document.getElementById('computerScissorsImage')
            img3.style.visibility ='hidden'
        }
        if(computerSelection === 'scissors'){
            let img = document.getElementById('computerScissorsImage')
            img.style.visibility = 'visible'
            let img2 = document.getElementById('computerRockImage')
            img2.style.visibility = 'hidden'
            let img3 = document.getElementById('computerPaperImage')
            img3.style.visibility ='hidden'
        }
        let tab = playRound(playerSelection, computerSelection)

        if(tab[1]>tab[0]){
            finalPlayerScore = finalPlayerScore + 1
        } else if(tab[1]<tab[0]){
            finalComputerScore = finalComputerScore +1
        }
        
        const container = document.getElementById("container")

        

        if(finalPlayerScore === 5){
            playerWin()
        } else if(finalComputerScore === 5){
            computerWin()
        }
    let scorePlayer = document.getElementById('scorePlayer')
        scorePlayer.textContent = finalPlayerScore;
        
       let scoreComputer = document.getElementById('scoreComputer')
       scoreComputer.textContent = finalComputerScore
    })
})
function playerWin(){
    /*let winner = document.createElement('p');
    winner.textContent = " FELICITATIONS, VOUS AVEZ GAGNE !"
    winner.style.fontWeight = 'bold'
    winner.setAttribute('id', 'winner')
    container.appendChild(winner)*/
    alert("Bravo " + yourName + ", tu as gagné !!")
    finalComputerScore = 0
    finalPlayerScore = 0
}
function computerWin(){
    /*let winner = document.createElement('p')
    winner.textContent = "Désolé, vous avez perdu, l'ordinateur a gagné... Retenter votre chance !"
    winner.style.fontWeight = 'bold'
    winner.setAttribute('id', 'winner')
    container.appendChild(winner)*/
    alert("Tu as perdu, tente ta chance à nouveau")
    finalPlayerScore = 0
    finalComputerScore = 0
}


function playRound(playerSelection, computerSelection){
    let computerScore = 0; /*On déclare des variables pour calculer le score d'une manche*/
    let playerScore = 0; 
    playerSelection = playerSelection.toLowerCase();  /*On rends l'entrée de l'utilisateur insensible à la casse */

    if(playerSelection === "paper"){
        
        
        if(computerSelection === "paper"){
            let tab = [computerScore, playerScore,"Paper vs paper, play again" ]
            //document.querySelector('div').textContent = tab[2]  /*On retourne un array comprenant le score de chaque manche, on pourra ainsi réutiliser les valeurs plus tards*/
            return tab
        }
        else if(computerSelection === "rock"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, paper beats rock" ]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
        else{
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, scissors beat paper" ]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
    }
    if(playerSelection === "rock"){
        
        if(computerSelection === "rock"){
            let tab = [computerScore, playerScore,"Rock vs rock, play again" ]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
        else if(computerSelection === "scissors"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, rock beats scissors"]
            //document.querySelector('div').textContent = tab[2]
            return tab
            
        }
        else {
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, paper beats rock"]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
    }
    if(playerSelection === "scissors"){
        
        
        if(computerSelection === "scissors"){
            let tab = [computerScore, playerScore,"Scissors vs scissors, play again"]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
        else if(computerSelection === "paper"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, scissors beat paper" ]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
        else{
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, rock beats scissors" ]
            //document.querySelector('div').textContent = tab[2]
            return tab
        }
    }
        
}


