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






// random lines project



var arr = ['hello ji', 'juice peelo mausambi ka', 'imandari chalat ha babu', 'Bhupendra jogi', 'asla hm bhi rakhte hai pehlwan', 'sher cheetah hi kehde']
var main = document.querySelector('main');
var btn = document.querySelector('button');


btn.addEventListener('click', function(){
    var h1 = document.createElement('h1')

    var a = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[a]

    h1.style.position = 'absolute';


    // var c1 = Math.floor(Math.random()*256)
    // var c2 = Math.floor(Math.random()*256)
    // var c3 = Math.floor(Math.random()*256)

    // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`


    var x = Math.random()*80;
    var y = Math.random()*80;

    var r = Math.random()*360
    var scl = Math.random()*3


    h1.style.left = x+'%'
    h1.style.top = y+'%'

    h1.style.rotate = r+'deg'
    h1.style.scale = scl

    main.appendChild(h1);
})