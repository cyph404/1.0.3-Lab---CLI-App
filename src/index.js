const prompt = require('prompt-sync')({ sigint: true });

const createSpace = () => {
  console.log(' ')
}

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

const getRandomIntInRange = (min, max) => Math.floor((Math.random() * (max - min)) + min) + 1;

const checkAnswer = (guess, answer) => {
  if (isNaN(guess) || guess > 10 || guess < 1) return 'You have to guess a number between 1 and 10!'
  if (guess === answer) return 'Congratulations, you won'
  console.log(isNaN(guess))
  return `The computer chose ${answer}, better luck next time!`
};

const handleGuessingGame = () => {
  const guess = Number(prompt('Guess a number from 1-10! ').trim());
  const answer = getRandomIntInRange(0, 11);
  const result = checkAnswer(guess, answer);
  console.log(result);
  pseudoLooper()
};

const handleWordsOfWisdom = () => {
  const wordsOfWisdom = [
    'You should go to bed by 12:30',
    "It's better to mostly understand a little more every day, than to never move forward until you understand everything",
    'Eating breakfast has statistical benefits to brain power',
    "The best laid plans often fail, but plans that don't exist can never succeed",
    'Time management and communication are the two most important skills in the workplace',
    'Try to listen more than you speak',
  ];
  console.log(wordsOfWisdom[getRandomIntInRange(0, wordsOfWisdom.length)]);
 pseudoLooper()
};

const handleCheerYouOn = () => {
  const cheers = [
    'You can do it!',
    'You are the best!',
    'You are a coding machine!',
    'YOU ARE UNREALLLLLLLLL!',
    'LITERALLY UNSTOPPABLE!',
    "Can't even handle your greatness right now!",
  ];
  console.log(cheers[getRandomIntInRange(0, cheers.length)])
  pseudoLooper()
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

const pseudoLooper = () => {
  const continuity = prompt('Press any key to continue.', {echo: ''})
  createSpace()
  showOptions()
  createSpace()
  handleSubmit()
  createSpace()
}

const main = () => {
  const name = welcomeAndGetName();
  createSpace()
  const options = showOptions();
  createSpace()
  const submission = handleSubmit();
  const goodbye = sayGoodbye(name);
};

main();
