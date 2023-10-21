const prompt = require('prompt-sync')({ sigint: true});

const welcomeAndGetName = () => {
  console.log('Welcome!');
  const name = prompt('What is your name? ');
  console.log(`Hello ${name.trim()}, nice to meet you!`);
  return name.trim();
};

const showOptions = () => {
  console.log('Here are your options:');
  console.log('1 - play a guessing game');
  console.log('2 - words of wisdom');
  console.log('3 - cheer you on');
  console.log('Any other key - exit');
};

const sayGoodbye = (name) => console.log(`Goodbye, ${name}`);

const main = () => {
  const name = welcomeAndGetName();
  const options = showOptions();
  const goodbye = sayGoodbye(name);
};

main();
