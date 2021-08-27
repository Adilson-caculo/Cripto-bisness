//menu toglle
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    
    this.activeClass = "active";

     this.handleClick = this.handleClick.bind(this);
     this.animateLinks = this.animateLinks.bind(this);
   
  }

 

  handleClick() {
    this.animateLinks();
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    
    
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    
  
  }
 animateLinks() {
    this.navLinks.forEach((link, index) => {
      
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
        
    });
  }
  
 
  // navLinks.addEventListener('click',()=>{
  //   this.mobileMenu.classList.remove(this.activeClass);
  // })
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li ",
);
mobileNavbar.init();


const oi = document.querySelectorAll(' li ')
oi.addEventListener('click', (intem) =>{
  intem.classList.remove('active');
  console.log('oi')
})
console.log(oi)
// formulario
document.querySelector('#show-login').addEventListener('click', ()=>{
  const poput = document.querySelector('.popup')
  poput.classList.add('active')
  document.querySelector('.close-btn').addEventListener('click',()=>{
 poput.classList.remove('active')
  })
})

//Slide 
$(".carousel").owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  })