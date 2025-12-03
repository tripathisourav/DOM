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

// var elem = document.querySelectorAll(".elem");

//     elem.forEach(function(val){

//     val.addEventListener('mouseenter', function(){
//         val.childNodes[3].style.opacity = 1;
//     });

//     val.addEventListener('mouseleave', function(){
//         val.childNodes[3].style.opacity = 0;
//     });

//     val.addEventListener('mousemove', function(dets){
//         val.querySelector("img").style.left = dets.offsetX + 'px';
//         val.querySelector("img").style.top = dets.offsetY + 'px';
//     });

// })

// childNodes[1] -> h1  childNodes[3] -> img






// 5

var arr = [
    {dp: "https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1764501819659-1ce4989d49c7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8"},
    {dp: "https://plus.unsplash.com/premium_photo-1664304889491-127500116212?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1672030373052-d9c2bdde4559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
    {dp: "https://plus.unsplash.com/premium_photo-1669740215572-5e49b2d7eee0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1669740216611-a81f6d18ed66?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://plus.unsplash.com/premium_photo-1664304889491-127500116212?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1672030373052-d9c2bdde4559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
];


var clutter = "";
arr.forEach(function(val, idx){
    clutter += `<div class="story">
                <img id = "${idx}" src="${val.dp}" alt="">
            </div>`;
})

var storiy = document.querySelector('#storiy');
storiy.innerHTML = clutter;

storiy.addEventListener("click", function(dets){
    var value = arr[dets.target.id].story;
    document.querySelector('#full-screen').style.display = "block";
    document.querySelector('#full-screen').style.backgroundImage = `url(${value})`;


    setTimeout(function(){
        document.querySelector('#full-screen').style.display = "none";
    }, 3000);
})