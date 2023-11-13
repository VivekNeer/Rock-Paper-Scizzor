function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getPlayerChoice() {
  return prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
}
  

function playRound(playerSelection, computerSelection) {
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


function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${round}:`);

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lose')) {
      computerScore++;
    }

    console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
  }
}

playGame();
