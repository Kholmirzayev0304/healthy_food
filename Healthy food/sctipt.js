window.addEventListener("load", function(){


let menu_btn = this.document.querySelector(".menu_btn");
let menu = this.document.querySelector(".menu");
let navigationItems = this.document.querySelectorAll(".menu a");
let close = this.document.querySelector("#close")
let scrollTopBtn = this.document.querySelector(".scrolltop")



console.log(menu)

menu_btn.addEventListener('click', function(){
    console.log("ona");
    menu_btn.classList.toggle("active")
    menu.classList.toggle("active")
})

close.addEventListener("click", function(){
    menu.classList.remove('active')
})

navigationItems.forEach(navigationItems => {
    navigationItems.addEventListener('click', ( ) =>{
     menu_btn.classList.remove('active')
     menu.classList.remove('active')
    })
 })


  this.window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle('active', this.window.scrollY > 500)
  })

  scrollTopBtn.addEventListener('click' , ( ) => {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
 })








})