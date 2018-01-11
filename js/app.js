'use strict';

var userName;

// function inputUserName() {
//   userName = prompt('Hi, what is your name?');
//   console.log('The name of the user is: ' + userName);
//   alert('Great! Nice to meet you ' + userName + '.  I\'m Zachary.  Let\'s go on a fun adventure of getting to know just who I am....and stuff and junk =D!');
// }

// function guessHowManyStates() {
//   var howManyStates = parseInt(prompt('How many states do you think I\'ve visited since I was born?'));
//   console.log('How many states the user thinks I\'ve visited...tee hee!: ' + howManyStates);

//   if(howManyStates === 23) {
//     alert('What a guess!  You should seriously consider buying a lotto ticket with that kinda luck!');
//   } else {
//     alert('Not quite, but great try!');
//   }
// }

// function guessCanIRunFast() {
//   var canIRunFast = prompt('Can I run faster than a cheetah?  (Please respond with either a YES or NO)').toUpperCase();
//   console.log('Did the user think I could run fast?: ' + canIRunFast);

//   if(canIRunFast === 'YES') {
//     alert('so....I was kind of lying, just a little.  There is no WAY I can run faster than a cheetah! However, you honor me with your answer and I will continue to train until I reach the speed of a cheetah!!');
//   } else if (canIRunFast === 'NO') {
//     alert('You are correct...I can only run AS FAST as a cheetah, not faster.');
//   } else {
//     alert('Please enter YES or NO.');
//   }
// }

// function guessLikesToDance() {
//   var likesToDance = prompt('Take a guess, do I like to dance? (Y/N)').toUpperCase();
//   console.log('Does the user think I like to dance?: ' + likesToDance);
  
//   if (likesToDance === 'Y') {
//     alert('Tricked you! It actually doesn\'t matter either way so let\'s dance right now!!');
//   } else if (likesToDance === 'N') {
//     alert('Tricked you! It actually doesn\'t matter either way so let\'s dance right now!!');
//   } else {
//     alert('Please enter Y or N.');
//   }
// }

function guessLikesKaraoke() {
  var likesKaraoke = prompt('How about Karaoke?  Do I like Karaoke? (Y/N)').toUpperCase();
  console.log('Does the user think I like Karaoke?: ' + likesKaraoke);
  
  if (likesKaraoke === 'Y') {
  
    var warmUp = prompt('You got that right! Can we warm up together then? (Y/N)').toUpperCase();
    console.log('Did we warm up?: ' + warmUp);
  
    if (warmUp === 'Y') {
      alert('Do-Re-Mi-Fa-So-La-Ti!');
    } else if (warmUp === 'N') {
      alert('Some singer you are!');
    } else {
      alert('Please input either Y or N');
    }
  
  } else if (likesKaraoke === 'N') {
    alert('Actually, I LOVE karaoke!');
  } else {
    alert('Please enter Y or N for your response.');
  }
}

// var catPerson = prompt('Am I a cat person? (Y or N)').toUpperCase();
// console.log('Does the user think I am a cat person?: ' + catPerson);

// if(catPerson === 'Y') {
//   alert('You got that right!  They\'re so purrrdy!');
// } else if(catPerson === 'N') {
//   alert('What\'s the meowtter with you?! Of course I love them kit-tays!');
// } else {
//   alert('The directions said to answer Y or N...get with the program brah!');
// }

// var dogPerson = prompt('Am I a dog person?(Y or N)').toUpperCase();
// console.log('Does the user think I am a dog person?: ' + dogPerson);

// if (dogPerson === 'Y') {
//   alert('Hey, a person can be both OKAY!');
// } else if(dogPerson === 'N') {
//   alert('Doggos barking by day keeps a smile on my fay!...(translation - I love them boofin woofers!)');
// } else {
//   alert('Are you trolling me???  By now I figure you would have realized either input Y or N!...... :)');
// }

// var numberInMyHead = 77;

// for (var c = 3; c > 0; c--) {
//   var numberGuessed = parseInt(prompt('What number am I thinking of? (Yes..I\'m being serious.  Take a guess but don\'t forget to input an actual number, no letters! =)'));

//   // numberGuessed = parseInt(numberGuessed);

//   if (numberGuessed < numberInMyHead) {

//     if (c === 0) {
//       alert('Aw, nice try. You are out of guesses.  Thanks for playing!');
//       console.log(c);
//     }

//     if (c === 1) {
//       alert('higher. ' + 'You have ' + c + ' guess remaining!');
//       console.log(c);
//     }

//     else {
//       alert('higher. ' + 'You have ' + c + ' guesses remaining!');
//       console.log(c);
//     }

//   } else if (numberGuessed > numberInMyHead) {

//     if (numberGuessed > numberInMyHead && c === 0) {
//       alert('Aw, nice try. You are out of guesses.  Thanks for playing!');
//       console.log(c);
//       break;
//     }

//     alert('lower. ' + 'You have ' + c + ' guesses remaining!');
//     console.log(c);
//   }

//   if (numberGuessed > numberInMyHead && c === 1) {
//     alert('lower. ' + 'You have ' + c + ' guess remaining!');
//     continue;

//   } else if (numberGuessed > numberInMyHead && c === 0) {
//     alert('Aw, nice try. You are out of guesses.  Thanks for playing!');
//     console.log(c);
//     break;

//   } else {
//     alert('correct the number was ' + numberInMyHead);
//     console.log(c);
//     break;
//   }
// }

// inputUserName();
// guessHowManyStates();
// guessCanIRunFast();
// guessLikesToDance();
guessLikesKaraoke();