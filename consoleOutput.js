export const consoleOutput = () => {
  const userName = process.argv
    .find((arg) => arg.includes('--username='))
    ?.replace('--username=', '');
  console.log(`Welcome to the File Manager, ${userName ?? 'guest'}!`);

  process.on('exit', () => {
    console.log(
      `Thank you for using File Manager, ${userName ?? 'guest'}. Goodbye!`
    );
  });
};

consoleOutput();
