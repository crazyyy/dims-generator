function getRandomFromArray(r){var a=r[Math.floor(Math.random()*r.length)];return a}function getRandomFromPossible(r){for(var a="",m=0;2>m;m++)a+=r.charAt(Math.floor(Math.random()*r.length));return a}var passSymbChar=["!","@","#","$","%","&","*"],passNumChar="23456789",passAlphaChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ",passAlphaSmChar="abcdefghijklmnopqrstuvwxyz";$(document).ready(function(){var r=$("#pass");$("#random-number"),$("#random-number-2"),$("#number-5"),$("#number-6"),$("#number-7"),$("#number-8"),$("#number-9"),$("#number-10"),$("#result"),$("#occupation");minNumberTwo=8e3,maxNumberTwo=12e3,minNumberThree=212,maxNumberThree=240,minNumberFour=164,maxNumberFour=212,$(".generator-first").on("click",function(a){a.preventDefault();var m=getRandomFromArray(passSymbChar)+getRandomFromPossible(passNumChar)+getRandomFromPossible(passAlphaChar)+getRandomFromPossible(passAlphaSmChar)+getRandomFromArray(passSymbChar);r.val(m)})});