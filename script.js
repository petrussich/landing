const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-links");
navBtn.addEventListener("click", function() {
  //show nav list
  const linksheight = links.getBoundingClientRect().height;
  const containerHeight = navList.getBoundingClientRect().height;

  if(containerHeight == 0) {
    navList.style.height = `${linksheight}px`;
  } else{
    navList.style.height =0;
  }
  // Navbar nextBtn
  navBtn.classList.toggle("active");
});



// Получаем все элементы фильтра и портфолио
const filterButtons = document.querySelectorAll('.portfolio-filter ul li a');
const portfolioItems = document.querySelectorAll('.portfolio-box');
filterButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const category = this.getAttribute('data-filte');

    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-filte') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    filterButtons.forEach(btn => btn.classList.remove('current'));
    this.classList.add('current');
  });
});

const slides = document.querySelectorAll(".testimonial-slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%` ;
});

let counter = 0;
nextBtn.addEventListener("click", function(){
  counter++;
  coursel();
});

prevBtn.addEventListener("click", function(){
  counter--;
  coursel();
});

function coursel() {
  if (counter == slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }


  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter *100}%)`;

  });
}


const openModal = document.querySelector(".popup-contact");
const modal = document.querySelector(".box-inner");
const closeModal = document.querySelector(".bg-contact");

openModal.addEventListener("click", function() {
  modal.classList.add("open-modal");
});

closeModal.addEventListener("click", function() {
  modal.classList.remove("open-modal");
})
