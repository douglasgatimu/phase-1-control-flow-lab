function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if ((feet > 400) && (feet <= 2000)) {
    return 'That will be twenty bucks.'
  } else if ((feet > 2000) && (feet<=2500)) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    return  'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case 'generous': 
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return message;
}

//console.log(scuberGreetingForFeet(2501));
//console.log(ternaryCheckCity('NYC'));
console.log(switchOnCharmFromTip(' generous'));