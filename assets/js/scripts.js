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
    thirdcols = $('#thirdcols'),
    fieldFive = $('#number-5'),
    fieldSix = $('#number-6'),
    fieldSeven = $('#number-7'),
    fieldEight = $('#number-8'),
    fieldNine = $('#number-9'),
    fieldTen = $('#number-10'),
    resultField = $('#result'),
    occupationField = $('#occupation'),
    occupations = ["Cook", "Copywriter", "Car Mechanic", "Civil Engineer", "Credit analyst", "Consultant", "Cleaner", "Clerk", "Driver", "Economist", "Electrical Engineer", "Finance Broker", "Finance Manager", "Janitor", "Manager", "File Clerk", "Office Clerk", "Stock clerk", "Assistant", "Project engineer", "Radio Mechanics", "Sales Manager", "Sales Promoter", "Administrator", "Systems Analyst", "Web Designer", "Auditing clerk", "Bus driver", "Cashier", "Fitness Trainer", "Secretary", "Web Developer", "Marketing Manager", "Accountant", "Mechanical Engineer", "IT Manager", "Logistician", "Insurance Agent", "HR Specialist", "Receptionist", "Auto Mechanic", "Security Guard", "Guard", "Financial Analyst"];

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

    var minNumber = $( "input[name=random-number-from]" ).val();
    var maxNumber = $( "input[name=random-number-to]" ).val();

    randomNumberFromRange(minNumber / 2, maxNumber / 2);
    function randomNumberFromRange(min, max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      fieldThree.val(randomNumber * 2);
    }

    occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);

    var minNumberTwo = $( "input[name=random-number-2-from]" ).val();
    var maxNumberTwo = $( "input[name=random-number-2-to]" ).val();

    randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);
    function randomNumberFromRangeTwo(min, max) {
      var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
      fieldFour.val(randomNumberTwo * 2);
    }

    var fieldFivePercent = fieldFive.val(),
      fieldFourVal = fieldFour.val();

    fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));

    var sorceNumber = $('#random-number-2').val();
    if ( sorceNumber > 8000 && sorceNumber < 8050 ) {
      var col3result = 803;
    } else if ( sorceNumber > 8050 && sorceNumber < 8100 ) {
      var col3result = 808;
    } else if ( sorceNumber > 8100 && sorceNumber < 8150 ) {
      var col3result = 813;
    } else if ( sorceNumber > 8150 && sorceNumber < 8200 ) {
      var col3result = 818;
    } else if ( sorceNumber > 8200 && sorceNumber < 8250 ) {
      var col3result = 823;
    } else if ( sorceNumber > 8250 && sorceNumber < 8300 ) {
      var col3result = 828;
    } else if ( sorceNumber > 8300 && sorceNumber < 8350 ) {
      var col3result = 833;
    } else if ( sorceNumber > 8350 && sorceNumber < 8400 ) {
      var col3result = 838;
    } else if ( sorceNumber > 8400 && sorceNumber < 8450 ) {
      var col3result = 843;
    } else if ( sorceNumber > 8450 && sorceNumber < 8500 ) {
      var col3result = 848;
    } else if ( sorceNumber > 8500 && sorceNumber < 8550 ) {
      var col3result = 853;
    } else if ( sorceNumber > 8550 && sorceNumber < 8600 ) {
      var col3result = 858;
    } else if ( sorceNumber > 8600 && sorceNumber < 8650 ) {
      var col3result = 863;
    } else if ( sorceNumber > 8650 && sorceNumber < 8700 ) {
      var col3result = 868;
    } else if ( sorceNumber > 8700 && sorceNumber < 8750 ) {
      var col3result = 873;
    } else if ( sorceNumber > 8750 && sorceNumber < 8800 ) {
      var col3result = 878;
    } else if ( sorceNumber > 8800 && sorceNumber < 8850 ) {
      var col3result = 883;
    } else if ( sorceNumber > 8850 && sorceNumber < 8900 ) {
      var col3result = 888;
    } else if ( sorceNumber > 8900 && sorceNumber < 8950 ) {
      var col3result = 893;
    } else if ( sorceNumber > 8950 && sorceNumber < 9000 ) {
      var col3result = 898;
    } else if ( sorceNumber > 9000 && sorceNumber < 9050 ) {
      var col3result = 903;
    } else if ( sorceNumber > 9050 && sorceNumber < 9100 ) {
      var col3result = 908;
    } else if ( sorceNumber > 9100 && sorceNumber < 9150 ) {
      var col3result = 913;
    } else if ( sorceNumber > 9150 && sorceNumber < 9200 ) {
      var col3result = 918;
    } else if ( sorceNumber > 9200 && sorceNumber < 9250 ) {
      var col3result = 923;
    } else if ( sorceNumber > 9250 && sorceNumber < 9300 ) {
      var col3result = 930;
    } else if ( sorceNumber > 9300 && sorceNumber < 9350 ) {
      var col3result = 938;
    } else if ( sorceNumber > 9350 && sorceNumber < 9400 ) {
      var col3result = 945;
    } else if ( sorceNumber > 9400 && sorceNumber < 9450 ) {
      var col3result = 953;
    } else if ( sorceNumber > 9450 && sorceNumber < 9500 ) {
      var col3result = 960;
    } else if ( sorceNumber > 9500 && sorceNumber < 9550 ) {
      var col3result = 968;
    } else if ( sorceNumber > 9550 && sorceNumber < 9600 ) {
      var col3result = 975;
    } else if ( sorceNumber > 9600 && sorceNumber < 9650 ) {
      var col3result = 983;
    } else if ( sorceNumber > 9650 && sorceNumber < 9700 ) {
      var col3result = 990;
    } else if ( sorceNumber > 9700 && sorceNumber < 9750 ) {
      var col3result = 998;
    } else if ( sorceNumber > 9750 && sorceNumber < 9800 ) {
      var col3result = 1005;
    } else if ( sorceNumber > 9800 && sorceNumber < 9850 ) {
      var col3result = 1013;
    } else if ( sorceNumber > 9850 && sorceNumber < 9900 ) {
      var col3result = 1020;
    } else if ( sorceNumber > 9900 && sorceNumber < 9950 ) {
      var col3result = 1028;
    } else if ( sorceNumber > 9950 && sorceNumber < 10000 ) {
      var col3result = 1035;
    } else if ( sorceNumber > 10000 && sorceNumber < 10050 ) {
      var col3result = 1043;
    } else if ( sorceNumber > 10050 && sorceNumber < 10100 ) {
      var col3result = 1050;
    } else if ( sorceNumber > 10100 && sorceNumber < 10150 ) {
      var col3result = 1058;
    } else if ( sorceNumber > 10150 && sorceNumber < 10200 ) {
      var col3result = 1065;
    } else if ( sorceNumber > 10200 && sorceNumber < 10250 ) {
      var col3result = 1073;
    } else if ( sorceNumber > 10250 && sorceNumber < 10300 ) {
      var col3result = 1080;
    } else if ( sorceNumber > 10300 && sorceNumber < 10350 ) {
      var col3result = 1088;
    } else if ( sorceNumber > 10350 && sorceNumber < 10400 ) {
      var col3result = 1095;
    } else if ( sorceNumber > 10400 && sorceNumber < 10450 ) {
      var col3result = 1103;
    } else if ( sorceNumber > 10450 && sorceNumber < 10500 ) {
      var col3result = 1110;
    } else if ( sorceNumber > 10500 && sorceNumber < 10550 ) {
      var col3result = 1118;
    } else if ( sorceNumber > 10550 && sorceNumber < 10600 ) {
      var col3result = 1125;
    } else if ( sorceNumber > 10600 && sorceNumber < 10650 ) {
      var col3result = 1133;
    } else if ( sorceNumber > 10650 && sorceNumber < 10700 ) {
      var col3result = 1140;
    } else if ( sorceNumber > 10700 && sorceNumber < 10750 ) {
      var col3result = 1148;
    } else if ( sorceNumber > 10750 && sorceNumber < 10800 ) {
      var col3result = 1155;
    } else if ( sorceNumber > 10800 && sorceNumber < 10850 ) {
      var col3result = 1163;
    } else if ( sorceNumber > 10850 && sorceNumber < 10900 ) {
      var col3result = 1170;
    } else if ( sorceNumber > 10900 && sorceNumber < 10950 ) {
      var col3result = 1178;
    } else if ( sorceNumber > 10950 && sorceNumber < 11000 ) {
      var col3result = 1185;
    } else if ( sorceNumber > 11000 && sorceNumber < 11050 ) {
      var col3result = 1193;
    } else if ( sorceNumber > 11050 && sorceNumber < 11100 ) {
      var col3result = 1200;
    } else if ( sorceNumber > 11100 && sorceNumber < 11150 ) {
      var col3result = 1208;
    } else if ( sorceNumber > 11150 && sorceNumber < 11200 ) {
      var col3result = 1215;
    } else if ( sorceNumber > 11200 && sorceNumber < 11250 ) {
      var col3result = 1223;
    } else if ( sorceNumber > 11250 && sorceNumber < 11300 ) {
      var col3result = 1230;
    } else if ( sorceNumber > 11300 && sorceNumber < 11350 ) {
      var col3result = 1238;
    } else if ( sorceNumber > 11350 && sorceNumber < 11400 ) {
      var col3result = 1245;
    } else if ( sorceNumber > 11400 && sorceNumber < 11450 ) {
      var col3result = 1253;
    } else if ( sorceNumber > 11450 && sorceNumber < 11500 ) {
      var col3result = 1260;
    } else if ( sorceNumber > 11500 && sorceNumber < 11550 ) {
      var col3result = 1268;
    } else if ( sorceNumber > 11550 && sorceNumber < 11600 ) {
      var col3result = 1275;
    } else if ( sorceNumber > 11600 && sorceNumber < 11650 ) {
      var col3result = 1283;
    } else if ( sorceNumber > 11650 && sorceNumber < 11700 ) {
      var col3result = 1290;
    } else if ( sorceNumber > 11700 && sorceNumber < 11750 ) {
      var col3result = 1298;
    } else if ( sorceNumber > 11750 && sorceNumber < 11800 ) {
      var col3result = 1305;
    } else if ( sorceNumber > 11800 && sorceNumber < 11850 ) {
      var col3result = 1313;
    } else if ( sorceNumber > 11850 && sorceNumber < 11900 ) {
      var col3result = 1320;
    } else if ( sorceNumber > 11900 && sorceNumber < 11950 ) {
      var col3result = 1328;
    } else if ( sorceNumber > 11950 && sorceNumber < 12000 ) {
      var col3result = 1335;
    };
    thirdcols.val(col3result);

    fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
    fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));

    var minNumberThree = $( "input[name=number-9-from]" ).val();
    var maxNumberThree = $( "input[name=number-9-to]" ).val();

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

    var minNumber = $( "input[name=random-number-from]" ).val();
    var maxNumber = $( "input[name=random-number-to]" ).val();

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

    var minNumberTwo = $( "input[name=random-number-2-from]" ).val();
    var maxNumberTwo = $( "input[name=random-number-2-to]" ).val();

    randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);
    function randomNumberFromRangeTwo(min, max) {
      var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
      fieldFour.val(randomNumberTwo * 2);
    }

    var fieldFivePercent = fieldFive.val(),
      fieldFourVal = fieldFour.val();

    fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));

    var sorceNumber = $('#random-number-2').val();
    if ( sorceNumber > 8000 && sorceNumber < 8050 ) {
      var col3result = 803;
    } else if ( sorceNumber > 8050 && sorceNumber < 8100 ) {
      var col3result = 808;
    } else if ( sorceNumber > 8100 && sorceNumber < 8150 ) {
      var col3result = 813;
    } else if ( sorceNumber > 8150 && sorceNumber < 8200 ) {
      var col3result = 818;
    } else if ( sorceNumber > 8200 && sorceNumber < 8250 ) {
      var col3result = 823;
    } else if ( sorceNumber > 8250 && sorceNumber < 8300 ) {
      var col3result = 828;
    } else if ( sorceNumber > 8300 && sorceNumber < 8350 ) {
      var col3result = 833;
    } else if ( sorceNumber > 8350 && sorceNumber < 8400 ) {
      var col3result = 838;
    } else if ( sorceNumber > 8400 && sorceNumber < 8450 ) {
      var col3result = 843;
    } else if ( sorceNumber > 8450 && sorceNumber < 8500 ) {
      var col3result = 848;
    } else if ( sorceNumber > 8500 && sorceNumber < 8550 ) {
      var col3result = 853;
    } else if ( sorceNumber > 8550 && sorceNumber < 8600 ) {
      var col3result = 858;
    } else if ( sorceNumber > 8600 && sorceNumber < 8650 ) {
      var col3result = 863;
    } else if ( sorceNumber > 8650 && sorceNumber < 8700 ) {
      var col3result = 868;
    } else if ( sorceNumber > 8700 && sorceNumber < 8750 ) {
      var col3result = 873;
    } else if ( sorceNumber > 8750 && sorceNumber < 8800 ) {
      var col3result = 878;
    } else if ( sorceNumber > 8800 && sorceNumber < 8850 ) {
      var col3result = 883;
    } else if ( sorceNumber > 8850 && sorceNumber < 8900 ) {
      var col3result = 888;
    } else if ( sorceNumber > 8900 && sorceNumber < 8950 ) {
      var col3result = 893;
    } else if ( sorceNumber > 8950 && sorceNumber < 9000 ) {
      var col3result = 898;
    } else if ( sorceNumber > 9000 && sorceNumber < 9050 ) {
      var col3result = 903;
    } else if ( sorceNumber > 9050 && sorceNumber < 9100 ) {
      var col3result = 908;
    } else if ( sorceNumber > 9100 && sorceNumber < 9150 ) {
      var col3result = 913;
    } else if ( sorceNumber > 9150 && sorceNumber < 9200 ) {
      var col3result = 918;
    } else if ( sorceNumber > 9200 && sorceNumber < 9250 ) {
      var col3result = 923;
    } else if ( sorceNumber > 9250 && sorceNumber < 9300 ) {
      var col3result = 930;
    } else if ( sorceNumber > 9300 && sorceNumber < 9350 ) {
      var col3result = 938;
    } else if ( sorceNumber > 9350 && sorceNumber < 9400 ) {
      var col3result = 945;
    } else if ( sorceNumber > 9400 && sorceNumber < 9450 ) {
      var col3result = 953;
    } else if ( sorceNumber > 9450 && sorceNumber < 9500 ) {
      var col3result = 960;
    } else if ( sorceNumber > 9500 && sorceNumber < 9550 ) {
      var col3result = 968;
    } else if ( sorceNumber > 9550 && sorceNumber < 9600 ) {
      var col3result = 975;
    } else if ( sorceNumber > 9600 && sorceNumber < 9650 ) {
      var col3result = 983;
    } else if ( sorceNumber > 9650 && sorceNumber < 9700 ) {
      var col3result = 990;
    } else if ( sorceNumber > 9700 && sorceNumber < 9750 ) {
      var col3result = 998;
    } else if ( sorceNumber > 9750 && sorceNumber < 9800 ) {
      var col3result = 1005;
    } else if ( sorceNumber > 9800 && sorceNumber < 9850 ) {
      var col3result = 1013;
    } else if ( sorceNumber > 9850 && sorceNumber < 9900 ) {
      var col3result = 1020;
    } else if ( sorceNumber > 9900 && sorceNumber < 9950 ) {
      var col3result = 1028;
    } else if ( sorceNumber > 9950 && sorceNumber < 10000 ) {
      var col3result = 1035;
    } else if ( sorceNumber > 10000 && sorceNumber < 10050 ) {
      var col3result = 1043;
    } else if ( sorceNumber > 10050 && sorceNumber < 10100 ) {
      var col3result = 1050;
    } else if ( sorceNumber > 10100 && sorceNumber < 10150 ) {
      var col3result = 1058;
    } else if ( sorceNumber > 10150 && sorceNumber < 10200 ) {
      var col3result = 1065;
    } else if ( sorceNumber > 10200 && sorceNumber < 10250 ) {
      var col3result = 1073;
    } else if ( sorceNumber > 10250 && sorceNumber < 10300 ) {
      var col3result = 1080;
    } else if ( sorceNumber > 10300 && sorceNumber < 10350 ) {
      var col3result = 1088;
    } else if ( sorceNumber > 10350 && sorceNumber < 10400 ) {
      var col3result = 1095;
    } else if ( sorceNumber > 10400 && sorceNumber < 10450 ) {
      var col3result = 1103;
    } else if ( sorceNumber > 10450 && sorceNumber < 10500 ) {
      var col3result = 1110;
    } else if ( sorceNumber > 10500 && sorceNumber < 10550 ) {
      var col3result = 1118;
    } else if ( sorceNumber > 10550 && sorceNumber < 10600 ) {
      var col3result = 1125;
    } else if ( sorceNumber > 10600 && sorceNumber < 10650 ) {
      var col3result = 1133;
    } else if ( sorceNumber > 10650 && sorceNumber < 10700 ) {
      var col3result = 1140;
    } else if ( sorceNumber > 10700 && sorceNumber < 10750 ) {
      var col3result = 1148;
    } else if ( sorceNumber > 10750 && sorceNumber < 10800 ) {
      var col3result = 1155;
    } else if ( sorceNumber > 10800 && sorceNumber < 10850 ) {
      var col3result = 1163;
    } else if ( sorceNumber > 10850 && sorceNumber < 10900 ) {
      var col3result = 1170;
    } else if ( sorceNumber > 10900 && sorceNumber < 10950 ) {
      var col3result = 1178;
    } else if ( sorceNumber > 10950 && sorceNumber < 11000 ) {
      var col3result = 1185;
    } else if ( sorceNumber > 11000 && sorceNumber < 11050 ) {
      var col3result = 1193;
    } else if ( sorceNumber > 11050 && sorceNumber < 11100 ) {
      var col3result = 1200;
    } else if ( sorceNumber > 11100 && sorceNumber < 11150 ) {
      var col3result = 1208;
    } else if ( sorceNumber > 11150 && sorceNumber < 11200 ) {
      var col3result = 1215;
    } else if ( sorceNumber > 11200 && sorceNumber < 11250 ) {
      var col3result = 1223;
    } else if ( sorceNumber > 11250 && sorceNumber < 11300 ) {
      var col3result = 1230;
    } else if ( sorceNumber > 11300 && sorceNumber < 11350 ) {
      var col3result = 1238;
    } else if ( sorceNumber > 11350 && sorceNumber < 11400 ) {
      var col3result = 1245;
    } else if ( sorceNumber > 11400 && sorceNumber < 11450 ) {
      var col3result = 1253;
    } else if ( sorceNumber > 11450 && sorceNumber < 11500 ) {
      var col3result = 1260;
    } else if ( sorceNumber > 11500 && sorceNumber < 11550 ) {
      var col3result = 1268;
    } else if ( sorceNumber > 11550 && sorceNumber < 11600 ) {
      var col3result = 1275;
    } else if ( sorceNumber > 11600 && sorceNumber < 11650 ) {
      var col3result = 1283;
    } else if ( sorceNumber > 11650 && sorceNumber < 11700 ) {
      var col3result = 1290;
    } else if ( sorceNumber > 11700 && sorceNumber < 11750 ) {
      var col3result = 1298;
    } else if ( sorceNumber > 11750 && sorceNumber < 11800 ) {
      var col3result = 1305;
    } else if ( sorceNumber > 11800 && sorceNumber < 11850 ) {
      var col3result = 1313;
    } else if ( sorceNumber > 11850 && sorceNumber < 11900 ) {
      var col3result = 1320;
    } else if ( sorceNumber > 11900 && sorceNumber < 11950 ) {
      var col3result = 1328;
    } else if ( sorceNumber > 11950 && sorceNumber < 12000 ) {
      var col3result = 1335;
    };
    thirdcols.val(col3result);

    fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
    fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));

    var minNumberThree = $( "input[name=number-9-from]" ).val();
    var maxNumberThree = $( "input[name=number-9-to]" ).val();

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

    var secHtml = 'OR<br />';
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

    var secHtml = 'CA<br />';
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

    var secHtml = 'IL<br />';
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

    var secHtml = 'AL<br />';
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

    var secHtml = 'NY<br />';
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

    var secHtml = 'TX<br />';
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

    var secHtml = 'ID<br />';
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

    var secHtml = 'GA<br />';
    secHtml += '1' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

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

    var secHtml = 'FL<br />';
    secHtml += 'L2' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '0' + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-az').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = 'AZ<br />';
    secHtml += 'D5' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-ar').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = 'AR<br />';
    secHtml += '9' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });

  $('.state-ak').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var startYear = randNumFrRang(2009,2014);
    var endYear = startYear + 8;

    var secHtml = 'AK<br />';
    secHtml += '5' + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + randNumFrRang(0,9) + '<br/>';

    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;

    $('.resulblock-second').html(secHtml);
  });


  $('.secret').on('click', function (e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');

    var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);

    var secHtml = '';
    secHtml += 'HR pass: ' + generatedPassword + '<br/>' +
    'Q1: ' + '<span class="text-1"></span>' + '<br/>' +
    'Q2: ' + '<span class="text-2"></span>' + '<br/>' +
    'Q3: ' + '<span class="text-3"></span>' + '<br/>';

    $('.resulblock-third').html(secHtml);

    $.get('text-1.txt', function(data) {
      var lines1 = data.split('\n');
      var text1 = lines1[Math.floor(Math.random() * lines1.length)];
      $('.text-1').html(text1);
    });

    $.get('text-2.txt', function(data) {
      var lines2 = data.split('\n');
      var text2 = lines2[Math.floor(Math.random() * lines2.length)];
      $('.text-2').html(text2);
    });

    $.get('text-3.txt', function(data) {
      var lines3 = data.split('\n');
      var text3 = lines3[Math.floor(Math.random() * lines3.length)];
      $('.text-3').html(text3);
    });




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

var client3 = new ZeroClipboard($('.resulblock-third'));
client3.on('ready', function(event) {
// console.log( 'movie is loaded' );
  client3.on('copy', function(event) {
    event.clipboardData.setData('text/plain', event.target.innerText);
  });
  client3.on('aftercopy', function(event) {
    console.log('Copied text to clipboard: ' + event.data['text/plain']);
  });
});
client3.on('error', function(event) {
// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
  ZeroClipboard.destroy();
});




});


