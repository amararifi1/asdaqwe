// var input = document.getElementById('text')
// // var input2 = document.getElementById('text1')
// // var button = document.getElementById('button')
// // var button2 = document.getElementById('button1')
// // var text = document.getElementById('text_id')


// // button.onclick = function(){
// //     text.innerHTML = input.value
// // }

// // button2.addEventListener('click',function(){
// //     text.innerHTML = input.value + input2.value
// // })


var text = "PDK ma e forta";
var result = text.replace(/forta/,"e mira");
document.getElementById('result').innerHTML = result;

var text = "abcdef"
var regex = new RegExp('def');
document.getElementById('result2').innerHTML = regex.test(text)

