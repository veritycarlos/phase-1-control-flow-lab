function scuberGreetingForFeet(SomeDistance) {

  let result
  if (SomeDistance <= 400 ) {
      result = "This one is on me!"; 
      } else if (SomeDistance >=2500) { 
        result = "No can do.";
      } else if (SomeDistance > 2000) { 
        result = "I will gladly take your thirty bucks.";
      }
  return result
  }

function ternaryCheckCity(isCity) {
  return (isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}


function switchOnCharmFromTip(tip) {
let charmStatement;
  switch (tip) {
    case 'generous':
      charmStatement = 'Thank you so much.';
      break;
    case 'not as generous':
      charmStatement = 'Thank you.';
      break;
    default:
      charmStatement = 'Bye.';          
  }
  return charmStatement;
}