const greetWorld = () => {
    return 'Hello, World!';
  };

console.log(greetWorld());

/*Determines whether a person is under / over the age of 18 and if they are able / not able to Vote.*/

const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canIVote(19));

/*Determines whether the result of user input can either Agree or Disagree.*/


const agreeOrDisagree = (agree, disagree) => {
  if (agree === 'agree' && disagree === 'disagree') {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
}
console.log(agreeOrDisagree('agree', 'disagree'))

/*Determines the term used to often refer to a certain age group. Users can input their age and the result will determine their age group.*/

const lifePhase = age => {
  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >=13 && age <=19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
};

console.log(lifePhase(2));
console.log(lifePhase(6));
console.log(lifePhase(15));
console.log(lifePhase(40));
console.log(lifePhase(80));
console.log(lifePhase(-1));
console.log(lifePhase(141));

/*Works out the average of 3 grades out of 100, and the letter grade associated with that average score.*/

const finalGrade = (num1, num2, num3) => {
  if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100) {
    return 'You have entered an invalid grade.';
  };
const average = (num1 + num2 + num3) / 3;
 if (average >= 0 && average <= 59) {
  return 'F';
} else if (average >= 60 && average <= 69) {
  return 'D';
} else if (average >= 70 && average <= 79) {
  return 'C';
} else if (average >= 80 && average <=89) {
  return 'B';
} else if (average >= 90 && average <= 100) {
  return 'A'
} else {
  return 'Invalid average grade calculation';
};
};

console.log(finalGrade(105, 20, 30));

/*Allows users to input their military rank and surname and prints the result in a format to show they are reporting for duty.*/

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};

console.log(reportingForDuty('Private', 'Fido'))

/*Calculates the result of rolling 2 dice to produce a random number.*/

const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  return die1 + die2;
};

console.log(rollTheDice());

/*Calculates the weight of an object using earth measurement as a base, and works out the weight of the same object on another planet. While the mass remains the same, different levels of gravity will affect the weight of an object.*/

const calculateWeight = (earthWeight, planet) => {
  if (typeof earthWeight !== 'number') {
    return 'The earth weight is expected to be a number.';
  } if (typeof planet !== 'string') {
    return 'The planet is expected to be a string.';
  };

  let weightOnPlanet;

  switch (planet) {
    case 'Mercury':
    weightOnPlanet = earthWeight * 0.378;
    break;
    case 'Venus':
    weightOnPlanet = earthWeight * 0.907;
    break;
    case 'Mars':
    weightOnPlanet = earthWeight * 0.377;
    break;
    case 'Jupiter':
    weightOnPlanet = earthWeight * 2.36;
    break;
    case 'Saturn':
    weightOnPlanet = earthWeight * 0.916;
    break;
    default:
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  } return weightOnPlanet;
};

console.log('The weight of a can of Coke on Earth is 0.39 lbs.')

console.log('On Mercury, the same can of Coke would weigh ' + calculateWeight(0.39, 'Mercury') + ' lbs.');

console.log('Interestingly, on Jupiter, the very same can would weigh ' + calculateWeight(0.39, 'Jupiter') + ' lbs.')

/*Did you know on average, 25% of peoples real friends equates to the amount of imaginary friends they have?*/

const numImaginaryFriends = totalFriends => Math.ceil(totalFriends * 0.25);

const totalFriends = 10;
const imaginaryFriends = numImaginaryFriends(totalFriends);
console.log(`I have a total of ${totalFriends} real friends which means I also have a total of ${imaginaryFriends} imaginary friends.`)

/*Lets create a Silly Sentance!*/

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;

const sentance = sillySentence('excited', 'love', 'functions');
console.log(sentance);

/*Determines the total amount of £ tip to be provided upon the level of quality of service, reviewed by the customer*/

const tipCalculator = (quality, totalCost) => {
  let tipPercentage;

  switch (quality) {
    case 'bad':
    tipPercentage = 0.05;
    break;
    case 'ok':
    tipPercentage = 0.15;
    break;
    case 'good':
    tipPercentage = 0.20;
    break;
    case 'excellent':
    tipPercentage = 0.30;
    break;
    default:
    tipPercentage = 0.18;
  };
  const tipAmount =  totalCost * tipPercentage;

  console.log(`Thanks for your review of our team providing you with a Good Service. It is customary to leave a ${tipPercentage}% tip before you leave.`)

  return tipAmount;

  const grandTotalCost = totalCost;
};

const tip = tipCalculator('good', 50);
console.log(`As your order came to a Grand Total of £50, the tip required would be £${tip.toFixed(2)}`);

/*Let's talk about emoticons!*/

const toEmoticon = (emotion) => {
  switch (emotion) {
      case 'shrug':
      return '|_{"}_|';
      block;
      case 'smiley face':
      return ':)';
      block;
      case 'frowny face':
      return ':(';
      block;
      case 'winky face':
      return ';)';
      block;
      case 'heart':
      return '<3';
      default:
      return '|_(* ~ *)_|';
};
};

console.log(toEmoticon('shrug'));
console.log(toEmoticon('heart'));
console.log(toEmoticon('sad face'));

/*Favorite colour & shirts*/

const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return 'The shirt is your favorite color!';
  } else {
    return 'That is a nice color.';
  };
};

console.log(colorMessage('blue', 'blue'));

/* Is the number even or odd?*/

const isEven = num => {
  const evenNum = 2;
  return num % evenNum === 0;
};

console.log(isEven(6));

/* How many digits are the numbers entered?*/

const numberDigits = x => {
  if (x >= 0 && x <= 9) {
    return 'One digit: ' + x;
  } else if (x >= 10 && x <= 99) {
    return 'Two digits: ' + x;
  } else {
    return 'The number is: ' + x;
  };
};

console.log(numberDigits(5));
console.log(numberDigits(50));
console.log(numberDigits(-100));

