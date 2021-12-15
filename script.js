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

/*Déclaration de la fonction pour jouer un round*/

function playRound(playerSelection, computerSelection){
    let computerScore = 0; /*On déclare des variables pour calculer le score d'une manche*/
    let playerScore = 0; 
    playerSelection = playerSelection.toLowerCase();  /*On rends l'entrée de l'utilisateur insensible à la casse */

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            let tab = [computerScore, playerScore,"Paper vs paper, play again" ]
            return tab  /*On retourne un array comprenant le score de chaque manche, on pourra ainsi réutiliser les valeurs plus tards*/
        }
        else if(computerSelection === "rock"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, paper beats rock" ]
            return tab
        }
        else{
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, scissors beat paper" ]
            return tab
        }
    }
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            let tab = [computerScore, playerScore,"Rock vs rock, play again" ]
            return tab
        }
        else if(computerSelection === "scissors"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, rock beats scissors"]
            return tab
            return 
        }
        else {
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, paper beats rock"]
            return tab
        }
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            let tab = [computerScore, playerScore,"Scissors vs scissors, play again"]
            return tab
        }
        else if(computerSelection === "paper"){
            playerScore = playerScore + 1;
            let tab = [computerScore, playerScore,"You win, scissors beat paper" ]
            return tab
        }
        else{
            computerScore = computerScore + 1;
            let tab = [computerScore, playerScore,"You lose, rock beats scissors" ]
            return tab
        }
    }    
}

/*Déclaration d'une fonction game() où 5 manches seront jouées*/

function game(){
    let finalPlayerScore = 0; /*On déclare 2 variables pour les scores finaux*/
    let finalComputerScore = 0;
  for(i = 0; i < 5; i++){    /*Boucle pour effectuer 5 manches*/
    let playerSelection = prompt("Rock, paper or scissors?") /*On utilise prompt() pour demander à l'utilisateur d'entrée une valeur*/
    const computerSelection = computerPlay() /*On appelle l'ordinateur à jouer*/

    let tab = playRound(playerSelection, computerSelection) /*On appelle un round et on stocke les valeurs du tableau dans la variable*/
    
    console.log(tab[2]) /*On utilise le tableau pour afficer ses valeurs*/

    if(tab[1] > tab[0]){
        finalPlayerScore = finalPlayerScore + 1;  //On incrémente le score final selon le résultat d'une manche
    } else if(tab[1] < tab[0]){
            finalComputerScore = finalComputerScore + 1;
    }
    
   }

   if(finalPlayerScore > finalComputerScore){ //On affiche le score final.
        console.log("Vous avez gagné la partie avec " + finalPlayerScore + " points " + "et " + finalComputerScore + " points pour l'ordinateur.")
    }
    if(finalPlayerScore < finalComputerScore){
        console.log("Vous avez perdu la partie avec " + finalPlayerScore + " points contre " + finalComputerScore + " points pour l'ordinateur.")
    }
    if(finalComputerScore == finalPlayerScore){
        console.log("Egalité avec " + finalPlayerScore + " points, contre " + finalComputerScore +" points. Veuillez rejouer")
    }
}


game(); //On appelle la fonction pour jouer 5 manches.