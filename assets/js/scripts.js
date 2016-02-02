$(document).ready(function () {
var passSymbChar = ['!', '@', '#', '$', '%', '&', '*'];
var passNumChar = "23456789";
var passAlphaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passAlphaSmChar = "abcdefghijklmnopqrstuvwxyz";

function getRandomFromArray(array) {
  var rand = array[Math.floor(Math.random() * array.length)];
  return rand;
}

function getRandomFromPossible(possible) {
  var text = "";
  for (var i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;

}




  var passField = $('#pass'),
    fieldThree = $('#random-number'),
    fieldFour = $('#random-number-2'),
    fieldFive = $('#number-5'),
    fieldSix = $('#number-6'),
    fieldSeven = $('#number-7'),
    fieldEight = $('#number-8'),
    fieldNine = $('#number-9'),
    fieldTen = $('#number-10'),
    resultField = $('#result'),
    occupationField = $('#occupation'),
    occupations = ["Cook", "Copywriter", "Car Mechanic", "Civil Engineer", "Credit analyst", "Consultant", "Cleaner", "Clerk", "Driver", "Economist", "Electrical Engineer", "Finance Broker", "Finance Manager", "Janitor", "Manager", "File Clerk", "Office Clerk", "Stock clerk", "Assistant", "Project engineer", "Radio Mechanics", "Sales Manager", "Sales Promoter", "Administrator", "Systems Analyst", "Web Designer", "Auditing clerk", "Bus driver", "Cashier", "Fitness Trainer", "Secretary", "Web Developer", "Marketing Manager", "Accountant", "Mechanical Engineer", "IT Manager", "Logistician", "Insurance Agent", "HR Specialist", "Receptionist", "Auto Mechanic", "Security Guard", "Guard", "Financial Analyst"],
    minNumber = 36,
    maxNumber = 60;
  minNumberTwo = 8000,
    maxNumberTwo = 12000;
  minNumberThree = 212,
    maxNumberThree = 240;
  minNumberFour = 164,
    maxNumberFour = 212;

  // full block generate
  $('.generator-first').on('click', function (e) {
    e.preventDefault();

    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    $('body').addClass('mylittleponys');

    var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
    passField.val(generatedPassword);

    randomNumberFromRange(minNumber / 2, maxNumber / 2);
    function randomNumberFromRange(min, max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      fieldThree.val(randomNumber * 2);
    }

    occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);

    randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);
    function randomNumberFromRangeTwo(min, max) {
      var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
      fieldFour.val(randomNumberTwo * 2);
    }

    var fieldFivePercent = fieldFive.val(),
      fieldFourVal = fieldFour.val();

    fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
    fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
    fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));

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

    $('.resulblock').html('
      TT pass: ' + generatedPassword + '<br /><br />
      TT2015 (Deluxe+EIC)<br />
      Amount: (gift )<br /><br />' +
      // 'Occupation: ' + occupationField.val() + '<br /><br />' +
      fieldFour.val() + '<br />' +
      fieldSix.val() + '<br />' +
      fieldSeven.val() + '<br />' +
      fieldEight.val() + '<br />' +
      fieldNine.val() + ' - gambling<br />'
      //  + fieldTen.val() + ' - jscode'
    );

  })

  // halft top block generate
  $('.generator-second').on('click', function (e) {
    e.preventDefault();

    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
    passField.val(generatedPassword);

    randomNumberFromRange(minNumber / 2, maxNumber / 2);
    function randomNumberFromRange(min, max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      fieldThree.val(randomNumber * 2);
    }

    $('.resulblock').html('
      TT pass: ' + generatedPassword + '<br /><br />
      TT2015 (Deluxe+EIC)<br />
      Amount: (gift )<br /><br />'
    );

  })

  // half bottom block generate
  $('.generator-third').on('click', function (e) {
    e.preventDefault();

    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);

    randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);
    function randomNumberFromRangeTwo(min, max) {
      var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
      fieldFour.val(randomNumberTwo * 2);
    }

    var fieldFivePercent = fieldFive.val(),
      fieldFourVal = fieldFour.val();

    fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
    fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
    fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));

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

    $('.resulblock').html(
      // 'Occupation: ' + occupationField.val() + '<br /><br />' +
      fieldFour.val() + '<br />' +
      fieldSix.val() + '<br />' +
      fieldSeven.val() + '<br />' +
      fieldEight.val() + '<br />' +
      fieldNine.val() + ' - gambling<br />'
      //  + fieldTen.val() + ' - jscode'
    );

  })

  // random number generator
  function randNumFrRang(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }

  // random month generator
  function randomMonth() {
    var randMnth = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    if ( randMnth < 10 ) {
      randMnth = '0' + randMnth;
    }
    return randMnth;
  }


  $('.state-or').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += '3' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-ca').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += 'B2' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-il').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += 'D40' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-al').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += '8' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-ny').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += '4' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-tx').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += '1' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-id').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += 'A2' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-ga').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += '1' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-fl').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = '';
    secHtml += 'L2' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '0' + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });




















var client = new ZeroClipboard($('.resulblock'));
client.on('ready', function(event) {
// console.log( 'movie is loaded' );
  client.on('copy', function(event) {
    event.clipboardData.setData('text/plain', event.target.innerText);
  });
  client.on('aftercopy', function(event) {
    console.log('Copied text to clipboard: ' + event.data['text/plain']);
  });
});
client.on('error', function(event) {
// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
  ZeroClipboard.destroy();
});

var client2 = new ZeroClipboard($('.resulblock-second'));
client2.on('ready', function(event) {
// console.log( 'movie is loaded' );
  client2.on('copy', function(event) {
    event.clipboardData.setData('text/plain', event.target.innerText);
  });
  client2.on('aftercopy', function(event) {
    console.log('Copied text to clipboard: ' + event.data['text/plain']);
  });
});
client2.on('error', function(event) {
// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
  ZeroClipboard.destroy();
});




});


