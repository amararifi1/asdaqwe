// // var input = document.getElementById('text')
// // // var input2 = document.getElementById('text1')
// // // var button = document.getElementById('button')
// // // var button2 = document.getElementById('button1')
// // // var text = document.getElementById('text_id')


// // // button.onclick = function(){
// // //     text.innerHTML = input.value
// // // }

// // // button2.addEventListener('click',function(){
// // //     text.innerHTML = input.value + input2.value
// // // })


// var text = "PDK ma e forta";
// var result = text.replace(/forta/,"e mira");
// document.getElementById('result').innerHTML = result;

// var text = "abcdef"
// var regex = new RegExp('def');
// document.getElementById('result2').innerHTML = regex.test(text)

var text = "Lorem ipsum dolor sit 69"
var result = text.search("ipsum")

console.log(result)


result = text.replace("ipsum","Shaban")
console.log(result)

var regex = new RegExp('abc');

// result = text.test("dolor")

result = regex.test("dolor")
console.log(result)

regex = /amet/g;
result = text.match(regex)
console.log(result)

regex = /i/g;
result = text.match(regex)
console.log(result)

regex = /[ai]]/g;
result = text.match(regex)
console.log(result)

regex = /[0-9]]/g;
result = text.match(regex)
console.log(result)

regex = /\d/g;
result = text.match(regex)
console.log(result)

regex = /(top|best|school)/g;
result = text.match(regex)
console.log(result)

regex = /\s/g;
result = text.match(regex)
console.log(result)

text = "Selam alekium"
regex = /e+/g;
result = text.match(regex)
console.log(result)

text = "Wa alekium o selam"
regex = /Wa?/g;
result = text.match(regex)
console.log(result)

text = "easd wqe , 123 , 123 ,123"
regex = /easd*/g;
result = text.match(regex)
console.log(result)

text = "easd wqe , 123 , 123 ,123, 123 , 123 ,123"
regex = /2{3}?/g;
result = text.match(regex)
console.log(result)

text = "easd wqe , 123 , 123 ,123, 123 , 123 ,123"
regex = /2{3,5}?/g;
result = text.match(regex)
console.log(result)

text = "Lorem easd!! wqe , 123 , 123 ,123, 123 , 123 ,123"

regex = /!$/g;
result = text.match(regex);
console.log(result)

regex = /^Lo/g;
result = text.match(regex);
console.log(result)
