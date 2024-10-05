import { COMMANDS } from './commands.js';
import { commandsHandler } from './commandsHandler.js';

export const commandsParser = async (command) => {
  const commandArray = command.split(' ');

  if (!isValid(commandArray)) {
    console.log('Invalid input');
  } else {
    await commandsHandler(commandArray);
  }
};

const isValid = (commandArray) => {
  const commandName = commandArray[0];
  if (!COMMANDS[commandName]) {
    return false;
  }
  if (COMMANDS[commandName].numberOfParams + 1 !== commandArray.length) {
    return false;
  }
  if (
    COMMANDS[commandName].validParams &&
    !COMMANDS[commandName].validParams.includes(commandArray[1])
  ) {
    return false;
  }
  return true;
};
