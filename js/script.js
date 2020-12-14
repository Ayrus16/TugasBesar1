function burger() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

/* ----------------------------- Scroll Page ----------------------------- */

window.onscroll = function() {scrollPage()};


var home = document.getElementById("mynavbar");


var sticky = home.offsetTop;

function scrollPage() {
  // Scroll-Progress
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pBar").style.width = scrolled + "%";
  if (scrolled < 0.1){
    $(document.getElementById("pContainer")).hide(1000);
  }
  document.getElementById("pContainer").style.display = "block" ;

  // Sticky Nav
  if (window.pageYOffset > sticky) {
    home.classList.add("sticky");
  } else {
    home.classList.remove("sticky");
  }
}


