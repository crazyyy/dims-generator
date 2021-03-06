$(document).ready(function () {

  var passField = $('#pass'),
    passFieldTwo = $('#pass-two'),
    fieldThree = $('#random-number'),
    fieldFour = $('#random-number-2'),
    fieldFive= $('#number-5'),
    fieldSix= $('#number-6'),
    fieldSeven= $('#number-7'),
    fieldEight= $('#number-8'),
    fieldNine= $('#number-9'),
    fieldTen= $('#number-10'),
    resultField= $('#result'),
    occupationField = $('#occupation'),
    occupations = ["Cook", "Copywriter", "Car Mechanic", "Civil Engineer", "Credit analyst", "Consultant", "Cleaner", "Clerk", "Driver", "Economist", "Electrical Engineer", "Finance Broker", "Finance Manager", "Janitor", "Manager", "File Clerk", "Office Clerk", "Stock clerk", "Assistant", "Project engineer", "Radio Mechanics", "Sales Manager", "Sales Promoter", "Administrator", "Systems Analyst", "Web Designer", "Auditing clerk", "Bus driver", "Cashier", "Fitness Trainer", "Secretary", "Web Developer", "Marketing Manager", "Accountant", "Mechanical Engineer", "IT Manager", "Logistician", "Insurance Agent", "HR Specialist", "Receptionist", "Auto Mechanic", "Security Guard", "Guard", "Financial Analyst"],
    minNumber = 36,
    maxNumber = 60;
    minNumberTwo = 8000,
    maxNumberTwo = 10000;
    minNumberThree = 212,
    maxNumberThree = 240;
    minNumberFour = 164,
    maxNumberFour = 212;


  $('.generator').pGenerator({
    'bind': 'click',
    'passwordElement': ['#pass', '#pass-two'],
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

      occupationField.val(occupations[Math.floor(Math.random()*occupations.length)]);

      randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);
      function randomNumberFromRangeTwo(min, max) {
        var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
        fieldFour.val(randomNumberTwo * 2);
      }

      var fieldFivePercent = fieldFive.val(),
        fieldFourVal = fieldFour.val();
      fieldSix.val( Math.round(fieldFourVal / 100 * fieldFivePercent) );
      fieldSeven.val( Math.round(fieldFourVal / 100 * 6.2) );
      fieldEight.val( Math.round(fieldFourVal / 100 * 1.45) );

      randomNumberFromRangeThree(minNumberThree / 2, maxNumberThree / 2);
      function randomNumberFromRangeThree(min, max) {
        var randomNumberThree = Math.floor(Math.random() * (max - min + 1) + min);
        fieldNine.val(randomNumberThree * 2);
      }

      randomNumberFromRangeFour(minNumberFour / 2, maxNumberFour / 2);
      function randomNumberFromRangeFour(min, max) {
        var randomNumberFour = Math.floor(Math.random() * (max - min + 1) + min);
        fieldTen.val(randomNumberFour * 2);
      }

      $('.resulblock').html('yandex.ru <br /> / ' + generatedPassword + ' <br />Q: ' + generatedPassword + '<br /><br />TT (Deluxe+EIC+NextYear(' + fieldThree.val() + ')) <br />Amount:  (gift )<br /><br />Occupation: ' + occupationField.val() + '<br /><br />' + fieldFour.val() + '<br />' + fieldSix.val() + '<br />' + fieldSeven.val() + '<br />' + fieldEight.val() + '<br />' + fieldNine.val() + ' - tips<br />' + fieldTen.val() + ' - jscode');


    }
  });

  var client = new ZeroClipboard( $('.resulblock') );

  client.on( 'ready', function(event) {
    // console.log( 'movie is loaded' );

    client.on( 'copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerText);
    } );

    client.on( 'aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    } );
  } );

  client.on( 'error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
  } );


});
