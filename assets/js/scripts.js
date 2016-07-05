$(document).ready(function() {
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
    for (var i = 0; i < 2; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
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
  $('.generator-first').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      $('body').addClass('mylittleponys');
      var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
      passField.val(generatedPassword);
      var minNumber = $("input[name=random-number-from]").val();
      var maxNumber = $("input[name=random-number-to]").val();
      randomNumberFromRange(minNumber / 2, maxNumber / 2);

      function randomNumberFromRange(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        fieldThree.val(randomNumber * 2);
      }
      occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);
      var minNumberTwo = $("input[name=random-number-2-from]").val();
      var maxNumberTwo = $("input[name=random-number-2-to]").val();
      randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);

      function randomNumberFromRangeTwo(min, max) {
        var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
        fieldFour.val(randomNumberTwo * 2);
      }
      var fieldFivePercent = fieldFive.val(),
        fieldFourVal = fieldFour.val();
      fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
      var sorceNumber = $('#random-number-2').val();
      if (sorceNumber > 8000 && sorceNumber < 8050) {
        var col3result = 803;
      } else if (sorceNumber > 8050 && sorceNumber < 8100) {
        var col3result = 808;
      } else if (sorceNumber > 8100 && sorceNumber < 8150) {
        var col3result = 813;
      } else if (sorceNumber > 8150 && sorceNumber < 8200) {
        var col3result = 818;
      } else if (sorceNumber > 8200 && sorceNumber < 8250) {
        var col3result = 823;
      } else if (sorceNumber > 8250 && sorceNumber < 8300) {
        var col3result = 828;
      } else if (sorceNumber > 8300 && sorceNumber < 8350) {
        var col3result = 833;
      } else if (sorceNumber > 8350 && sorceNumber < 8400) {
        var col3result = 838;
      } else if (sorceNumber > 8400 && sorceNumber < 8450) {
        var col3result = 843;
      } else if (sorceNumber > 8450 && sorceNumber < 8500) {
        var col3result = 848;
      } else if (sorceNumber > 8500 && sorceNumber < 8550) {
        var col3result = 853;
      } else if (sorceNumber > 8550 && sorceNumber < 8600) {
        var col3result = 858;
      } else if (sorceNumber > 8600 && sorceNumber < 8650) {
        var col3result = 863;
      } else if (sorceNumber > 8650 && sorceNumber < 8700) {
        var col3result = 868;
      } else if (sorceNumber > 8700 && sorceNumber < 8750) {
        var col3result = 873;
      } else if (sorceNumber > 8750 && sorceNumber < 8800) {
        var col3result = 878;
      } else if (sorceNumber > 8800 && sorceNumber < 8850) {
        var col3result = 883;
      } else if (sorceNumber > 8850 && sorceNumber < 8900) {
        var col3result = 888;
      } else if (sorceNumber > 8900 && sorceNumber < 8950) {
        var col3result = 893;
      } else if (sorceNumber > 8950 && sorceNumber < 9000) {
        var col3result = 898;
      } else if (sorceNumber > 9000 && sorceNumber < 9050) {
        var col3result = 903;
      } else if (sorceNumber > 9050 && sorceNumber < 9100) {
        var col3result = 908;
      } else if (sorceNumber > 9100 && sorceNumber < 9150) {
        var col3result = 913;
      } else if (sorceNumber > 9150 && sorceNumber < 9200) {
        var col3result = 918;
      } else if (sorceNumber > 9200 && sorceNumber < 9250) {
        var col3result = 923;
      } else if (sorceNumber > 9250 && sorceNumber < 9300) {
        var col3result = 930;
      } else if (sorceNumber > 9300 && sorceNumber < 9350) {
        var col3result = 938;
      } else if (sorceNumber > 9350 && sorceNumber < 9400) {
        var col3result = 945;
      } else if (sorceNumber > 9400 && sorceNumber < 9450) {
        var col3result = 953;
      } else if (sorceNumber > 9450 && sorceNumber < 9500) {
        var col3result = 960;
      } else if (sorceNumber > 9500 && sorceNumber < 9550) {
        var col3result = 968;
      } else if (sorceNumber > 9550 && sorceNumber < 9600) {
        var col3result = 975;
      } else if (sorceNumber > 9600 && sorceNumber < 9650) {
        var col3result = 983;
      } else if (sorceNumber > 9650 && sorceNumber < 9700) {
        var col3result = 990;
      } else if (sorceNumber > 9700 && sorceNumber < 9750) {
        var col3result = 998;
      } else if (sorceNumber > 9750 && sorceNumber < 9800) {
        var col3result = 1005;
      } else if (sorceNumber > 9800 && sorceNumber < 9850) {
        var col3result = 1013;
      } else if (sorceNumber > 9850 && sorceNumber < 9900) {
        var col3result = 1020;
      } else if (sorceNumber > 9900 && sorceNumber < 9950) {
        var col3result = 1028;
      } else if (sorceNumber > 9950 && sorceNumber < 10000) {
        var col3result = 1035;
      } else if (sorceNumber > 10000 && sorceNumber < 10050) {
        var col3result = 1043;
      } else if (sorceNumber > 10050 && sorceNumber < 10100) {
        var col3result = 1050;
      } else if (sorceNumber > 10100 && sorceNumber < 10150) {
        var col3result = 1058;
      } else if (sorceNumber > 10150 && sorceNumber < 10200) {
        var col3result = 1065;
      } else if (sorceNumber > 10200 && sorceNumber < 10250) {
        var col3result = 1073;
      } else if (sorceNumber > 10250 && sorceNumber < 10300) {
        var col3result = 1080;
      } else if (sorceNumber > 10300 && sorceNumber < 10350) {
        var col3result = 1088;
      } else if (sorceNumber > 10350 && sorceNumber < 10400) {
        var col3result = 1095;
      } else if (sorceNumber > 10400 && sorceNumber < 10450) {
        var col3result = 1103;
      } else if (sorceNumber > 10450 && sorceNumber < 10500) {
        var col3result = 1110;
      } else if (sorceNumber > 10500 && sorceNumber < 10550) {
        var col3result = 1118;
      } else if (sorceNumber > 10550 && sorceNumber < 10600) {
        var col3result = 1125;
      } else if (sorceNumber > 10600 && sorceNumber < 10650) {
        var col3result = 1133;
      } else if (sorceNumber > 10650 && sorceNumber < 10700) {
        var col3result = 1140;
      } else if (sorceNumber > 10700 && sorceNumber < 10750) {
        var col3result = 1148;
      } else if (sorceNumber > 10750 && sorceNumber < 10800) {
        var col3result = 1155;
      } else if (sorceNumber > 10800 && sorceNumber < 10850) {
        var col3result = 1163;
      } else if (sorceNumber > 10850 && sorceNumber < 10900) {
        var col3result = 1170;
      } else if (sorceNumber > 10900 && sorceNumber < 10950) {
        var col3result = 1178;
      } else if (sorceNumber > 10950 && sorceNumber < 11000) {
        var col3result = 1185;
      } else if (sorceNumber > 11000 && sorceNumber < 11050) {
        var col3result = 1193;
      } else if (sorceNumber > 11050 && sorceNumber < 11100) {
        var col3result = 1200;
      } else if (sorceNumber > 11100 && sorceNumber < 11150) {
        var col3result = 1208;
      } else if (sorceNumber > 11150 && sorceNumber < 11200) {
        var col3result = 1215;
      } else if (sorceNumber > 11200 && sorceNumber < 11250) {
        var col3result = 1223;
      } else if (sorceNumber > 11250 && sorceNumber < 11300) {
        var col3result = 1230;
      } else if (sorceNumber > 11300 && sorceNumber < 11350) {
        var col3result = 1238;
      } else if (sorceNumber > 11350 && sorceNumber < 11400) {
        var col3result = 1245;
      } else if (sorceNumber > 11400 && sorceNumber < 11450) {
        var col3result = 1253;
      } else if (sorceNumber > 11450 && sorceNumber < 11500) {
        var col3result = 1260;
      } else if (sorceNumber > 11500 && sorceNumber < 11550) {
        var col3result = 1268;
      } else if (sorceNumber > 11550 && sorceNumber < 11600) {
        var col3result = 1275;
      } else if (sorceNumber > 11600 && sorceNumber < 11650) {
        var col3result = 1283;
      } else if (sorceNumber > 11650 && sorceNumber < 11700) {
        var col3result = 1290;
      } else if (sorceNumber > 11700 && sorceNumber < 11750) {
        var col3result = 1298;
      } else if (sorceNumber > 11750 && sorceNumber < 11800) {
        var col3result = 1305;
      } else if (sorceNumber > 11800 && sorceNumber < 11850) {
        var col3result = 1313;
      } else if (sorceNumber > 11850 && sorceNumber < 11900) {
        var col3result = 1320;
      } else if (sorceNumber > 11900 && sorceNumber < 11950) {
        var col3result = 1328;
      } else if (sorceNumber > 11950 && sorceNumber < 12000) {
        var col3result = 1335;
      } else if (sorceNumber > 12000 && sorceNumber < 12050) {
        var col3result = 1343;
      } else if (sorceNumber > 12050 && sorceNumber < 12100) {
        var col3result = 1350;
      } else if (sorceNumber > 12100 && sorceNumber < 12150) {
        var col3result = 1358;
      } else if (sorceNumber > 12150 && sorceNumber < 12200) {
        var col3result = 1365;
      } else if (sorceNumber > 12200 && sorceNumber < 12250) {
        var col3result = 1373;
      } else if (sorceNumber > 12250 && sorceNumber < 12300) {
        var col3result = 1380;
      } else if (sorceNumber > 12300 && sorceNumber < 12350) {
        var col3result = 1388;
      } else if (sorceNumber > 12350 && sorceNumber < 12400) {
        var col3result = 1395;
      } else if (sorceNumber > 12400 && sorceNumber < 12450) {
        var col3result = 1403;
      } else if (sorceNumber > 12450 && sorceNumber < 12500) {
        var col3result = 1410;
      } else if (sorceNumber > 12500 && sorceNumber < 12550) {
        var col3result = 1418;
      } else if (sorceNumber > 12550 && sorceNumber < 12600) {
        var col3result = 1425;
      } else if (sorceNumber > 12600 && sorceNumber < 12650) {
        var col3result = 1433;
      } else if (sorceNumber > 12650 && sorceNumber < 12700) {
        var col3result = 1440;
      } else if (sorceNumber > 12700 && sorceNumber < 12750) {
        var col3result = 1448;
      } else if (sorceNumber > 12750 && sorceNumber < 12800) {
        var col3result = 1455;
      } else if (sorceNumber > 12800 && sorceNumber < 12850) {
        var col3result = 1463;
      } else if (sorceNumber > 12850 && sorceNumber < 12900) {
        var col3result = 1470;
      } else if (sorceNumber > 12900 && sorceNumber < 12950) {
        var col3result = 1478;
      } else if (sorceNumber > 12950 && sorceNumber < 13000) {
        var col3result = 1485;
      } else if (sorceNumber > 13000 && sorceNumber < 13050) {
        var col3result = 1493;
      } else if (sorceNumber > 13050 && sorceNumber < 13100) {
        var col3result = 1500;
      } else if (sorceNumber > 13100 && sorceNumber < 13150) {
        var col3result = 1508;
      } else if (sorceNumber > 13150 && sorceNumber < 13200) {
        var col3result = 1515;
      } else if (sorceNumber > 13200 && sorceNumber < 13250) {
        var col3result = 1523;
      } else if (sorceNumber > 13250 && sorceNumber < 13300) {
        var col3result = 1530;
      } else if (sorceNumber > 13300 && sorceNumber < 13350) {
        var col3result = 1538;
      } else if (sorceNumber > 13350 && sorceNumber < 13400) {
        var col3result = 1545;
      } else if (sorceNumber > 13400 && sorceNumber < 13450) {
        var col3result = 1553;
      } else if (sorceNumber > 13450 && sorceNumber < 13500) {
        var col3result = 1560;
      } else if (sorceNumber > 13500 && sorceNumber < 13550) {
        var col3result = 1568;
      } else if (sorceNumber > 13550 && sorceNumber < 13600) {
        var col3result = 1575;
      } else if (sorceNumber > 13600 && sorceNumber < 13650) {
        var col3result = 1583;
      } else if (sorceNumber > 13650 && sorceNumber < 13700) {
        var col3result = 1590;
      } else if (sorceNumber > 13700 && sorceNumber < 13750) {
        var col3result = 1598;
      } else if (sorceNumber > 13750 && sorceNumber < 13800) {
        var col3result = 1605;
      } else if (sorceNumber > 13800 && sorceNumber < 13850) {
        var col3result = 1613;
      } else if (sorceNumber > 13850 && sorceNumber < 13900) {
        var col3result = 1620;
      } else if (sorceNumber > 13900 && sorceNumber < 13950) {
        var col3result = 1628;
      } else if (sorceNumber > 13950 && sorceNumber < 14000) {
        var col3result = 1635;
      } else if (sorceNumber > 14000 && sorceNumber < 14050) {
        var col3result = 1643;
      } else if (sorceNumber > 14050 && sorceNumber < 14100) {
        var col3result = 1650;
      } else if (sorceNumber > 14100 && sorceNumber < 14150) {
        var col3result = 1658;
      } else if (sorceNumber > 14150 && sorceNumber < 14200) {
        var col3result = 1665;
      } else if (sorceNumber > 14200 && sorceNumber < 14250) {
        var col3result = 1673;
      } else if (sorceNumber > 14250 && sorceNumber < 14300) {
        var col3result = 1680;
      } else if (sorceNumber > 14300 && sorceNumber < 14350) {
        var col3result = 1688;
      } else if (sorceNumber > 14350 && sorceNumber < 14400) {
        var col3result = 1695;
      } else if (sorceNumber > 14400 && sorceNumber < 14450) {
        var col3result = 1703;
      } else if (sorceNumber > 14450 && sorceNumber < 14500) {
        var col3result = 1710;
      } else if (sorceNumber > 14500 && sorceNumber < 14550) {
        var col3result = 1718;
      } else if (sorceNumber > 14550 && sorceNumber < 14600) {
        var col3result = 1725;
      } else if (sorceNumber > 14600 && sorceNumber < 14650) {
        var col3result = 1733;
      } else if (sorceNumber > 14650 && sorceNumber < 14700) {
        var col3result = 1740;
      } else if (sorceNumber > 14700 && sorceNumber < 14750) {
        var col3result = 1748;
      } else if (sorceNumber > 14750 && sorceNumber < 14800) {
        var col3result = 1755;
      } else if (sorceNumber > 14800 && sorceNumber < 14850) {
        var col3result = 1763;
      } else if (sorceNumber > 14850 && sorceNumber < 14900) {
        var col3result = 1770;
      } else if (sorceNumber > 14900 && sorceNumber < 14950) {
        var col3result = 1778;
      } else if (sorceNumber > 14950 && sorceNumber < 15000) {
        var col3result = 1785;
      } else if (sorceNumber > 15000 && sorceNumber < 15050) {
        var col3result = 1793;
      } else if (sorceNumber > 15050 && sorceNumber < 15100) {
        var col3result = 1800;
      } else if (sorceNumber > 15100 && sorceNumber < 15150) {
        var col3result = 1808;
      } else if (sorceNumber > 15150 && sorceNumber < 15200) {
        var col3result = 1815;
      } else if (sorceNumber > 15200 && sorceNumber < 15250) {
        var col3result = 1823;
      } else if (sorceNumber > 15250 && sorceNumber < 15300) {
        var col3result = 1830;
      } else if (sorceNumber > 15300 && sorceNumber < 15350) {
        var col3result = 1838;
      } else if (sorceNumber > 15350 && sorceNumber < 15400) {
        var col3result = 1845;
      } else if (sorceNumber > 15400 && sorceNumber < 15450) {
        var col3result = 1853;
      } else if (sorceNumber > 15450 && sorceNumber < 15500) {
        var col3result = 1860;
      } else if (sorceNumber > 15500 && sorceNumber < 15550) {
        var col3result = 1868;
      } else if (sorceNumber > 15550 && sorceNumber < 15600) {
        var col3result = 1875;
      } else if (sorceNumber > 15600 && sorceNumber < 15650) {
        var col3result = 1883;
      } else if (sorceNumber > 15650 && sorceNumber < 15700) {
        var col3result = 1890;
      } else if (sorceNumber > 15700 && sorceNumber < 15750) {
        var col3result = 1898;
      } else if (sorceNumber > 15750 && sorceNumber < 15800) {
        var col3result = 1905;
      } else if (sorceNumber > 15800 && sorceNumber < 15850) {
        var col3result = 1913;
      } else if (sorceNumber > 15850 && sorceNumber < 15900) {
        var col3result = 1920;
      } else if (sorceNumber > 15900 && sorceNumber < 15950) {
        var col3result = 1928;
      } else if (sorceNumber > 15950 && sorceNumber < 16000) {
        var col3result = 1935;
      } else if (sorceNumber > 16000 && sorceNumber < 16050) {
        var col3result = 1943;
      } else if (sorceNumber > 16050 && sorceNumber < 16100) {
        var col3result = 1950;
      } else if (sorceNumber > 16100 && sorceNumber < 16150) {
        var col3result = 1958;
      } else if (sorceNumber > 16150 && sorceNumber < 16200) {
        var col3result = 1965;
      } else if (sorceNumber > 16200 && sorceNumber < 16250) {
        var col3result = 1973;
      } else if (sorceNumber > 16250 && sorceNumber < 16300) {
        var col3result = 1980;
      } else if (sorceNumber > 16300 && sorceNumber < 16350) {
        var col3result = 1988;
      } else if (sorceNumber > 16350 && sorceNumber < 16400) {
        var col3result = 1995;
      } else if (sorceNumber > 16400 && sorceNumber < 16450) {
        var col3result = 2003;
      } else if (sorceNumber > 16450 && sorceNumber < 16500) {
        var col3result = 2010;
      } else if (sorceNumber > 16500 && sorceNumber < 16550) {
        var col3result = 2018;
      } else if (sorceNumber > 16550 && sorceNumber < 16600) {
        var col3result = 2025;
      } else if (sorceNumber > 16600 && sorceNumber < 16650) {
        var col3result = 2033;
      } else if (sorceNumber > 16650 && sorceNumber < 16700) {
        var col3result = 2040;
      } else if (sorceNumber > 16700 && sorceNumber < 16750) {
        var col3result = 2048;
      } else if (sorceNumber > 16750 && sorceNumber < 16800) {
        var col3result = 2055;
      } else if (sorceNumber > 16800 && sorceNumber < 16850) {
        var col3result = 2063;
      } else if (sorceNumber > 16850 && sorceNumber < 16900) {
        var col3result = 2070;
      } else if (sorceNumber > 16900 && sorceNumber < 16950) {
        var col3result = 2078;
      } else if (sorceNumber > 16950 && sorceNumber < 17000) {
        var col3result = 2085;
      } else if (sorceNumber > 17000 && sorceNumber < 17050) {
        var col3result = 2093;
      } else if (sorceNumber > 17050 && sorceNumber < 17100) {
        var col3result = 2100;
      } else if (sorceNumber > 17100 && sorceNumber < 17150) {
        var col3result = 2108;
      } else if (sorceNumber > 17150 && sorceNumber < 17200) {
        var col3result = 2115;
      } else if (sorceNumber > 17200 && sorceNumber < 17250) {
        var col3result = 2123;
      } else if (sorceNumber > 17250 && sorceNumber < 17300) {
        var col3result = 2130;
      } else if (sorceNumber > 17300 && sorceNumber < 17350) {
        var col3result = 2138;
      } else if (sorceNumber > 17350 && sorceNumber < 17400) {
        var col3result = 2145;
      } else if (sorceNumber > 17400 && sorceNumber < 17450) {
        var col3result = 2153;
      } else if (sorceNumber > 17450 && sorceNumber < 17500) {
        var col3result = 2160;
      } else if (sorceNumber > 17500 && sorceNumber < 17550) {
        var col3result = 2168;
      } else if (sorceNumber > 17550 && sorceNumber < 17600) {
        var col3result = 2175;
      } else if (sorceNumber > 17600 && sorceNumber < 17650) {
        var col3result = 2183;
      } else if (sorceNumber > 17650 && sorceNumber < 17700) {
        var col3result = 2190;
      } else if (sorceNumber > 17700 && sorceNumber < 17750) {
        var col3result = 2198;
      } else if (sorceNumber > 17750 && sorceNumber < 17800) {
        var col3result = 2205;
      } else if (sorceNumber > 17800 && sorceNumber < 17850) {
        var col3result = 2213;
      } else if (sorceNumber > 17850 && sorceNumber < 17900) {
        var col3result = 2220;
      } else if (sorceNumber > 17900 && sorceNumber < 17950) {
        var col3result = 2228;
      } else if (sorceNumber > 17950 && sorceNumber < 18000) {
        var col3result = 2235;
      } else if (sorceNumber > 18000 && sorceNumber < 18050) {
        var col3result = 2243;
      } else if (sorceNumber > 18050 && sorceNumber < 18100) {
        var col3result = 2250;
      } else if (sorceNumber > 18100 && sorceNumber < 18150) {
        var col3result = 2258;
      } else if (sorceNumber > 18150 && sorceNumber < 18200) {
        var col3result = 2265;
      } else if (sorceNumber > 18200 && sorceNumber < 18250) {
        var col3result = 2273;
      } else if (sorceNumber > 18250 && sorceNumber < 18300) {
        var col3result = 2280;
      } else if (sorceNumber > 18300 && sorceNumber < 18350) {
        var col3result = 2288;
      } else if (sorceNumber > 18350 && sorceNumber < 18400) {
        var col3result = 2295;
      } else if (sorceNumber > 18400 && sorceNumber < 18450) {
        var col3result = 2303;
      } else if (sorceNumber > 18450 && sorceNumber < 18500) {
        var col3result = 2310;
      } else if (sorceNumber > 18500 && sorceNumber < 18550) {
        var col3result = 2318;
      } else if (sorceNumber > 18550 && sorceNumber < 18600) {
        var col3result = 2325;
      } else if (sorceNumber > 18600 && sorceNumber < 18650) {
        var col3result = 2333;
      } else if (sorceNumber > 18650 && sorceNumber < 18700) {
        var col3result = 2340;
      } else if (sorceNumber > 18700 && sorceNumber < 18750) {
        var col3result = 2348;
      } else if (sorceNumber > 18750 && sorceNumber < 18800) {
        var col3result = 2355;
      } else if (sorceNumber > 18800 && sorceNumber < 18850) {
        var col3result = 2363;
      } else if (sorceNumber > 18850 && sorceNumber < 18900) {
        var col3result = 2370;
      } else if (sorceNumber > 18900 && sorceNumber < 18950) {
        var col3result = 2378;
      } else if (sorceNumber > 18950 && sorceNumber < 19000) {
        var col3result = 2385;
      } else if (sorceNumber > 19000 && sorceNumber < 19050) {
        var col3result = 2393;
      } else if (sorceNumber > 19050 && sorceNumber < 19100) {
        var col3result = 2400;
      } else if (sorceNumber > 19100 && sorceNumber < 19150) {
        var col3result = 2408;
      } else if (sorceNumber > 19150 && sorceNumber < 19200) {
        var col3result = 2415;
      } else if (sorceNumber > 19200 && sorceNumber < 19250) {
        var col3result = 2423;
      } else if (sorceNumber > 19250 && sorceNumber < 19300) {
        var col3result = 2430;
      } else if (sorceNumber > 19300 && sorceNumber < 19350) {
        var col3result = 2438;
      } else if (sorceNumber > 19350 && sorceNumber < 19400) {
        var col3result = 2445;
      } else if (sorceNumber > 19400 && sorceNumber < 19450) {
        var col3result = 2453;
      } else if (sorceNumber > 19450 && sorceNumber < 19500) {
        var col3result = 2460;
      } else if (sorceNumber > 19500 && sorceNumber < 19550) {
        var col3result = 2468;
      } else if (sorceNumber > 19550 && sorceNumber < 19600) {
        var col3result = 2475;
      } else if (sorceNumber > 19600 && sorceNumber < 19650) {
        var col3result = 2483;
      } else if (sorceNumber > 19650 && sorceNumber < 19700) {
        var col3result = 2490;
      } else if (sorceNumber > 19700 && sorceNumber < 19750) {
        var col3result = 2498;
      } else if (sorceNumber > 19750 && sorceNumber < 19800) {
        var col3result = 2505;
      } else if (sorceNumber > 19800 && sorceNumber < 19850) {
        var col3result = 2513;
      } else if (sorceNumber > 19850 && sorceNumber < 19900) {
        var col3result = 2520;
      } else if (sorceNumber > 19900 && sorceNumber < 19950) {
        var col3result = 2528;
      } else if (sorceNumber > 19950 && sorceNumber < 20000) {
        var col3result = 2535;
      } else if (sorceNumber > 20000 && sorceNumber < 20050) {
        var col3result = 2543;
      } else if (sorceNumber > 20050 && sorceNumber < 20100) {
        var col3result = 2550;
      } else if (sorceNumber > 20100 && sorceNumber < 20150) {
        var col3result = 2558;
      } else if (sorceNumber > 20150 && sorceNumber < 20200) {
        var col3result = 2565;
      } else if (sorceNumber > 20200 && sorceNumber < 20250) {
        var col3result = 2573;
      } else if (sorceNumber > 20250 && sorceNumber < 20300) {
        var col3result = 2580;
      } else if (sorceNumber > 20300 && sorceNumber < 20350) {
        var col3result = 2588;
      } else if (sorceNumber > 20350 && sorceNumber < 20400) {
        var col3result = 2595;
      } else if (sorceNumber > 20400 && sorceNumber < 20450) {
        var col3result = 2603;
      } else if (sorceNumber > 20450 && sorceNumber < 20500) {
        var col3result = 2610;
      } else if (sorceNumber > 20500 && sorceNumber < 20550) {
        var col3result = 2618;
      } else if (sorceNumber > 20550 && sorceNumber < 20600) {
        var col3result = 2625;
      } else if (sorceNumber > 20600 && sorceNumber < 20650) {
        var col3result = 2633;
      } else if (sorceNumber > 20650 && sorceNumber < 20700) {
        var col3result = 2640;
      } else if (sorceNumber > 20700 && sorceNumber < 20750) {
        var col3result = 2648;
      } else if (sorceNumber > 20750 && sorceNumber < 20800) {
        var col3result = 2655;
      } else if (sorceNumber > 20800 && sorceNumber < 20850) {
        var col3result = 2663;
      } else if (sorceNumber > 20850 && sorceNumber < 20900) {
        var col3result = 2670;
      } else if (sorceNumber > 20900 && sorceNumber < 20950) {
        var col3result = 2678;
      } else if (sorceNumber > 20950 && sorceNumber < 21000) {
        var col3result = 2685;
      }
      thirdcols.val(col3result);
      fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
      fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));
      var minNumberThree = $("input[name=number-9-from]").val();
      var maxNumberThree = $("input[name=number-9-to]").val();
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
      var resulrcontent = 'TT pass: ' + generatedPassword + ' <br /> <br /> TT2015(Deluxe + EIC) <br /> Amount: (gift) <br /> <br /> ' +
        fieldFour.val() + '<br />' + col3result + '<br />' +
        fieldSeven.val() + '<br />' + fieldEight.val() + '<br />' + fieldNine.val() + ' - gambling<br />';
      $('.resulblock').html(resulrcontent);
    })
    // halft top block generate
  $('.generator-second').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
      passField.val(generatedPassword);
      var minNumber = $("input[name=random-number-from]").val();
      var maxNumber = $("input[name=random-number-to]").val();
      randomNumberFromRange(minNumber / 2, maxNumber / 2);

      function randomNumberFromRange(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        fieldThree.val(randomNumber * 2);
      }
      var resulcontenta = 'TT pass: ' + generatedPassword + ' <br /> <br /> TT2015(Deluxe + EIC) <br /> Amount: (gift) <br /> <br /> ';
      $('.resulblock').html(resulcontenta);
    })
    // half bottom block generate
  $('.generator-third').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);
      var minNumberTwo = $("input[name=random-number-2-from]").val();
      var maxNumberTwo = $("input[name=random-number-2-to]").val();
      randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);

      function randomNumberFromRangeTwo(min, max) {
        var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
        fieldFour.val(randomNumberTwo * 2);
      }
      var fieldFivePercent = fieldFive.val(),
        fieldFourVal = fieldFour.val();
      fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
      var sorceNumber = $('#random-number-2').val();
      if (sorceNumber > 8000 && sorceNumber < 8050) {
        var col3result = 803;
      } else if (sorceNumber > 8050 && sorceNumber < 8100) {
        var col3result = 808;
      } else if (sorceNumber > 8100 && sorceNumber < 8150) {
        var col3result = 813;
      } else if (sorceNumber > 8150 && sorceNumber < 8200) {
        var col3result = 818;
      } else if (sorceNumber > 8200 && sorceNumber < 8250) {
        var col3result = 823;
      } else if (sorceNumber > 8250 && sorceNumber < 8300) {
        var col3result = 828;
      } else if (sorceNumber > 8300 && sorceNumber < 8350) {
        var col3result = 833;
      } else if (sorceNumber > 8350 && sorceNumber < 8400) {
        var col3result = 838;
      } else if (sorceNumber > 8400 && sorceNumber < 8450) {
        var col3result = 843;
      } else if (sorceNumber > 8450 && sorceNumber < 8500) {
        var col3result = 848;
      } else if (sorceNumber > 8500 && sorceNumber < 8550) {
        var col3result = 853;
      } else if (sorceNumber > 8550 && sorceNumber < 8600) {
        var col3result = 858;
      } else if (sorceNumber > 8600 && sorceNumber < 8650) {
        var col3result = 863;
      } else if (sorceNumber > 8650 && sorceNumber < 8700) {
        var col3result = 868;
      } else if (sorceNumber > 8700 && sorceNumber < 8750) {
        var col3result = 873;
      } else if (sorceNumber > 8750 && sorceNumber < 8800) {
        var col3result = 878;
      } else if (sorceNumber > 8800 && sorceNumber < 8850) {
        var col3result = 883;
      } else if (sorceNumber > 8850 && sorceNumber < 8900) {
        var col3result = 888;
      } else if (sorceNumber > 8900 && sorceNumber < 8950) {
        var col3result = 893;
      } else if (sorceNumber > 8950 && sorceNumber < 9000) {
        var col3result = 898;
      } else if (sorceNumber > 9000 && sorceNumber < 9050) {
        var col3result = 903;
      } else if (sorceNumber > 9050 && sorceNumber < 9100) {
        var col3result = 908;
      } else if (sorceNumber > 9100 && sorceNumber < 9150) {
        var col3result = 913;
      } else if (sorceNumber > 9150 && sorceNumber < 9200) {
        var col3result = 918;
      } else if (sorceNumber > 9200 && sorceNumber < 9250) {
        var col3result = 923;
      } else if (sorceNumber > 9250 && sorceNumber < 9300) {
        var col3result = 930;
      } else if (sorceNumber > 9300 && sorceNumber < 9350) {
        var col3result = 938;
      } else if (sorceNumber > 9350 && sorceNumber < 9400) {
        var col3result = 945;
      } else if (sorceNumber > 9400 && sorceNumber < 9450) {
        var col3result = 953;
      } else if (sorceNumber > 9450 && sorceNumber < 9500) {
        var col3result = 960;
      } else if (sorceNumber > 9500 && sorceNumber < 9550) {
        var col3result = 968;
      } else if (sorceNumber > 9550 && sorceNumber < 9600) {
        var col3result = 975;
      } else if (sorceNumber > 9600 && sorceNumber < 9650) {
        var col3result = 983;
      } else if (sorceNumber > 9650 && sorceNumber < 9700) {
        var col3result = 990;
      } else if (sorceNumber > 9700 && sorceNumber < 9750) {
        var col3result = 998;
      } else if (sorceNumber > 9750 && sorceNumber < 9800) {
        var col3result = 1005;
      } else if (sorceNumber > 9800 && sorceNumber < 9850) {
        var col3result = 1013;
      } else if (sorceNumber > 9850 && sorceNumber < 9900) {
        var col3result = 1020;
      } else if (sorceNumber > 9900 && sorceNumber < 9950) {
        var col3result = 1028;
      } else if (sorceNumber > 9950 && sorceNumber < 10000) {
        var col3result = 1035;
      } else if (sorceNumber > 10000 && sorceNumber < 10050) {
        var col3result = 1043;
      } else if (sorceNumber > 10050 && sorceNumber < 10100) {
        var col3result = 1050;
      } else if (sorceNumber > 10100 && sorceNumber < 10150) {
        var col3result = 1058;
      } else if (sorceNumber > 10150 && sorceNumber < 10200) {
        var col3result = 1065;
      } else if (sorceNumber > 10200 && sorceNumber < 10250) {
        var col3result = 1073;
      } else if (sorceNumber > 10250 && sorceNumber < 10300) {
        var col3result = 1080;
      } else if (sorceNumber > 10300 && sorceNumber < 10350) {
        var col3result = 1088;
      } else if (sorceNumber > 10350 && sorceNumber < 10400) {
        var col3result = 1095;
      } else if (sorceNumber > 10400 && sorceNumber < 10450) {
        var col3result = 1103;
      } else if (sorceNumber > 10450 && sorceNumber < 10500) {
        var col3result = 1110;
      } else if (sorceNumber > 10500 && sorceNumber < 10550) {
        var col3result = 1118;
      } else if (sorceNumber > 10550 && sorceNumber < 10600) {
        var col3result = 1125;
      } else if (sorceNumber > 10600 && sorceNumber < 10650) {
        var col3result = 1133;
      } else if (sorceNumber > 10650 && sorceNumber < 10700) {
        var col3result = 1140;
      } else if (sorceNumber > 10700 && sorceNumber < 10750) {
        var col3result = 1148;
      } else if (sorceNumber > 10750 && sorceNumber < 10800) {
        var col3result = 1155;
      } else if (sorceNumber > 10800 && sorceNumber < 10850) {
        var col3result = 1163;
      } else if (sorceNumber > 10850 && sorceNumber < 10900) {
        var col3result = 1170;
      } else if (sorceNumber > 10900 && sorceNumber < 10950) {
        var col3result = 1178;
      } else if (sorceNumber > 10950 && sorceNumber < 11000) {
        var col3result = 1185;
      } else if (sorceNumber > 11000 && sorceNumber < 11050) {
        var col3result = 1193;
      } else if (sorceNumber > 11050 && sorceNumber < 11100) {
        var col3result = 1200;
      } else if (sorceNumber > 11100 && sorceNumber < 11150) {
        var col3result = 1208;
      } else if (sorceNumber > 11150 && sorceNumber < 11200) {
        var col3result = 1215;
      } else if (sorceNumber > 11200 && sorceNumber < 11250) {
        var col3result = 1223;
      } else if (sorceNumber > 11250 && sorceNumber < 11300) {
        var col3result = 1230;
      } else if (sorceNumber > 11300 && sorceNumber < 11350) {
        var col3result = 1238;
      } else if (sorceNumber > 11350 && sorceNumber < 11400) {
        var col3result = 1245;
      } else if (sorceNumber > 11400 && sorceNumber < 11450) {
        var col3result = 1253;
      } else if (sorceNumber > 11450 && sorceNumber < 11500) {
        var col3result = 1260;
      } else if (sorceNumber > 11500 && sorceNumber < 11550) {
        var col3result = 1268;
      } else if (sorceNumber > 11550 && sorceNumber < 11600) {
        var col3result = 1275;
      } else if (sorceNumber > 11600 && sorceNumber < 11650) {
        var col3result = 1283;
      } else if (sorceNumber > 11650 && sorceNumber < 11700) {
        var col3result = 1290;
      } else if (sorceNumber > 11700 && sorceNumber < 11750) {
        var col3result = 1298;
      } else if (sorceNumber > 11750 && sorceNumber < 11800) {
        var col3result = 1305;
      } else if (sorceNumber > 11800 && sorceNumber < 11850) {
        var col3result = 1313;
      } else if (sorceNumber > 11850 && sorceNumber < 11900) {
        var col3result = 1320;
      } else if (sorceNumber > 11900 && sorceNumber < 11950) {
        var col3result = 1328;
      } else if (sorceNumber > 11950 && sorceNumber < 12000) {
        var col3result = 1335;
      } else if (sorceNumber > 12000 && sorceNumber < 12050) {
        var col3result = 1343;
      } else if (sorceNumber > 12050 && sorceNumber < 12100) {
        var col3result = 1350;
      } else if (sorceNumber > 12100 && sorceNumber < 12150) {
        var col3result = 1358;
      } else if (sorceNumber > 12150 && sorceNumber < 12200) {
        var col3result = 1365;
      } else if (sorceNumber > 12200 && sorceNumber < 12250) {
        var col3result = 1373;
      } else if (sorceNumber > 12250 && sorceNumber < 12300) {
        var col3result = 1380;
      } else if (sorceNumber > 12300 && sorceNumber < 12350) {
        var col3result = 1388;
      } else if (sorceNumber > 12350 && sorceNumber < 12400) {
        var col3result = 1395;
      } else if (sorceNumber > 12400 && sorceNumber < 12450) {
        var col3result = 1403;
      } else if (sorceNumber > 12450 && sorceNumber < 12500) {
        var col3result = 1410;
      } else if (sorceNumber > 12500 && sorceNumber < 12550) {
        var col3result = 1418;
      } else if (sorceNumber > 12550 && sorceNumber < 12600) {
        var col3result = 1425;
      } else if (sorceNumber > 12600 && sorceNumber < 12650) {
        var col3result = 1433;
      } else if (sorceNumber > 12650 && sorceNumber < 12700) {
        var col3result = 1440;
      } else if (sorceNumber > 12700 && sorceNumber < 12750) {
        var col3result = 1448;
      } else if (sorceNumber > 12750 && sorceNumber < 12800) {
        var col3result = 1455;
      } else if (sorceNumber > 12800 && sorceNumber < 12850) {
        var col3result = 1463;
      } else if (sorceNumber > 12850 && sorceNumber < 12900) {
        var col3result = 1470;
      } else if (sorceNumber > 12900 && sorceNumber < 12950) {
        var col3result = 1478;
      } else if (sorceNumber > 12950 && sorceNumber < 13000) {
        var col3result = 1485;
      } else if (sorceNumber > 13000 && sorceNumber < 13050) {
        var col3result = 1493;
      } else if (sorceNumber > 13050 && sorceNumber < 13100) {
        var col3result = 1500;
      } else if (sorceNumber > 13100 && sorceNumber < 13150) {
        var col3result = 1508;
      } else if (sorceNumber > 13150 && sorceNumber < 13200) {
        var col3result = 1515;
      } else if (sorceNumber > 13200 && sorceNumber < 13250) {
        var col3result = 1523;
      } else if (sorceNumber > 13250 && sorceNumber < 13300) {
        var col3result = 1530;
      } else if (sorceNumber > 13300 && sorceNumber < 13350) {
        var col3result = 1538;
      } else if (sorceNumber > 13350 && sorceNumber < 13400) {
        var col3result = 1545;
      } else if (sorceNumber > 13400 && sorceNumber < 13450) {
        var col3result = 1553;
      } else if (sorceNumber > 13450 && sorceNumber < 13500) {
        var col3result = 1560;
      } else if (sorceNumber > 13500 && sorceNumber < 13550) {
        var col3result = 1568;
      } else if (sorceNumber > 13550 && sorceNumber < 13600) {
        var col3result = 1575;
      } else if (sorceNumber > 13600 && sorceNumber < 13650) {
        var col3result = 1583;
      } else if (sorceNumber > 13650 && sorceNumber < 13700) {
        var col3result = 1590;
      } else if (sorceNumber > 13700 && sorceNumber < 13750) {
        var col3result = 1598;
      } else if (sorceNumber > 13750 && sorceNumber < 13800) {
        var col3result = 1605;
      } else if (sorceNumber > 13800 && sorceNumber < 13850) {
        var col3result = 1613;
      } else if (sorceNumber > 13850 && sorceNumber < 13900) {
        var col3result = 1620;
      } else if (sorceNumber > 13900 && sorceNumber < 13950) {
        var col3result = 1628;
      } else if (sorceNumber > 13950 && sorceNumber < 14000) {
        var col3result = 1635;
      } else if (sorceNumber > 14000 && sorceNumber < 14050) {
        var col3result = 1643;
      } else if (sorceNumber > 14050 && sorceNumber < 14100) {
        var col3result = 1650;
      } else if (sorceNumber > 14100 && sorceNumber < 14150) {
        var col3result = 1658;
      } else if (sorceNumber > 14150 && sorceNumber < 14200) {
        var col3result = 1665;
      } else if (sorceNumber > 14200 && sorceNumber < 14250) {
        var col3result = 1673;
      } else if (sorceNumber > 14250 && sorceNumber < 14300) {
        var col3result = 1680;
      } else if (sorceNumber > 14300 && sorceNumber < 14350) {
        var col3result = 1688;
      } else if (sorceNumber > 14350 && sorceNumber < 14400) {
        var col3result = 1695;
      } else if (sorceNumber > 14400 && sorceNumber < 14450) {
        var col3result = 1703;
      } else if (sorceNumber > 14450 && sorceNumber < 14500) {
        var col3result = 1710;
      } else if (sorceNumber > 14500 && sorceNumber < 14550) {
        var col3result = 1718;
      } else if (sorceNumber > 14550 && sorceNumber < 14600) {
        var col3result = 1725;
      } else if (sorceNumber > 14600 && sorceNumber < 14650) {
        var col3result = 1733;
      } else if (sorceNumber > 14650 && sorceNumber < 14700) {
        var col3result = 1740;
      } else if (sorceNumber > 14700 && sorceNumber < 14750) {
        var col3result = 1748;
      } else if (sorceNumber > 14750 && sorceNumber < 14800) {
        var col3result = 1755;
      } else if (sorceNumber > 14800 && sorceNumber < 14850) {
        var col3result = 1763;
      } else if (sorceNumber > 14850 && sorceNumber < 14900) {
        var col3result = 1770;
      } else if (sorceNumber > 14900 && sorceNumber < 14950) {
        var col3result = 1778;
      } else if (sorceNumber > 14950 && sorceNumber < 15000) {
        var col3result = 1785;
      } else if (sorceNumber > 15000 && sorceNumber < 15050) {
        var col3result = 1793;
      } else if (sorceNumber > 15050 && sorceNumber < 15100) {
        var col3result = 1800;
      } else if (sorceNumber > 15100 && sorceNumber < 15150) {
        var col3result = 1808;
      } else if (sorceNumber > 15150 && sorceNumber < 15200) {
        var col3result = 1815;
      } else if (sorceNumber > 15200 && sorceNumber < 15250) {
        var col3result = 1823;
      } else if (sorceNumber > 15250 && sorceNumber < 15300) {
        var col3result = 1830;
      } else if (sorceNumber > 15300 && sorceNumber < 15350) {
        var col3result = 1838;
      } else if (sorceNumber > 15350 && sorceNumber < 15400) {
        var col3result = 1845;
      } else if (sorceNumber > 15400 && sorceNumber < 15450) {
        var col3result = 1853;
      } else if (sorceNumber > 15450 && sorceNumber < 15500) {
        var col3result = 1860;
      } else if (sorceNumber > 15500 && sorceNumber < 15550) {
        var col3result = 1868;
      } else if (sorceNumber > 15550 && sorceNumber < 15600) {
        var col3result = 1875;
      } else if (sorceNumber > 15600 && sorceNumber < 15650) {
        var col3result = 1883;
      } else if (sorceNumber > 15650 && sorceNumber < 15700) {
        var col3result = 1890;
      } else if (sorceNumber > 15700 && sorceNumber < 15750) {
        var col3result = 1898;
      } else if (sorceNumber > 15750 && sorceNumber < 15800) {
        var col3result = 1905;
      } else if (sorceNumber > 15800 && sorceNumber < 15850) {
        var col3result = 1913;
      } else if (sorceNumber > 15850 && sorceNumber < 15900) {
        var col3result = 1920;
      } else if (sorceNumber > 15900 && sorceNumber < 15950) {
        var col3result = 1928;
      } else if (sorceNumber > 15950 && sorceNumber < 16000) {
        var col3result = 1935;
      } else if (sorceNumber > 16000 && sorceNumber < 16050) {
        var col3result = 1943;
      } else if (sorceNumber > 16050 && sorceNumber < 16100) {
        var col3result = 1950;
      } else if (sorceNumber > 16100 && sorceNumber < 16150) {
        var col3result = 1958;
      } else if (sorceNumber > 16150 && sorceNumber < 16200) {
        var col3result = 1965;
      } else if (sorceNumber > 16200 && sorceNumber < 16250) {
        var col3result = 1973;
      } else if (sorceNumber > 16250 && sorceNumber < 16300) {
        var col3result = 1980;
      } else if (sorceNumber > 16300 && sorceNumber < 16350) {
        var col3result = 1988;
      } else if (sorceNumber > 16350 && sorceNumber < 16400) {
        var col3result = 1995;
      } else if (sorceNumber > 16400 && sorceNumber < 16450) {
        var col3result = 2003;
      } else if (sorceNumber > 16450 && sorceNumber < 16500) {
        var col3result = 2010;
      } else if (sorceNumber > 16500 && sorceNumber < 16550) {
        var col3result = 2018;
      } else if (sorceNumber > 16550 && sorceNumber < 16600) {
        var col3result = 2025;
      } else if (sorceNumber > 16600 && sorceNumber < 16650) {
        var col3result = 2033;
      } else if (sorceNumber > 16650 && sorceNumber < 16700) {
        var col3result = 2040;
      } else if (sorceNumber > 16700 && sorceNumber < 16750) {
        var col3result = 2048;
      } else if (sorceNumber > 16750 && sorceNumber < 16800) {
        var col3result = 2055;
      } else if (sorceNumber > 16800 && sorceNumber < 16850) {
        var col3result = 2063;
      } else if (sorceNumber > 16850 && sorceNumber < 16900) {
        var col3result = 2070;
      } else if (sorceNumber > 16900 && sorceNumber < 16950) {
        var col3result = 2078;
      } else if (sorceNumber > 16950 && sorceNumber < 17000) {
        var col3result = 2085;
      } else if (sorceNumber > 17000 && sorceNumber < 17050) {
        var col3result = 2093;
      } else if (sorceNumber > 17050 && sorceNumber < 17100) {
        var col3result = 2100;
      } else if (sorceNumber > 17100 && sorceNumber < 17150) {
        var col3result = 2108;
      } else if (sorceNumber > 17150 && sorceNumber < 17200) {
        var col3result = 2115;
      } else if (sorceNumber > 17200 && sorceNumber < 17250) {
        var col3result = 2123;
      } else if (sorceNumber > 17250 && sorceNumber < 17300) {
        var col3result = 2130;
      } else if (sorceNumber > 17300 && sorceNumber < 17350) {
        var col3result = 2138;
      } else if (sorceNumber > 17350 && sorceNumber < 17400) {
        var col3result = 2145;
      } else if (sorceNumber > 17400 && sorceNumber < 17450) {
        var col3result = 2153;
      } else if (sorceNumber > 17450 && sorceNumber < 17500) {
        var col3result = 2160;
      } else if (sorceNumber > 17500 && sorceNumber < 17550) {
        var col3result = 2168;
      } else if (sorceNumber > 17550 && sorceNumber < 17600) {
        var col3result = 2175;
      } else if (sorceNumber > 17600 && sorceNumber < 17650) {
        var col3result = 2183;
      } else if (sorceNumber > 17650 && sorceNumber < 17700) {
        var col3result = 2190;
      } else if (sorceNumber > 17700 && sorceNumber < 17750) {
        var col3result = 2198;
      } else if (sorceNumber > 17750 && sorceNumber < 17800) {
        var col3result = 2205;
      } else if (sorceNumber > 17800 && sorceNumber < 17850) {
        var col3result = 2213;
      } else if (sorceNumber > 17850 && sorceNumber < 17900) {
        var col3result = 2220;
      } else if (sorceNumber > 17900 && sorceNumber < 17950) {
        var col3result = 2228;
      } else if (sorceNumber > 17950 && sorceNumber < 18000) {
        var col3result = 2235;
      } else if (sorceNumber > 18000 && sorceNumber < 18050) {
        var col3result = 2243;
      } else if (sorceNumber > 18050 && sorceNumber < 18100) {
        var col3result = 2250;
      } else if (sorceNumber > 18100 && sorceNumber < 18150) {
        var col3result = 2258;
      } else if (sorceNumber > 18150 && sorceNumber < 18200) {
        var col3result = 2265;
      } else if (sorceNumber > 18200 && sorceNumber < 18250) {
        var col3result = 2273;
      } else if (sorceNumber > 18250 && sorceNumber < 18300) {
        var col3result = 2280;
      } else if (sorceNumber > 18300 && sorceNumber < 18350) {
        var col3result = 2288;
      } else if (sorceNumber > 18350 && sorceNumber < 18400) {
        var col3result = 2295;
      } else if (sorceNumber > 18400 && sorceNumber < 18450) {
        var col3result = 2303;
      } else if (sorceNumber > 18450 && sorceNumber < 18500) {
        var col3result = 2310;
      } else if (sorceNumber > 18500 && sorceNumber < 18550) {
        var col3result = 2318;
      } else if (sorceNumber > 18550 && sorceNumber < 18600) {
        var col3result = 2325;
      } else if (sorceNumber > 18600 && sorceNumber < 18650) {
        var col3result = 2333;
      } else if (sorceNumber > 18650 && sorceNumber < 18700) {
        var col3result = 2340;
      } else if (sorceNumber > 18700 && sorceNumber < 18750) {
        var col3result = 2348;
      } else if (sorceNumber > 18750 && sorceNumber < 18800) {
        var col3result = 2355;
      } else if (sorceNumber > 18800 && sorceNumber < 18850) {
        var col3result = 2363;
      } else if (sorceNumber > 18850 && sorceNumber < 18900) {
        var col3result = 2370;
      } else if (sorceNumber > 18900 && sorceNumber < 18950) {
        var col3result = 2378;
      } else if (sorceNumber > 18950 && sorceNumber < 19000) {
        var col3result = 2385;
      } else if (sorceNumber > 19000 && sorceNumber < 19050) {
        var col3result = 2393;
      } else if (sorceNumber > 19050 && sorceNumber < 19100) {
        var col3result = 2400;
      } else if (sorceNumber > 19100 && sorceNumber < 19150) {
        var col3result = 2408;
      } else if (sorceNumber > 19150 && sorceNumber < 19200) {
        var col3result = 2415;
      } else if (sorceNumber > 19200 && sorceNumber < 19250) {
        var col3result = 2423;
      } else if (sorceNumber > 19250 && sorceNumber < 19300) {
        var col3result = 2430;
      } else if (sorceNumber > 19300 && sorceNumber < 19350) {
        var col3result = 2438;
      } else if (sorceNumber > 19350 && sorceNumber < 19400) {
        var col3result = 2445;
      } else if (sorceNumber > 19400 && sorceNumber < 19450) {
        var col3result = 2453;
      } else if (sorceNumber > 19450 && sorceNumber < 19500) {
        var col3result = 2460;
      } else if (sorceNumber > 19500 && sorceNumber < 19550) {
        var col3result = 2468;
      } else if (sorceNumber > 19550 && sorceNumber < 19600) {
        var col3result = 2475;
      } else if (sorceNumber > 19600 && sorceNumber < 19650) {
        var col3result = 2483;
      } else if (sorceNumber > 19650 && sorceNumber < 19700) {
        var col3result = 2490;
      } else if (sorceNumber > 19700 && sorceNumber < 19750) {
        var col3result = 2498;
      } else if (sorceNumber > 19750 && sorceNumber < 19800) {
        var col3result = 2505;
      } else if (sorceNumber > 19800 && sorceNumber < 19850) {
        var col3result = 2513;
      } else if (sorceNumber > 19850 && sorceNumber < 19900) {
        var col3result = 2520;
      } else if (sorceNumber > 19900 && sorceNumber < 19950) {
        var col3result = 2528;
      } else if (sorceNumber > 19950 && sorceNumber < 20000) {
        var col3result = 2535;
      } else if (sorceNumber > 20000 && sorceNumber < 20050) {
        var col3result = 2543;
      } else if (sorceNumber > 20050 && sorceNumber < 20100) {
        var col3result = 2550;
      } else if (sorceNumber > 20100 && sorceNumber < 20150) {
        var col3result = 2558;
      } else if (sorceNumber > 20150 && sorceNumber < 20200) {
        var col3result = 2565;
      } else if (sorceNumber > 20200 && sorceNumber < 20250) {
        var col3result = 2573;
      } else if (sorceNumber > 20250 && sorceNumber < 20300) {
        var col3result = 2580;
      } else if (sorceNumber > 20300 && sorceNumber < 20350) {
        var col3result = 2588;
      } else if (sorceNumber > 20350 && sorceNumber < 20400) {
        var col3result = 2595;
      } else if (sorceNumber > 20400 && sorceNumber < 20450) {
        var col3result = 2603;
      } else if (sorceNumber > 20450 && sorceNumber < 20500) {
        var col3result = 2610;
      } else if (sorceNumber > 20500 && sorceNumber < 20550) {
        var col3result = 2618;
      } else if (sorceNumber > 20550 && sorceNumber < 20600) {
        var col3result = 2625;
      } else if (sorceNumber > 20600 && sorceNumber < 20650) {
        var col3result = 2633;
      } else if (sorceNumber > 20650 && sorceNumber < 20700) {
        var col3result = 2640;
      } else if (sorceNumber > 20700 && sorceNumber < 20750) {
        var col3result = 2648;
      } else if (sorceNumber > 20750 && sorceNumber < 20800) {
        var col3result = 2655;
      } else if (sorceNumber > 20800 && sorceNumber < 20850) {
        var col3result = 2663;
      } else if (sorceNumber > 20850 && sorceNumber < 20900) {
        var col3result = 2670;
      } else if (sorceNumber > 20900 && sorceNumber < 20950) {
        var col3result = 2678;
      } else if (sorceNumber > 20950 && sorceNumber < 21000) {
        var col3result = 2685;
      }
      thirdcols.val(col3result);
      fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
      fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));
      var minNumberThree = $("input[name=number-9-from]").val();
      var maxNumberThree = $("input[name=number-9-to]").val();
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
        fieldFour.val() + '<br />' + col3result + '<br />' +
        // fieldSix.val() + '<br />' +
        fieldSeven.val() + '<br />' + fieldEight.val() + '<br />' + fieldNine.val() + ' - gambling<br />'
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
    if (randMnth < 10) {
      randMnth = '0' + randMnth;
    }
    return randMnth;
  }
  $('.state-or').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'OR<br />';
    secHtml += '3' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ca').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'CA<br />';
    secHtml += 'B2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-il').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'IL<br />';
    secHtml += 'D40' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-al').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AL<br />';
    secHtml += '8' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ny').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'NY<br />';
    secHtml += '4' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-tx').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'TX<br />';
    secHtml += '1' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-id').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'ID<br />';
    secHtml += 'A2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ga').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'GA<br />';
    secHtml += '1' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-fl').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'FL<br />';
    secHtml += 'L2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '0' + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-az').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AZ<br />';
    secHtml += 'D5' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ar').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AR<br />';
    secHtml += '9' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ak').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AK<br />';
    secHtml += '5' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.secret').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
    var secHtml = '';
    secHtml += 'HR pass: ' + generatedPassword + '<br/>' + 'Q1: ' + '<span class="text-1"></span>' + '<br/>' + 'Q2: ' + '<span class="text-2"></span>' + '<br/>' + 'Q3: ' + '<span class="text-3"></span>' + '<br/>';
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
