$(document).ready(function(){function e(e){var a=e[Math.floor(Math.random()*e.length)];return a}function a(e){for(var a="",r=0;2>r;r++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function r(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);return r}function t(){var e=Math.floor(12*Math.random()+1);return 10>e&&(e="0"+e),e}var l=["!","@","#","$","%","&","*"],i="23456789",n="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s="abcdefghijklmnopqrstuvwxyz",v=$("#pass"),o=$("#random-number"),f=$("#random-number-2"),c=$("#thirdcols"),u=$("#number-5"),b=$("#number-6"),m=$("#number-7"),d=$("#number-8"),h=$("#number-9"),p=$("#number-10"),C=($("#result"),$("#occupation")),M=["Cook","Copywriter","Car Mechanic","Civil Engineer","Credit analyst","Consultant","Cleaner","Clerk","Driver","Economist","Electrical Engineer","Finance Broker","Finance Manager","Janitor","Manager","File Clerk","Office Clerk","Stock clerk","Assistant","Project engineer","Radio Mechanics","Sales Manager","Sales Promoter","Administrator","Systems Analyst","Web Designer","Auditing clerk","Bus driver","Cashier","Fitness Trainer","Secretary","Web Developer","Marketing Manager","Accountant","Mechanical Engineer","IT Manager","Logistician","Insurance Agent","HR Specialist","Receptionist","Auto Mechanic","Security Guard","Guard","Financial Analyst"];minNumberFour=164,maxNumberFour=212,$(".generator-first").on("click",function(r){function t(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);o.val(2*r)}function k(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);f.val(2*r)}function g(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);h.val(2*r)}function x(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);p.val(2*r)}r.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active"),$("body").addClass("mylittleponys");var D=e(l)+a(i)+a(n)+a(s)+e(l);v.val(D);var y=$("input[name=random-number-from]").val(),A=$("input[name=random-number-to]").val();t(y/2,A/2),C.val(M[Math.floor(Math.random()*M.length)]);var T=$("input[name=random-number-2-from]").val(),F=$("input[name=random-number-2-to]").val();k(T/2,F/2);var E=u.val(),N=f.val();b.val(Math.round(N/100*E));var S=$("#random-number-2").val();if(S>8e3&&8050>S)var Z=803;else if(S>8050&&8100>S)var Z=808;else if(S>8100&&8150>S)var Z=813;else if(S>8150&&8200>S)var Z=818;else if(S>8200&&8250>S)var Z=823;else if(S>8250&&8300>S)var Z=828;else if(S>8300&&8350>S)var Z=833;else if(S>8350&&8400>S)var Z=838;else if(S>8400&&8450>S)var Z=843;else if(S>8450&&8500>S)var Z=848;else if(S>8500&&8550>S)var Z=853;else if(S>8550&&8600>S)var Z=858;else if(S>8600&&8650>S)var Z=863;else if(S>8650&&8700>S)var Z=868;else if(S>8700&&8750>S)var Z=873;else if(S>8750&&8800>S)var Z=878;else if(S>8800&&8850>S)var Z=883;else if(S>8850&&8900>S)var Z=888;else if(S>8900&&8950>S)var Z=893;else if(S>8950&&9e3>S)var Z=898;else if(S>9e3&&9050>S)var Z=903;else if(S>9050&&9100>S)var Z=908;else if(S>9100&&9150>S)var Z=913;else if(S>9150&&9200>S)var Z=918;else if(S>9200&&9250>S)var Z=923;else if(S>9250&&9300>S)var Z=930;else if(S>9300&&9350>S)var Z=938;else if(S>9350&&9400>S)var Z=945;else if(S>9400&&9450>S)var Z=953;else if(S>9450&&9500>S)var Z=960;else if(S>9500&&9550>S)var Z=968;else if(S>9550&&9600>S)var Z=975;else if(S>9600&&9650>S)var Z=983;else if(S>9650&&9700>S)var Z=990;else if(S>9700&&9750>S)var Z=998;else if(S>9750&&9800>S)var Z=1005;else if(S>9800&&9850>S)var Z=1013;else if(S>9850&&9900>S)var Z=1020;else if(S>9900&&9950>S)var Z=1028;else if(S>9950&&1e4>S)var Z=1035;else if(S>1e4&&10050>S)var Z=1043;else if(S>10050&&10100>S)var Z=1050;else if(S>10100&&10150>S)var Z=1058;else if(S>10150&&10200>S)var Z=1065;else if(S>10200&&10250>S)var Z=1073;else if(S>10250&&10300>S)var Z=1080;else if(S>10300&&10350>S)var Z=1088;else if(S>10350&&10400>S)var Z=1095;else if(S>10400&&10450>S)var Z=1103;else if(S>10450&&10500>S)var Z=1110;else if(S>10500&&10550>S)var Z=1118;else if(S>10550&&10600>S)var Z=1125;else if(S>10600&&10650>S)var Z=1133;else if(S>10650&&10700>S)var Z=1140;else if(S>10700&&10750>S)var Z=1148;else if(S>10750&&10800>S)var Z=1155;else if(S>10800&&10850>S)var Z=1163;else if(S>10850&&10900>S)var Z=1170;else if(S>10900&&10950>S)var Z=1178;else if(S>10950&&11e3>S)var Z=1185;else if(S>11e3&&11050>S)var Z=1193;else if(S>11050&&11100>S)var Z=1200;else if(S>11100&&11150>S)var Z=1208;else if(S>11150&&11200>S)var Z=1215;else if(S>11200&&11250>S)var Z=1223;else if(S>11250&&11300>S)var Z=1230;else if(S>11300&&11350>S)var Z=1238;else if(S>11350&&11400>S)var Z=1245;else if(S>11400&&11450>S)var Z=1253;else if(S>11450&&11500>S)var Z=1260;else if(S>11500&&11550>S)var Z=1268;else if(S>11550&&11600>S)var Z=1275;else if(S>11600&&11650>S)var Z=1283;else if(S>11650&&11700>S)var Z=1290;else if(S>11700&&11750>S)var Z=1298;else if(S>11750&&11800>S)var Z=1305;else if(S>11800&&11850>S)var Z=1313;else if(S>11850&&11900>S)var Z=1320;else if(S>11900&&11950>S)var Z=1328;else if(S>11950&&12e3>S)var Z=1335;c.val(Z),m.val(Math.round(N/100*6.2)),d.val(Math.round(N/100*1.45));var I=$("input[name=number-9-from]").val(),R=$("input[name=number-9-to]").val();g(I/2,R/2),x(minNumberFour/2,maxNumberFour/2),$(".resulblock").html("\n      TT pass: "+D+"<br /><br />\n      TT2015 (Deluxe+EIC)<br />\n      Amount: (gift )<br /><br />"+f.val()+"<br />"+b.val()+"<br />"+m.val()+"<br />"+d.val()+"<br />"+h.val()+" - gambling<br />")}),$(".generator-second").on("click",function(r){function t(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);o.val(2*r)}r.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var f=e(l)+a(i)+a(n)+a(s)+e(l);v.val(f);var c=$("input[name=random-number-from]").val(),u=$("input[name=random-number-to]").val();t(c/2,u/2),$(".resulblock").html("\n      TT pass: "+f+"<br /><br />\n      TT2015 (Deluxe+EIC)<br />\n      Amount: (gift )<br /><br />")}),$(".generator-third").on("click",function(e){function a(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);f.val(2*r)}function r(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);h.val(2*r)}function t(e,a){var r=Math.floor(Math.random()*(a-e+1)+e);p.val(2*r)}e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active"),C.val(M[Math.floor(Math.random()*M.length)]);var l=$("input[name=random-number-2-from]").val(),i=$("input[name=random-number-2-to]").val();a(l/2,i/2);var n=u.val(),s=f.val();b.val(Math.round(s/100*n));var v=$("#random-number-2").val();if(v>8e3&&8050>v)var o=803;else if(v>8050&&8100>v)var o=808;else if(v>8100&&8150>v)var o=813;else if(v>8150&&8200>v)var o=818;else if(v>8200&&8250>v)var o=823;else if(v>8250&&8300>v)var o=828;else if(v>8300&&8350>v)var o=833;else if(v>8350&&8400>v)var o=838;else if(v>8400&&8450>v)var o=843;else if(v>8450&&8500>v)var o=848;else if(v>8500&&8550>v)var o=853;else if(v>8550&&8600>v)var o=858;else if(v>8600&&8650>v)var o=863;else if(v>8650&&8700>v)var o=868;else if(v>8700&&8750>v)var o=873;else if(v>8750&&8800>v)var o=878;else if(v>8800&&8850>v)var o=883;else if(v>8850&&8900>v)var o=888;else if(v>8900&&8950>v)var o=893;else if(v>8950&&9e3>v)var o=898;else if(v>9e3&&9050>v)var o=903;else if(v>9050&&9100>v)var o=908;else if(v>9100&&9150>v)var o=913;else if(v>9150&&9200>v)var o=918;else if(v>9200&&9250>v)var o=923;else if(v>9250&&9300>v)var o=930;else if(v>9300&&9350>v)var o=938;else if(v>9350&&9400>v)var o=945;else if(v>9400&&9450>v)var o=953;else if(v>9450&&9500>v)var o=960;else if(v>9500&&9550>v)var o=968;else if(v>9550&&9600>v)var o=975;else if(v>9600&&9650>v)var o=983;else if(v>9650&&9700>v)var o=990;else if(v>9700&&9750>v)var o=998;else if(v>9750&&9800>v)var o=1005;else if(v>9800&&9850>v)var o=1013;else if(v>9850&&9900>v)var o=1020;else if(v>9900&&9950>v)var o=1028;else if(v>9950&&1e4>v)var o=1035;else if(v>1e4&&10050>v)var o=1043;else if(v>10050&&10100>v)var o=1050;else if(v>10100&&10150>v)var o=1058;else if(v>10150&&10200>v)var o=1065;else if(v>10200&&10250>v)var o=1073;else if(v>10250&&10300>v)var o=1080;else if(v>10300&&10350>v)var o=1088;else if(v>10350&&10400>v)var o=1095;else if(v>10400&&10450>v)var o=1103;else if(v>10450&&10500>v)var o=1110;else if(v>10500&&10550>v)var o=1118;else if(v>10550&&10600>v)var o=1125;else if(v>10600&&10650>v)var o=1133;else if(v>10650&&10700>v)var o=1140;else if(v>10700&&10750>v)var o=1148;else if(v>10750&&10800>v)var o=1155;else if(v>10800&&10850>v)var o=1163;else if(v>10850&&10900>v)var o=1170;else if(v>10900&&10950>v)var o=1178;else if(v>10950&&11e3>v)var o=1185;else if(v>11e3&&11050>v)var o=1193;else if(v>11050&&11100>v)var o=1200;else if(v>11100&&11150>v)var o=1208;else if(v>11150&&11200>v)var o=1215;else if(v>11200&&11250>v)var o=1223;else if(v>11250&&11300>v)var o=1230;else if(v>11300&&11350>v)var o=1238;else if(v>11350&&11400>v)var o=1245;else if(v>11400&&11450>v)var o=1253;else if(v>11450&&11500>v)var o=1260;else if(v>11500&&11550>v)var o=1268;else if(v>11550&&11600>v)var o=1275;else if(v>11600&&11650>v)var o=1283;else if(v>11650&&11700>v)var o=1290;else if(v>11700&&11750>v)var o=1298;else if(v>11750&&11800>v)var o=1305;else if(v>11800&&11850>v)var o=1313;else if(v>11850&&11900>v)var o=1320;else if(v>11900&&11950>v)var o=1328;else if(v>11950&&12e3>v)var o=1335;c.val(o),m.val(Math.round(s/100*6.2)),d.val(Math.round(s/100*1.45));var k=$("input[name=number-9-from]").val(),g=$("input[name=number-9-to]").val();r(k/2,g/2),t(minNumberFour/2,maxNumberFour/2),$(".resulblock").html(f.val()+"<br />"+b.val()+"<br />"+m.val()+"<br />"+d.val()+"<br />"+h.val()+" - gambling<br />")}),$(".state-or").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="OR<br />";i+="3"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-ca").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="CA<br />";i+="B2"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-il").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="IL<br />";i+="D40"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-al").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="AL<br />";i+="8"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-ny").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="NY<br />";i+="4"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-tx").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="TX<br />";i+="1"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-id").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="ID<br />";i+="A2"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-ga").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="GA<br />";i+="1"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-fl").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="FL<br />";i+="L2"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"0<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-az").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="AZ<br />";i+="D5"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-ar").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="AR<br />";i+="9"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".state-ak").on("click",function(e){e.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=r(2009,2014),l=a+8,i="AK<br />";i+="5"+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+r(0,9)+"<br/>",i+=t()+"/"+t()+"/"+a+"<br/>",i+=t()+"/"+t()+"/"+l,$(".resulblock-second").html(i)}),$(".secret").on("click",function(r){r.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var t=e(l)+a(i)+a(n)+a(s)+e(l),v="";v+="HR pass: "+t+'<br/>Q1: <span class="text-1"></span><br/>Q2: <span class="text-2"></span><br/>Q3: <span class="text-3"></span><br/>',$(".resulblock-third").html(v),$.get("text-1.txt",function(e){var a=e.split("\n"),r=a[Math.floor(Math.random()*a.length)];$(".text-1").html(r)}),$.get("text-2.txt",function(e){var a=e.split("\n"),r=a[Math.floor(Math.random()*a.length)];$(".text-2").html(r)}),$.get("text-3.txt",function(e){var a=e.split("\n"),r=a[Math.floor(Math.random()*a.length)];$(".text-3").html(r)})});var k=new ZeroClipboard($(".resulblock"));k.on("ready",function(e){k.on("copy",function(e){e.clipboardData.setData("text/plain",e.target.innerText)}),k.on("aftercopy",function(e){console.log("Copied text to clipboard: "+e.data["text/plain"])})}),k.on("error",function(e){ZeroClipboard.destroy()});var g=new ZeroClipboard($(".resulblock-second"));g.on("ready",function(e){g.on("copy",function(e){e.clipboardData.setData("text/plain",e.target.innerText)}),g.on("aftercopy",function(e){console.log("Copied text to clipboard: "+e.data["text/plain"])})}),g.on("error",function(e){ZeroClipboard.destroy()});var x=new ZeroClipboard($(".resulblock-third"));x.on("ready",function(e){x.on("copy",function(e){e.clipboardData.setData("text/plain",e.target.innerText)}),x.on("aftercopy",function(e){console.log("Copied text to clipboard: "+e.data["text/plain"])})}),x.on("error",function(e){ZeroClipboard.destroy()})});