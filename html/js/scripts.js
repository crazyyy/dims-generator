$(document).ready(function(){function t(t){var a=t[Math.floor(Math.random()*t.length)];return a}function a(t){for(var a="",n=0;2>n;n++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}function n(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);return n}function e(){var t=Math.floor(12*Math.random()+1);return 10>t&&(t="0"+t),t}var r=["!","@","#","$","%","&","*"],o="23456789",l="ABCDEFGHIJKLMNOPQRSTUVWXYZ",i="abcdefghijklmnopqrstuvwxyz",c=$("#pass"),u=$("#random-number"),s=$("#random-number-2"),b=$("#number-5"),v=$("#number-6"),m=$("#number-7"),d=$("#number-8"),f=$("#number-9"),h=$("#number-10"),p=($("#result"),$("#occupation")),C=["Cook","Copywriter","Car Mechanic","Civil Engineer","Credit analyst","Consultant","Cleaner","Clerk","Driver","Economist","Electrical Engineer","Finance Broker","Finance Manager","Janitor","Manager","File Clerk","Office Clerk","Stock clerk","Assistant","Project engineer","Radio Mechanics","Sales Manager","Sales Promoter","Administrator","Systems Analyst","Web Designer","Auditing clerk","Bus driver","Cashier","Fitness Trainer","Secretary","Web Developer","Marketing Manager","Accountant","Mechanical Engineer","IT Manager","Logistician","Insurance Agent","HR Specialist","Receptionist","Auto Mechanic","Security Guard","Guard","Financial Analyst"];minNumberFour=164,maxNumberFour=212,$(".generator-first").on("click",function(n){function e(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);u.val(2*n)}function M(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);s.val(2*n)}function k(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);f.val(2*n)}function g(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);h.val(2*n)}n.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active"),$("body").addClass("mylittleponys");var x=t(r)+a(o)+a(l)+a(i)+t(r);c.val(x);var D=$("input[name=random-number-from]").val(),y=$("input[name=random-number-to]").val();e(D/2,y/2),p.val(C[Math.floor(Math.random()*C.length)]);var A=$("input[name=random-number-2-from]").val(),T=$("input[name=random-number-2-to]").val();M(A/2,T/2);var F=b.val(),E=s.val();v.val(Math.round(E/100*F)),m.val(Math.round(E/100*6.2)),d.val(Math.round(E/100*1.45));var N=$("input[name=number-9-from]").val(),S=$("input[name=number-9-to]").val();k(N/2,S/2),g(minNumberFour/2,maxNumberFour/2),$(".resulblock").html("\n      TT pass: "+x+"<br /><br />\n      TT2015 (Deluxe+EIC)<br />\n      Amount: (gift )<br /><br />"+s.val()+"<br />"+v.val()+"<br />"+m.val()+"<br />"+d.val()+"<br />"+f.val()+" - gambling<br />")}),$(".generator-second").on("click",function(n){function e(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);u.val(2*n)}n.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var s=t(r)+a(o)+a(l)+a(i)+t(r);c.val(s);var b=$("input[name=random-number-from]").val(),v=$("input[name=random-number-to]").val();e(b/2,v/2),$(".resulblock").html("\n      TT pass: "+s+"<br /><br />\n      TT2015 (Deluxe+EIC)<br />\n      Amount: (gift )<br /><br />")}),$(".generator-third").on("click",function(t){function a(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);s.val(2*n)}function n(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);f.val(2*n)}function e(t,a){var n=Math.floor(Math.random()*(a-t+1)+t);h.val(2*n)}t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active"),p.val(C[Math.floor(Math.random()*C.length)]);var r=$("input[name=random-number-2-from]").val(),o=$("input[name=random-number-2-to]").val();a(r/2,o/2);var l=b.val(),i=s.val();v.val(Math.round(i/100*l)),m.val(Math.round(i/100*6.2)),d.val(Math.round(i/100*1.45));var c=$("input[name=number-9-from]").val(),u=$("input[name=number-9-to]").val();n(c/2,u/2),e(minNumberFour/2,maxNumberFour/2),$(".resulblock").html(s.val()+"<br />"+v.val()+"<br />"+m.val()+"<br />"+d.val()+"<br />"+f.val()+" - gambling<br />")}),$(".state-or").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="OR<br />";o+="3"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-ca").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="CA<br />";o+="B2"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-il").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="IL<br />";o+="D40"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-al").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="AL<br />";o+="8"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-ny").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="NY<br />";o+="4"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-tx").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="TX<br />";o+="1"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-id").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="ID<br />";o+="A2"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-ga").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="GA<br />";o+="1"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-fl").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="FL<br />";o+="L2"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"0<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-az").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="AZ<br />";o+="D5"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-ar").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="AR<br />";o+="9"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".state-ak").on("click",function(t){t.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var a=n(2009,2014),r=a+8,o="AK<br />";o+="5"+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+n(0,9)+"<br/>",o+=e()+"/"+e()+"/"+a+"<br/>",o+=e()+"/"+e()+"/"+r,$(".resulblock-second").html(o)}),$(".secret").on("click",function(n){n.preventDefault(),$(".button-active").removeClass("button-active"),$(this).addClass("button-active");var e=t(r)+a(o)+a(l)+a(i)+t(r),c="";c+="HR pass: "+e+'<br/>Q1: <span class="text-1"></span><br/>Q2: <span class="text-2"></span><br/>Q3: <span class="text-3"></span><br/>',$(".resulblock-third").html(c),$.get("text-1.txt",function(t){var a=t.split("\n"),n=a[Math.floor(Math.random()*a.length)];$(".text-1").html(n)}),$.get("text-2.txt",function(t){var a=t.split("\n"),n=a[Math.floor(Math.random()*a.length)];$(".text-2").html(n)}),$.get("text-3.txt",function(t){var a=t.split("\n"),n=a[Math.floor(Math.random()*a.length)];$(".text-3").html(n)})});var M=new ZeroClipboard($(".resulblock"));M.on("ready",function(t){M.on("copy",function(t){t.clipboardData.setData("text/plain",t.target.innerText)}),M.on("aftercopy",function(t){console.log("Copied text to clipboard: "+t.data["text/plain"])})}),M.on("error",function(t){ZeroClipboard.destroy()});var k=new ZeroClipboard($(".resulblock-second"));k.on("ready",function(t){k.on("copy",function(t){t.clipboardData.setData("text/plain",t.target.innerText)}),k.on("aftercopy",function(t){console.log("Copied text to clipboard: "+t.data["text/plain"])})}),k.on("error",function(t){ZeroClipboard.destroy()});var g=new ZeroClipboard($(".resulblock-third"));g.on("ready",function(t){g.on("copy",function(t){t.clipboardData.setData("text/plain",t.target.innerText)}),g.on("aftercopy",function(t){console.log("Copied text to clipboard: "+t.data["text/plain"])})}),g.on("error",function(t){ZeroClipboard.destroy()})});