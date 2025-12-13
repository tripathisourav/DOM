// var arr = [10, 'hello', 30.5, false, 50]


const users = [
  {
    fullname: "Emma Watson",
    image: "https://i.pinimg.com/736x/dd/86/b6/dd86b635382fd8047919b6c32188b096.jpg",
    profession: "Actor & Activist",
    desc: "Actor and Public speaker",
    tags: ["acting", "feminism", "public-speaking"]
  },
  {
    fullname: "Elon Musk",
    image: "https://i.pinimg.com/1200x/88/94/52/8894528940b3d7eb88a241e3c34f4e25.jpg",
    profession: "Entrepreneur",
    desc: "Tech Enthusiast, space startups technology and a lot more",
    tags: ["technology", "startups", "space"]
  },
  {
    fullname: "Virat Kohli",
    image: "https://i.pinimg.com/736x/bc/1d/48/bc1d48f3c19534f4c13ffff4243e5ecc.jpg",
    profession: "Cricketer",
    desc: "Indian Sports Player, fitness Enthusiast",
    tags: ["sports", "fitness", "leadership"]
  },
  {
    fullname: "Marshall Mathers",
    image: "https://i.pinimg.com/736x/cd/3e/93/cd3e93c040affd08e54a2495bd899273.jpg",
    profession: "Singer-Songwriter",
    desc: "Rapper Performer, One of the key faces of American Hip Hop",
    tags: ["music", "songwriting", "performing"]
  },
  {
    fullname: "Sundar Pichai",
    image: "https://i.pinimg.com/736x/e6/14/19/e61419f4efc27179e3f932010db5d659.jpg",
    profession: "CEO of Google",
    desc: "Tech Enthusiast, CEO of Google IIT grad",
    tags: ["technology", "management", "innovation"]
  }
];




var clutter = "";

users.forEach(function(val){
    clutter += ` <div class="card">
            <img src=${val.image} alt="">
            <h3>${val.fullname}</h3>
            <h4>${val.profession}</h4>
            <p>${val.desc}</p>
        </div>`
})

document.querySelector('main').innerHTML = clutter
























// hire@sheriyans.com
// sarthaksharma@sheriyans.com