const randomNUmber = parseInt(Math.random() *100 +1);  // random unumber creation here


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// checing playGame is ready
if(playGame){
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateGuess(guess)

  });
}

function validateGuess(guess){
  // checking number range 1-100 or IsNaN
  
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter a number less than 100')
  }else{  // number push in 
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNUmber}`);
      endGame();   // ending game

    }else{
      displayGuess(guess)
      // check guess padd
      checkGuess(guess)  // -- low or high value

    }


  }

}

function checkGuess(guess){
  // check is high or low or equal of random number
  if(guess === randomNUmber){
    displayMessage(`You guessed it correct `)
    endGame();
  }else if (guess < randomNUmber){
    displayMessage(`Number is Too Low`)

  }else if (guess > randomNUmber){
    displayMessage(`Number is Too High`)
    
  }

}
// cleanup guess
function displayGuess(guess){
  // check is high or low or equal of random number
  // userInput value ko update karta hia  -- clean up 
  userInput.value = '';
  guessSLot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11- numGuess}`;


}


function displayMessage(message){
  // update array all works
  lowOrHi.innerHTML = `<h2>${message} </h2>`
}

function endGame(){
  // button press
  userInput.value = '';
  userInput.setAttribute('disabled')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  newGame = false;
  newGame();


}

function newGame(){
  //
  document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(event){
    const randomNUmber = parseInt(Math.random() *100 +1)
    prevGuess = [];
    numGuess = 1;
    guessSLot.innerHTML = '';
    remaining.innerHTML = `${11- numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame = true;

  })
}