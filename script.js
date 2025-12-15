const reels = [
  {
    isMuted: true,
    username: "arjun.verma",
    likeCount: 12450,
    isLiked: true,
    commentCount: 320,
    caption: "Morning grind hits different 💪",
    noOfComments: 320,
    video: "./vdos/sh1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 145,
    isSuscribed: true,
    subs: "120k"
  },
  {
    isMuted: true,
    username: "neha.codes",
    likeCount: 9850,
    isLiked: false,
    commentCount: 210,
    caption: "Debugging at 2 AM be like 😵‍💫",
    noOfComments: 210,
    video: "./vdos/sh2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 98,
    isSuscribed: false,
    subs: "256k"
  },
  {
    isMuted: true,
    username: "travelwith_rohan",
    likeCount: 34200,
    isLiked: true,
    commentCount: 875,
    caption: "POV: You found peace in the mountains 🏔️",
    noOfComments: 875,
    video: "./vdos/v3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/18.jpg",
    shareCount: 560,
    isSuscribed: true,
    subs: "620k"
  },
  {
    isMuted: true,
    username: "fitlife_kavya",
    likeCount: 18760,
    isLiked: false,
    commentCount: 402,
    caption: "Consistency > Motivation",
    noOfComments: 402,
    video: "./vdos/v4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 230,
    isSuscribed: false,
    subs: "300k"
  },
  {
    isMuted: true,
    username: "streetfood_diaries",
    likeCount: 45900,
    isLiked: true,
    commentCount: 1120,
    caption: "₹50 ke momos, taste ₹500 ka 😋",
    noOfComments: 1120,
    video: "./vdos/v5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/51.jpg",
    shareCount: 890,
    isSuscribed: true,
    subs: "672k"
  }
]



var allReels = document.querySelector('.all-reels');


function allData(){

  var clutter = ""

  reels.forEach(function(e, id){
      clutter += `<div class="reel">
                      <video autoplay loop ${e.isMuted?'muted':''} class="main-img" src=${e.video}></video>
                      <div id=${id} class="mute">${e.isMuted? '<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-down-fill"></i>'}</div>
                      <div class="bottom">
                          <div class="user">
                              <img src=${e.userProfile} alt="">
                              <div class="info">
                                  <h4>${e.username}</h4>
                                  <h5>${e.subs} suscribers</h5>
                              </div>
                              <button id=${id} class="follow">${e.isSuscribed?'Unsuscribe':'suscribe'}</button>
                          </div>
                          <h3>${e.caption} #shorts #travel #vlogging</h3>
                      </div>
                      <div class="right">
                          <div  id="${id}" class="like">
                              <h4 class="like-icon icon">${e.isLiked ? '<i class="ri-heart-3-fill love"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                              <h6>${e.likeCount}</h6>
                          </div>
                          <div class="comment">
                              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                              <h6>${e.commentCount}</h6>
                          </div>
                          <div class="share">
                              <h4 class="share-icon icon"><i class="ri-share-forward-fill"></i></h4>
                              <h6>${e.shareCount}</h6>
                          </div>
                          <div class="menu">
                              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                          </div>
                          
                      </div>
                  </div>`
  })


  allReels.innerHTML = clutter;
}


allData()



allReels.addEventListener('click', function(dets){

  console.log(dets.target.className);

  if(dets.target.className == 'like')
  {
    if(reels[dets.target.id].isLiked){
    reels[dets.target.id].isLiked = false;
    reels[dets.target.id].likeCount--;
    }
    else{
      reels[dets.target.id].isLiked = true;
      reels[dets.target.id].likeCount++;
    }
    allData();
  }
  if(dets.target.className == 'follow')
  {
    if(!reels[dets.target.id].isSuscribed){
      reels[dets.target.id].isSuscribed = true;
    }
    else{
      reels[dets.target.id].isSuscribed = false;
    }
    allData();
  }
  if(dets.target.className == 'mute') {
    if(reels[dets.target.id].isMuted == true)
    {
      reels[dets.target.id].isMuted = false;
    }else{
      reels[dets.target.id].isMuted = true;
    }
    allData();
  }
})

// Event Bubbling -> When an event occurs on a child element, it first runs on that element, then moves upward through its parent elements, up to document.


// Event Capturing -> The event is first captured by the outermost element and propagated to the inner elements.


// Event Delegation -> A technique of using a single event listener on a parent element to manage events for multiple child elements.