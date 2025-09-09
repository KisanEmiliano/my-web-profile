// feather icon
feather.replace();

// navbar
const navItems = document.querySelector('.nav-items')
const menu = document.getElementById('menu');

menu.addEventListener('click',function () {
  navItems.classList.toggle('active');
})

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navItems.contains(e.target)) {
      navItems.classList.remove("active");
    }
});


// PARALAX EFFECT
window.addEventListener("scroll", function(){
  let scrollWindow = this.window.scrollY;

  const galeri = this.document.querySelector(".galeri");
  if (scrollWindow > galeri.offsetTop - 250) {
    const thumb = this.document.querySelectorAll(".galeri .thumbnail");
    thumb.forEach(function (thumb, i) {
      setTimeout(function(){
        thumb.classList.add("muncul")
      }, 300 * (i+1));
    });
  }
  
  const tentang = this.document.querySelector(".article");
  if (scrollWindow > tentang.offsetTop - 250) {
    const ttg = this.document.querySelectorAll(".article");
    ttg.forEach(function (ttg, i) {
      setTimeout(function(){
        ttg.classList.add("kiri")
      }, 300 * (i+1));
    });
  }
  const aside = this.document.querySelector(".aside");
  if (scrollWindow > aside.offsetTop - 250) {
    const asd = this.document.querySelectorAll(".aside");
    asd.forEach(function (asd, i) {
      setTimeout(function(){
        asd.classList.add("kanan")
      }, 300 * (i+1));
    });
  }
});

window.addEventListener("DOMContentLoaded", function(){
  const beranda = this.document.querySelector(".articleBeranda");
  beranda.classList.add("popUp");
});