// INITIALIZATION  SWIPER HEADER
const swiper = new Swiper(".swiper-header", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

    if (window.scrollY > 300) {
      header.classList.add("slide-active");
    } else {
      header.classList.remove("slide-active");
    }
});


// menu start
const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector("header");
const closeBtn = document.querySelector(".close-btn");
const menuWrapper = document.querySelector(".header__menu-wrapper");

const handleMenu = () => {
  header.classList.toggle("active");
};

const closeMenuIfClickedOutside = (e) => {
  if (!menuWrapper.contains(e.target) && !menuBar.contains(e.target)) {
    header.classList.remove("active");
  }
};

menuBar.addEventListener("click", handleMenu);
closeBtn.addEventListener("click", handleMenu);
window.addEventListener("click", closeMenuIfClickedOutside);
// menu end



// fixedIconWrapper

const openFixed = document.querySelector(".fixed__open-close-icon-wrapper");

const iconWrapper = document.querySelector(".fixed-icon-wrapper");

openFixed.addEventListener("click", () => {
  iconWrapper.classList.toggle("active");
});


// const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 100) { 
//     scrollToTopBtn.style.display = 'block';
//   } else {
//     scrollToTopBtn.style.display = 'none';
//   }
// });

// Düyməyə klik edildikdə yuxarıya sürüşdür
// scrollToTopBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Yumşaq keçid effekti
//   });
// });
