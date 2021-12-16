import Characters from "./Characters";

const randomComputerChoice = () => Characters[Math.floor(Math.random() * Characters.length)];

const Rounds = (playerChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;

  if (playerChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'You Won!' : 'Wow! You suck!';
  };
  if (playerChoice === 'paper') {
    result = computerChoice === 'rock' ? 'You Won!' : 'Wow! You suck!';
  };
  if (playerChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'You Won!' : 'Wow! You suck!';
  };

  if (playerChoice === computerChoice) result = 'Tie...';
  return [result, computerChoice];
};

export default Rounds;