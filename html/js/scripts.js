$(document).ready(function () {
  var passField = $('#pass'),
    passFieldTwo = $('#pass-two'),
    fieldThree = $('#random-number'),
    minNumber = 36,
    maxNumber = 60;


  $('.generator').pGenerator({
    'bind': 'click',
    'passwordElement': ['#pass', '#pass-two'],
    'displayElement': '#pass2',
    'passwordLength': 12,
    'uppercase': true,
    'lowercase': true,
    'numbers':   true,
    'specialChars': false,
    'onPasswordGenerated': function (generatedPassword) {
      passField.val(generatedPassword);
      passFieldTwo.val(generatedPassword);

      randomNumberFromRange(minNumber / 2, maxNumber / 2);
      function randomNumberFromRange(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        fieldThree.val(randomNumber * 2);
      }





    }
  });
});
