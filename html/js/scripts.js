$(document).ready(function () {
  var passField = $('#pass'),
    passFieldTwo = $('#pass-two');
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
      console.log('My new generated password is ' + generatedPassword);
      passField.val(generatedPassword);
      passFieldTwo.val(generatedPassword);
    }
  });
});
