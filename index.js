let balance = 10000;

const game = () => {
  let userValue = parseInt(prompt("hedeer togloh ve?"));
  let comNumber = Math.floor(Math.random() * 6 + 1);
  console.log(comNumber);
  let user = Math.floor(Math.random() * 6 + 1);
  console.log(user);
  if (user === comNumber) {
    console.log("draw");
    console.log(balance);
  } else if (user > comNumber) {
    balance = balance + userValue;
    console.log(balance);
    console.log("You win");
  } else if (user < comNumber) {
    balance = balance - userValue;
    console.log(balance);
    console.log("You lose");
  }
  const playAgain = parseInt(prompt(" write 1 for try again"));

  if (playAgain === 1) {
    game();
  } else {
    return;
  }
};

game();
