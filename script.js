// var a = Math.random();   //method in js that gives random values in range 0 to 1

// console.log(a);


// var a = Math.random()*10;  // 0 se 10 ke beech mein
// console.log(a);

// var b = Math.floor(a);

// console.log(b);




// var btn = document.querySelector('button');
// var box = document.querySelector("#box");


// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*256);   // floor ki wajah se value 255 se jyada aayegi hi nhi
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
// })





var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        fullname: 'Chennai Super Kings',
        trophies: 5,
        captian: 'MSD',
        img: 'https://i.pinimg.com/736x/4e/e7/ac/4ee7ac144c048d64edcb30d3129a895f.jpg'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        fullname: 'Royal Challengers Bengaluru',
        trophies: 1,
        captian: 'Rajat Patidar',
        img: 'https://i.pinimg.com/736x/54/96/c3/5496c328d02c848b352190a0eee94dc1.jpg'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'grey',
        fullname: 'Mumbai Indians',
        trophies: 5,
        captian: 'Hardik Pandya',
        img: 'https://i.pinimg.com/1200x/e8/87/a8/e887a81959a66337b7ccc7835c38470e.jpg'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'darkBlue',
        fullname: 'Punjab Kings',
        trophies: 0,
        captian: 'Shreyas Iyer',
        img: 'https://i.pinimg.com/736x/29/a3/22/29a3221c17e0e067e72034fa4f7b5e12.jpg'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        fullname: 'Kolkata Knight Riders',
        trophies: 3,
        captian: 'Ajinkya Rahane',
        img: 'https://i.pinimg.com/736x/50/74/90/5074903bf6ee5d5e643f19de6efe1568.jpg'
    }
]



var btn = document.querySelector('button');
var box = document.querySelector('#box');
var main = document.querySelector('main');


btn.addEventListener('click', function(){

    var win = arr[Math.floor(Math.random()*arr.length)];

    box.innerHTML = `<div id="top"><h1>${win.team}</h1> <h2>(${win.fullname})</h2></div>
            <div id="down"><h2>Captian: ${win.captian}</h2> <h3>Trophies: ${win.trophies}</h3></div>`;

    main.style.backgroundColor = `${win.primary}`
    box.style.backgroundColor = `${win.secondary}`;

    box.addEventListener('dblclick', function(){
        box.style.backgroundImage = `url(${win.img})`;
        box.style.backgroundSize = 'cover';
        box.style.backgroundPosition = 'center';
        box.innerHTML = "";

        setTimeout(function(){
            box.style.backgroundImage = "none";
            box.innerHTML = `<div id="top"><h1>${win.team}</h1> <h2>(${win.fullname})</h2></div>
            <div id="down"><h2>Captian: ${win.captian}</h2> <h3>Trophies: ${win.trophies}</h3></div>`;
        }, 3000);
    })
})