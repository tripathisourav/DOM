// var isStatus = document.querySelector('h5');

// var addFriend = document.querySelector('#add');
// var remFriend = document.querySelector("#Remove");


// addFriend.addEventListener('click', function(){
//     isStatus.innerHTML = "Friends";
//     isStatus.style.color = "green";
// })


// remFriend.addEventListener('click', function(){
//     isStatus.innerHTML = "Stranger";
//     isStatus.style.color = "red";
// })





// 2



// var con = document.querySelector("#container");
// var love = document.querySelector("i");

// con.addEventListener("dblclick", function(){
//     love.style.transform = "translate(-50%, -50%)  scale(1)";
//     love.style.opacity = 0.8;


//     setTimeout(function(){
//         love.style.opacity = 0;
//     }, 1000);

//     setTimeout(function(){
//         love.style.transform = "translate(-50%, -50%)  scale(0)";
//     }, 2000);
// })




// 3


// var main = document.querySelector("#main");
// var curs = document.querySelector(".cursor");

// main.addEventListener('mousemove', function(val){
//     // console.log(val.x);  // x mein mouse ki dimensions

//     curs.style.left = val.x+'px';
//     curs.style.top = val.y+'px';
// })




// 4

// mouseleave

// childNodes[1] -> h1  childNodes[3] -> img





// Your code throws an error because you are treating collections as single DOM elements in two different places.

// document.querySelectorAll('.elem').addEventListener('mousemove', function(dets){
//     document.querySelectorAll('img').style.left = dets.x+'px';
//     document.querySelectorAll('img').style.top = dets.y+'px';
// });





// var elem = document.querySelectorAll('.elem');


// elem.forEach(function(val){

//     val.addEventListener('mouseenter', function(){
//         // console.log(val.childNodes[3]);
//         val.childNodes[3].style.opacity = 1;
//     })

//     val.addEventListener('mouseleave', function(){
//         val.childNodes[3].style.opacity = 0;
//     })

//     val.addEventListener('mousemove', function(dets){
//         // console.log(dets.offsetX, dets.offsetY, dets.x, dets.y)     // dets x or y pure page ke comparision mein dete hai whi offsetX or Y particular box ke comparision mein dete hai
//         val.querySelector('img').style.left = dets.offsetX+'px';
//         val.querySelector('img').style.top = dets.offsetY+'px';
//     });
// })









// 5

// var arr = [
//     {dp: "https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1764501819659-1ce4989d49c7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8"},
//     {dp: "https://plus.unsplash.com/premium_photo-1664304889491-127500116212?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1672030373052-d9c2bdde4559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
//     {dp: "https://plus.unsplash.com/premium_photo-1669740215572-5e49b2d7eee0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1669740216611-a81f6d18ed66?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {dp: "https://plus.unsplash.com/premium_photo-1664304889491-127500116212?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1672030373052-d9c2bdde4559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
// ];



// var clutter = "";

// arr.forEach(function(val, idx){
//     clutter += `<div class="story">
//                 <img id="${idx}" src="${val.dp}" alt="">
//             </div>`
// })

// var st = document.querySelector('#storiy')

// st.innerHTML = clutter;


// st.addEventListener('click', function(dets){
//     document.querySelector('#full-screen').style.display = "block";
//     document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;

//     setTimeout(function(){
//         document.querySelector('#full-screen').style.display = "none";
//     }, 2000)
// })





// 


// create a element
// appending a child



// var h1 = document.createElement('h1');
// console.log(h1);


// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){

//     var h1 = document.createElement('h1');
//     h1.innerHTML = "hello from js"

//     console.log(h1);
// })





// var h1 = document.createElement('h1');

// h1.innerHTML = "Hello from JS"

// var main = document.querySelector('main');

// main.appendChild(h1);





// var btn = document.createElement('button')

// btn.innerHTML = 'download'

// var main = document.querySelector('main')

// main.appendChild(btn)








// random boxes project

// var main = document.querySelector('main');
// var btn = document.querySelector('button');


// btn.addEventListener('click', function(){
//     var box = document.createElement('div');
//     box.style.height = '50px';
//     box.style.width = '50px';

//     box.style.position = 'absolute';


//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`

//     var x = Math.random()*100;
//     var y = Math.random()*100;

//     var r = Math.random()*360


//     box.style.left = x+'%'
//     box.style.top = y+'%'

//     box.style.rotate = r+'deg'

//     main.appendChild(box);
// })






// Creating new element and appending it to the existing elements



// var arr = ['hello ji', 'juice peelo mausambi ka', 'imandari chalat ha babu', 'Bhupendra jogi', 'asla hm bhi rakhte hai pehlwan', 'sher cheetah hi kehde']
// var main = document.querySelector('main');
// var btn = document.querySelector('button');


// btn.addEventListener('click', function(){
//     var h1 = document.createElement('h1')

//     var a = Math.floor(Math.random()*arr.length)

//     h1.innerHTML = arr[a]

//     h1.style.position = 'absolute';


//     // var c1 = Math.floor(Math.random()*256)
//     // var c2 = Math.floor(Math.random()*256)
//     // var c3 = Math.floor(Math.random()*256)

//     // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`


//     var x = Math.random()*80;
//     var y = Math.random()*80;

//     var r = Math.random()*360
//     var scl = Math.random()*3


//     h1.style.left = x+'%'
//     h1.style.top = y+'%'

//     h1.style.rotate = r+'deg'
//     h1.style.scale = scl

//     main.appendChild(h1);
// })




// var arr = ['hello ji', 'juice peelo mausambi ka', 'imandari chalat ha babu', 'Bhupendra jogi', 'asla hm bhi rakhte hai pehlwan', 'sher cheetah hi kehde']
// var main = document.querySelector('main');
// var btn = document.querySelector('button');



// btn.addEventListener('click', function(){
//     var h1 = document.createElement('h1')   
//     var a = Math.floor(Math.random()*arr.length)

//     h1.innerHTML = arr[a]   
//     h1.style.position = 'absolute';
//     var x = Math.random()*80;
//     var y = Math.random()*80;
//     var r = Math.random()*360
//     var scl = Math.random()*3
//     h1.style.left = x+'%'
//     h1.style.top = y+'%'
//     h1.style.rotate = r+'deg'
//     h1.style.scale = scl
//     main.appendChild(h1);
// })










// Fourth Commit 

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

// var grow = 0;
// var h2 = document.querySelector('h2')
// var inner = document.querySelector('.inner')
// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){
    
//     btn.style.pointerEvents = 'none'  // ek baar btn ko daba diya toh uske baad dubara nhi dba skte

//     var num = 50 + Math.floor(Math.random()*50)
    
//     console.log('Your file will be downloaded in', num/10, 'seconds')

//     var dn = setInterval(() => {
//         grow++
//         inner.style.width = grow + '%';
//         h2.innerHTML = grow + '%'
//     }, num);

//     setTimeout(() => {
//         clearInterval(dn)
//         btn.innerHTML = 'Downloaded'
//         btn.style.opacity = 0.5
//     }, num*100);
// })




// Fourthh commit download button project


// let grow = 0;

// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){

//     btn.style.pointerEvents = 'none'
//     var h2 = document.querySelector('h2')
//     var inner = document.querySelector('.inner')

//     var ran = 50 + Math.floor(Math.random()*50)

//     var inc = setInterval(() => {
//         grow++
//         h2.innerHTML = grow+'%'
//         inner.style.width = grow+'%'
//     }, ran);

//     setTimeout(function(){
//         clearInterval(inc);
//         btn.innerHTML = 'Downloaded'
//         btn.style.opacity = '0.5'
//     }, ran*100)
// })