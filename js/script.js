function displayPrev() {
  console.log("Wywołałem funkcję displayPrev")
  var slide1 = document.getElementById("slide1");
  var sadfasdfasdf = document.getElementById("slide2");

  slide1.style.display = "block";
  sadfasdfasdf.style.display = "none";
}

function displayNext() {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");

  slide1.style.display = "none";
  slide2.style.display = "block";
  slide2.style.backgroundColor = "yellow";


}
