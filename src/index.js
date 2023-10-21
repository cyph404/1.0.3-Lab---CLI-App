const prompt = require('prompt-sync')({ sigint: true});

const welcomeAndGetName = () => {
  console.log('Welcome!');
  const name = prompt('What is your name? ');
  console.log(`Hello ${name.trim()}, nice to meet you!`);
  return name.trim();
};

const getUserNumber = () => {
  const chosenNum = Number(prompt('Take your pick: ').trim())
  return chosenNum
};

const showOptions = () => {
  console.log('Here are your options:');
  console.log('1 - play a guessing game');
  console.log('2 - words of wisdom');
  console.log('3 - cheer you on');
  console.log('Any other key - exit');
};

const sayGoodbye = (name) => console.log(`Goodbye, ${name}`);

const getRandomIntInRange = (min, max) => (Math.random() * (max - min)) + min;

const checkAnswer = (guess, answer) => {
  if (guess === answer) return 'Congratulations, you won!'
  return 'Better luck next time!'
};

const handleGuessingGame = () => {
  const guess = Number(prompt('Guess a number from 1-10! ').trim())
  const answer = getRandomIntInRange(0, 11)
  const result = checkAnswer(guess, answer)
  console.log(result)
  return result
}

const handleWordsOfWisdom = () => {
}

const handleCheerYouOn = () => {
}

const handleSubmit = () => {
  const option = getUserNumber();
  switch (option) {
    case 1:
      handleGuessingGame();
      break;
    case 2:
      handleWordsOfWisdom();
      break;
    case 3:
      handleCheerYouOn();
      break;
  }
};

const main = () => {
  const name = welcomeAndGetName();
  const options = showOptions();
  const submission = handleSubmit();
  const goodbye = sayGoodbye(name);
};

main();
