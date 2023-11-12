console.log("Enter a choice between Rock,Paper,Scissors");

else if(playerSelection==='paper' && (computerSelection==='scissors'|| computerSelection==='rock')){}

function playRound(playerSelection,computerSelection){
}

playRound();

if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log('You lose! Paper beats rock.');
    } else if (computerSelection === 'scissors') {
      console.log('You win! Rock beats scissors.');
    } else {
      console.log('It\'s a tie! Both chose rock.');
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log('You win! Paper beats rock.');
    } else if (computerSelection === 'scissors') {
      console.log('You lose! Scissors beats paper.');
    } else {
      console.log('It\'s a tie! Both chose paper.');
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log('You lose! Rock beats scissors.');
    } else if (computerSelection === 'paper') {
      console.log('You win! Scissors beats paper.');
    } else {
      console.log('It\'s a tie! Both chose scissors.');
    }
  } else {
    console.log('Invalid selection. Please choose rock, paper, or scissors.');
  }
  

