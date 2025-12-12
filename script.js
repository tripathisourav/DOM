// sync  ->  ek time pe ek hi kaam kr skte hai jaise purane nokia ke phones
// async ->  ek time pe kyi cheeze ho ske modern mobile phones

// js ka nature sync hota hai or hm ab use async krenga


// setTimeout -> delay


// setTimeout(function(){
//     console.log('hello');
// }, 2000)



// printing order -> hello1 hello3 hello2 

// console.log('hello1')

// setTimeout(function(){
//     console.log('hello2');
// }, 2000)

// console.log('hello3')




// printing order -> hello2  hello3 hello1 

// setTimeout(function(){
//     console.log('hello1');
// }, 5000)

// setTimeout(function(){
//     console.log('hello2');
// }, 2000)

// setTimeout(function(){
//     console.log('hello3');
// }, 4000)





// var user = 'sourav'

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     h1.innerHTML = `Hello I am ${user}`

//     setTimeout(function(){
//         h1.innerHTML = `how are you ${user}`
//     }, 2000)
// })




// setInterval(function(){
//     console.log('hello ji!')
// }, 2000)  // hr 2 sec ke interval ke baad hello ji aayega console pe



// var a = 0;

// var sI = setInterval(function(){
//     a++
//     console.log(a)
// }, 100);

// setTimeout(function(){
//     clearInterval(sI)
// }, 5000);










// download button project

var grow = 0;
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    
    btn.style.pointerEvents = 'none'  // ek baar btn ko daba diya toh uske baad dubara nhi dba skte

    var num = 50 + Math.floor(Math.random()*50)
    
    console.log('Your file will be downloaded in', num/10, 'seconds')

    var dn = setInterval(() => {
        grow++
        inner.style.width = grow + '%';
        h2.innerHTML = grow + '%'
    }, num);

    setTimeout(() => {
        clearInterval(dn)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);
})