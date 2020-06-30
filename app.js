const burger = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar');
const lock = document.querySelector('body');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	navBar.classList.toggle('active');
	lock.classList.toggle('lock');
})

navBar.addEventListener('click', function(){
	navBar.classList.remove('active');
	burger.classList.remove('active');
	lock.classList.remove('lock');
})

let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}