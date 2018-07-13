/*jshint esversion:6*/

/**
* GAME FUNCTION:
*  -Player must guess a number between a min and a max
*  -Player gets a certain amount of guesses
*  -Notify player of guesses remaining
*  -Notify the player of the correct answer if they lose
*  -Let player choose to play again
*/

//Game values
let min=1, max=10, winningNum=getRandomNum(min, max), guessesLeft=3;

//UI Elements
const game=document.querySelector('#game'),         minNum=document.querySelector('.min-num'),maxNum=document.querySelector('.max-num'),guessBtn=document.querySelector('#guess-btn'),guessInput=document.querySelector('#guess-input'),message=document.querySelector('.message');

//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

//Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className==='play-again'){
    window.location.reload();
  }
});
//Listen for guess
guessBtn.addEventListener('click', function(){
  let guess=parseInt(guessInput.value);
  
  //Validate
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  //Check if won
  if(guess==winningNum){
    //Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  }else{
    //Wrong number
    guessesLeft -= 1;
    
    if(guessesLeft===0){
      //Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    }else{
      //Game continues - answer wrong
      
      //Change border color
      guessInput.style.borderColor='red';
      
      //Clear input
      guessInput.value='';
      
      //Tell user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

/**
 * The game is over
 * @param {'*'} won boolean value of whether the user won or lost the game 
 * @param {*} msg message for the user 
 */
function gameOver(won, msg){
  let color;
  won===true ? color ='green' : color = 'red';
  //Disable input
  guessInput.disabled=true;
  
  //Change border color
  guessInput.style.borderColor=color;
  
  //Set message
  setMessage(msg, color);

  //Play again?
  guessBtn.value='Play Again';
  guessBtn.className += 'play-again';
}

/**
 * Assigns a random number for the winning number
 * @param min minimum number that the number can be assigned to
 * @param max maximum number that the number can be assigned to
 */
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Sets a message for the user
 * @param {*} msg message
 * @param {*} color message text color
 */
function setMessage(msg, color){
  message.style.color=color;
  message.textContent=msg;
}