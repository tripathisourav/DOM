// DOM Frontend ki javascript

// Document Object Model



// 4 Pillars of DOM

// Selection of an element
// var h1 = document.querySelector('h1');
// console.log(h1);


// changing HTML
// var h1 = document.querySelector('h1');
// h1.innerHTML = 'changed';


// Changing CSS
// var h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.style.background-color = 'red';   // Throws error 
// h1.style.backgroundColor = 'white';    // use this one 
// h1.style.backgroundColor = 'WHITE';    // both works fine 


// let box = document.querySelector('#box');
// console.log(box);

// box.innerHTML = 'hey hey';
// box.style.backgroundColor = 'blue';


// Event Listeners

// event -> something happening on website

// var h1 = document.querySelector('h1');

// h1.innerHTML = 'Changed';

// h1.style.color = 'gold';

// h1.addEventListener('mousemove')// Case senstive

// h1.addEventListener('click', function(){
//     console.log("hello")
// });


// DoubleClick
// h1.addEventListener('dblclick', function(){
//     console.log("hello")
// });


// var h1 = document.querySelector('h1');
// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     h1.innerHTML = 'I am Batman'
//     h1.style.color = 'red';
//     h1.style.fontSize = '60px';
// })






// var h1 = document.querySelector('#hero')
// console.log(h1);
// h1.innerHTML = 'buddy';

// Another Method

// var h1 = document.getElementById('hero');
// console.log(h1);



// var elem = document.getElementsByClassName('elem');
// console.log(elem);   //HTMLCollection [h1.elem]




// var h1 = document.querySelector('h1');
// h1.innerHTML = "we are H1";  // sirf pehla wala changed hua



// var h1 = document.querySelectorAll('h1');
// h1.innerHTML = "we are H1";   
// console.log(h1);  // NodeList(3) [h1, h1, h1, innerHTML: 'we are H1']




// Another method to change html


// var h1 = document.querySelector('h1');
// h1.textContent = '<i>changed</i>';   //<i>changed</i>
// h1.innerHTML = '<i>changed</i>';   //changed






var h1 = document.querySelector('h1');
var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');



var a = 0;


inc.addEventListener('click', function(){
    a++;
    h1.innerHTML = a;
})

dec.addEventListener('click', function(){
    a--;
    h1.innerHTML = a;
})