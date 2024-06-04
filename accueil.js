function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedValue = languageSelect.options[languageSelect.selectedIndex].value;
    if (selectedValue === "en") {
      window.location.href = "indexen.html";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
  console.log("Largeur de la fenêtre : " + window.innerWidth);
  console.log("Hauteur de la fenêtre : " + window.innerHeight);
  
  console.log(document.getElementById("myBtn"));
  
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
  });
  