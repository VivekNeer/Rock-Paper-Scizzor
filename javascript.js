function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  const roundResult = getResult(playerSelection, computerSelection);

  updateResultOnScreen(roundResult, computerSelection);
}


function getResult(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
          return 'You lose! Paper beats rock.';
      } else if (computerSelection === 'scissors') {
          return 'You win! Rock beats scissors.';
      } else {
          return 'It\'s a tie! Both chose rock.';
      }
  } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
          return 'You win! Paper beats rock.';
      } else if (computerSelection === 'scissors') {
          return 'You lose! Scissors beats paper.';
      } else {
          return 'It\'s a tie! Both chose paper.';
      }
  } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
          return 'You lose! Rock beats scissors.';
      } else if (computerSelection === 'paper') {
          return 'You win! Scissors beats paper.';
      } else {
          return 'It\'s a tie! Both chose scissors.';
      }
  } else {
      return 'Invalid selection. Please choose rock, paper, or scissors.';
  }
}

function updateResultOnScreen(result, computerSelection) {
  const resultTextElement = document.getElementById('result-text');
  resultTextElement.textContent = result;

  const computerChoseElement = document.createElement('div');
  computerChoseElement.textContent = `Computer chose ${computerSelection}.`;
  resultTextElement.appendChild(computerChoseElement);

  const playerScoreElement = document.getElementById('player-score');
  const computerScoreElement = document.getElementById('computer-score');

  if (result.includes('win')) {
    playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
  } else if (result.includes('lose')) {
    computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
  }

  // Check if either player or computer has reached 5 points
  const playerScore = parseInt(playerScoreElement.textContent);
  const computerScore = parseInt(computerScoreElement.textContent);

  // Check for the winner after updating the scores
  if (playerScore === 5 || computerScore === 5) {
    // Delay the alert slightly to ensure scores are updated
    setTimeout(function () {
      // Display popup
      const winner = playerScore === 5 ? 'Player' : 'Computer';
      alert(`${winner} won!`);
      
      // Reset scores
      playerScoreElement.textContent = '0';
      computerScoreElement.textContent = '0';
    }, 100);
  }
}








// function getComputerChoice() {
//   const choices = ['rock', 'paper', 'scissors'];
//   let randomIndex = Math.floor(Math.random() * 3);
//   return choices[randomIndex];
// }

// function getPlayerChoice() {
//   return prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
// }
  

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === 'rock') {
//       if (computerSelection === 'paper') {
//           return 'You lose! Paper beats rock.';
          
//       } else if (computerSelection === 'scissors') {
//           return 'You win! Rock beats scissors.';
          
//       } else {
//           return 'It\'s a tie! Both chose rock.';
          
//       }
//   } else if (playerSelection === 'paper') {
//       if (computerSelection === 'rock') {
//           return 'You win! Paper beats rock.';
          
//       } else if (computerSelection === 'scissors') {
//           return 'You lose! Scissors beats paper.';
          
//       } else {
//           return 'It\'s a tie! Both chose paper.';
          
//       }
//   } else if (playerSelection === 'scissors') {
//       if (computerSelection === 'rock') {
//           return 'You lose! Rock beats scissors.';
          
//       } else if (computerSelection === 'paper') {
//           return 'You win! Scissors beats paper.';
          
//       } else {
//           return 'It\'s a tie! Both chose scissors.';
          
//       }
//   } else {
//       return 'Invalid selection. Please choose rock, paper, or scissors.';
//   }
// }


// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let round = 1; round <= 5; round++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(`Round ${round}:`);

//     const roundResult = playRound(playerSelection, computerSelection);
//     console.log(roundResult);

//     if (roundResult.includes('win')) {
//       playerScore++;
//     } else if (roundResult.includes('lose')) {
//       computerScore++;
//     }

//     console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
//   }
// }

// playGame();
