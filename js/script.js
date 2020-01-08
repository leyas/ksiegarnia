function displayPrev() {
    var actualNumber = getActualSlideNumber();
    var actualSlide = getActualSlide();
    var prevNumber = getPrevSlideNumber(actualNumber);
    var prevSlide = getSlideByNumber(prevNumber);

    if (prevSlide == null) {
      prevSlide = getLastSlide();
    }

    change(actualSlide, prevSlide);
}

function displayNext() {
  var actualNumber = getActualSlideNumber();
  var actualSlide = getActualSlide();
  var nextNumber = getNextSlideNumber(actualNumber);
  var nextSlide = getSlideByNumber(nextNumber);

  if (nextSlide == null) {
    nextSlide = getFirstSlide();
  }

  change(actualSlide, nextSlide);
}

function getFirstSlide(){
  return document.getElementById("slide1");
}

function change(oldSlide, newSlide){
  oldSlide.classList.remove("visible");
  oldSlide.classList.add("hidden");

  newSlide.classList.remove("hidden");
  newSlide.classList.add("visible");
}

function getActualSlideNumber(){
  var actual = getActualSlide();
  return getSlideNumber(actual.id);
}

function getActualSlide(){
  var visibleSlides = document.getElementsByClassName("visible");
  var actual = visibleSlides[0];

  return actual;
}

function getSlideNumber(id){
  var number = id.replace("slide", "");
  return number;
}

function getNextSlideNumber(actualNumber){
  var nextNumber = Number(actualNumber)+1;  // "1" => 1
  console.log("Następne id = "+nextNumber);

  return nextNumber;
}

function getPrevSlideNumber(actualNumber){
  var prevNumber = Number(actualNumber)-1;  // "1" => 1
  console.log("Poprzednie id = "+prevNumber);

  return prevNumber;
}

function getSlideByNumber(number){
  return document.getElementById("slide"+number);
}

function getLastSlide(){
  // ostatni slide
  var slides = document.getElementsByClassName("slide");
  var lastIndex = slides.length-1;
  console.log("Ostatni index: "+lastIndex);
  var lastSlide = slides[lastIndex];
  // slide1, slide2   =>   slide2
  // slide1, slide2, slide3, slide4   =>   slide4
  return lastSlide;
}
