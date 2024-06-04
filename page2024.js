$(document).ready(function(){
    $('.slick-carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedValue = languageSelect.options[languageSelect.selectedIndex].value;
    if (selectedValue === "en") {
      window.location.href = "page2023en.html";
    }
  }
console.log("Largeur de la fenêtre : " + window.innerWidth);
console.log("Hauteur de la fenêtre : " + window.innerHeight);
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var moda = document.getElementById("myModa");
  var bt = document.getElementById("myBt");
  var spa = document.getElementsByClassName("clos")[0];

  bt.onclick = function() {
    moda.style.display = "block";
  }

  spa.onclick = function() {
    moda.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == moda) {
      moda.style.display = "none";
    }
  }
});
