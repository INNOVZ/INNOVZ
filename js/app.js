
const navSlide = () => {
  const burgMenu = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-list");
  const links = document.querySelectorAll(".nav-list li");
  burgMenu.addEventListener("click", () => {
    // window.alert('clicked');
    navLinks.classList.toggle("open");

    

    //animate links
    links.forEach((link, index) => {
      link.style.animation = `navFade 0.25s ease forwards ${index / 7 + 0.5}s`;
    });
    burgMenu.classList.toggle("toggle");
  });
};

navSlide();
const sliderbox=[

  {
    id:2,
    head:'Deep Tech',
    info:'The new Era of technology. Our Deep Tech Research and Development team is working on future Technologies and to create Innovations.',
    video:'videos/machine.mp4'
  },
  {
      id:0,
      head:'Design ',
      info:'Creative thinking meets the best designs. Our team of Creative Designers work for their better Creativity. We are here to create the best User Experience for you.',
      video:'videos/design.mp4'
  },
  {
      id:1,
      head:'Development',
      info:'Whether its a web or mobile, the best team of remote developers will innovate it. With the help of top-notch technologies we are committed to deliver the best.',
      video:'videos/devel.mp4'
  },
  {
      id:3,
      head:'Marketing',
      info:'We create audiences for your business. Committed to Develop custom  made strategy for your business and reach out to your valuable customers. ',
      video:'videos/Market.mp4'
    }
];

//Javascript
const head=document.querySelector(".head");
const info=document.querySelector(".info")
const video=document.querySelector(".video")
// buttons
const prev= document.querySelector('.button-prev');
const next= document.querySelector('.button-next');
const dot1 =document.querySelector('.dot1')
const dot2 =document.querySelector('.dot2')
const dot3 =document.querySelector('.dot3')
const dot4 =document.querySelector('.dot4')
// set items
let currentItem=0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
   showSlide(currentItem);
})

function showSlide(slide){
  const item=sliderbox[currentItem];
  head.textContent=item.head;
  info.textContent=item.info;
  video.src= item.video;
}

dot1.addEventListener('click', function(){
  currentItem=0;
  showSlide(currentItem);
  dot1.style.backgroundColor='#000';
  dot2.style.backgroundColor='#fff';
  dot3.style.backgroundColor='#fff';
  dot4.style.backgroundColor='#fff';
});
dot2.addEventListener('click', function(){
  currentItem=1;
  showSlide(currentItem);
  dot1.style.backgroundColor='#fff';
  dot2.style.backgroundColor='#000';
  dot3.style.backgroundColor='#fff';
  dot4.style.backgroundColor='#fff';
});
dot3.addEventListener('click', function(){
  currentItem=2;
  showSlide(currentItem);
  dot1.style.backgroundColor='#fff';
  dot2.style.backgroundColor='#fff';
  dot3.style.backgroundColor='#000';
  dot4.style.backgroundColor='#fff';
});
dot4.addEventListener('click', function(){
  currentItem=3;
  showSlide(currentItem);
  dot1.style.backgroundColor='#fff';
  dot2.style.backgroundColor='#fff';
  dot3.style.backgroundColor='#fff';
  dot4.style.backgroundColor='#000';
});

