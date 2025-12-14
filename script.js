// var h1 = document.querySelector('h1')  
// console.log(h1) // sirf pehla h1 select hua


// var hAll = document.querySelectorAll('h1')
// console.log(hAll);  // gives a nodelist of all h1's
// console.log(hAll[1]);  

// // a nodelist is quietly similar to array but doesn,t perfoem all array operations


// hAll.forEach(function(val)
// {
//     console.log(val); // Hello 1 Hello 2 Hello 3
// })


// hAll.map() nhi lgta
// hAll.filter() nhi lgta
// hAll.reduce() nhi lgta






// var outer = document.querySelector('#outer')

// console.log(outer.childNodes);  //NodeList(5) [text, div#inner1, text, div#inner2, text]  orignal length should be 2 but there are fillers at even indexes which mke length 5
// console.log(outer.childNodes[0]);  //#text





var allBtn = document.querySelectorAll('.only')

allBtn.forEach(function(elem){
    elem.childNodes[3].addEventListener('click', function(val){
        if(elem.childNodes[3].innerHTML == 'Add Friend'){
            elem.childNodes[3].innerHTML = 'Remove Friend'
        }
        else{
            elem.childNodes[3].innerHTML = 'Add Friend'
        }
    })

    console.log(elem);
})