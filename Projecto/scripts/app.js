//menu toglle
const on = document.querySelector('.add')
const img = document.querySelector('.img')
const remove = 
img.addEventListener('click', click)
function click(){
    
     on.classList.add('on')

     return true
    
}
if(click == true){
       
    img.addEventListener('click',()=>{
    on.classList.remove('on')
})}


console.log(on)



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