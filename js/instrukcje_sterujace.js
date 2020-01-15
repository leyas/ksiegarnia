document.addEventListener("DOMContentLoaded", function(){

  if(true){
    console.log("Prawda");
  }

  // PĘTLE
  // while

  var i = 0;
  while (i < 10) {
    console.log("witaj "+i);
    i++;
  }


  do {
      var randomNumber = Math.random();
      console.log("Losowa liczba "+randomNumber);
  } while(randomNumber > 0.31);


  var imiona = ["Szymon", "Ania", "Jurek"];
  for(var i = 0; i < imiona.length; i++){
    console.log("Witaj: "+imiona[i]);
  }

  for(var i = 5; i <= 100; i += 1){
    if(i == 55){
      continue;
    }
    console.log(i);
  }

  imiona.forEach((item, i) => {
    console.log(item);
    console.log(i);
  });







});
