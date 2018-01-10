'use strict'

var userName = prompt('Hi, what is your name?');
console.log("The name of the user is: " + userName);
alert('Great! Nice to meet you ' + userName + '.  I\'m Zachary.  Let\'s go on a fun adventure of getting to know just who I am....and stuff and junk =D!');

var howManyStates = parseInt(prompt('How many states do you think I\'ve visited since I was born?'));
console.log("How many states the user thinks I've visited...tee hee!: " + howManyStates);

if(howManyStates === 23) {
    alert('What a guess!  You should seriously consider buying a lotto ticket with that kinda luck!');
} else {
    alert('Not quite, but great try!');
}
    
var canIRunFast = prompt('Can I run faster than a cheetah?  \(Please respond with either a YES or NO\)')
console.log('Did the user think I could run fast?: ' + canIRunFast)

if(canIRunFast === 'YES') {
    alert('so....I was kind of lying, just a little.  There is no WAY I can run faster than a cheetah! However, you honor me with your answer and I will continue to train until I reach the speed of a cheetah!!');
} else if (canIRunFast === 'NO') {
    alert('You are correct...I can only run AS FAST as a cheetah, not faster.');
} else {
    alert('Please enter YES or NO');
}

var likesToDance = prompt('I really like to dance.  How about you?');
console.log('Does the user like to dance?: ' + likesToDance);
alert('Challenge accepted.  Let\'s dance now then shall we!');

var likesKaraoke = prompt('How about Karaoke?  Do you like Karaoke? \(Y or N)').toUpperCase();
console.log('Does the user like Karaoke?: ' + likesKaraoke);

if(likesKaraoke === 'Y') {
    
    var warmUp =prompt('Great, can we warm up together then? \(Y or N\)').toUpperCase();

    if(warmUp === 'Y') {
        alert('Do-Re-Mi-Fa-So-La-Ti!');
    } else {    
        alert('Some singer you are!');
    }
} if(likesKaraoke === 'N') {
    alert('Awww bummer, maybe next time =(');
}

