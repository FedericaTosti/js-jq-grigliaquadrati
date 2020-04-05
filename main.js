// Creare una griglia formata da 8x8 quadrati tutti bianchi.
// 15 di questi quadrati se cliccati diventano rossi, gli altri diventano verdi
// cerco di dinamicizzare la creazione dei quadrati della griglia (quindi non li scrivo a mano nell’html, ma li scrivo tramite il js).



$(document).ready(function(){

  // ciclo for per creare i quadrati e aggiungerli in tablecontainer
  for(i = 1; i <= 64; i++) {
    $('.tablecontainer').append('<div class="square"></div>');
  }

  // creo funzione per numero random
  function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // ciclo do while per associare a caso a 15 quadrati la classe redWannabe
  var i = 1;
  do {
    var numberRandom = numeroRandom(1, 64)

    // per evitare che redWannabe venga assegnato ad un quadrato che ha già questa classe

    // se il quadrato con quell'indice non ha classe redWannabe...
    if (!$(".tablecontainer").find($('div .square')).eq(numberRandom).hasClass('redWannabe')) {

      // .. assegno classe redWannabe
      $(".tablecontainer").find($('div .square')).eq(numberRandom).addClass('redWannabe');

      i++;

    }else {
      // non fa nulla
    }

    // stampo numero e posizione
    console.log(numberRandom);
    console.log($('div .square').get(numberRandom));
    
  } while (i <= 15);





  // variabile per tenere il punteggio dei Verdi VS Rossi
  var redPoint = 0, greenPoint = 0;



  // // quando clicco su ogni quadrato
  // $('.square').click (function () {
  //   // se è già stato cliccato
  //   if($(this).hasClass('active')){
  //     // stampo il mex
  //     console.log("OH! l'hai già cliccato!");
  //     // se non ha classe active, ma ha redWannabe
  //   } else if($(this).hasClass('redWannabe')){
  //     // sfondo di colore rosso
  //     $(this).css('background', 'red');
  //     // aumento di uno il punteggio
  //     redPoint++;
  //     // aggiungo classe active
  //     $(this).addClass('active');
  //     // stampo punteggio
  //     console.log("punteggio rosso: " + redPoint);
  //     $('.prossa').html("ROSSI: " + redPoint);
  //   } else {
  //     // altrimenti sfondo di colore verde
  //     $(this).css('background', 'green');
  //     // aumento di uno il punteggio
  //     greenPoint++;
  //     // aggiungo classe active
  //     $(this).addClass('active');
  //     // stampo punteggio
  //     console.log("punteggio verde: " + greenPoint);
  //     $('.pverde').html("VERDI: " + greenPoint);
  //   }
  // });



  // quando clicco su ogni quadrato, metodo .one evito di controllare se è stato già cliccato
  $('.square').one("click", function () {
    // se ha classe redWannabe
    if($(this).hasClass('redWannabe')){
      // sfondo di colore rosso
      $(this).css('background', 'red');
      // aumento di uno il punteggio
      redPoint++;
      //  stessa cosa di redPoint = redPoint + 1;
      // stampo punteggio
      console.log("punteggio rosso: " + redPoint);
      $('.prossa').html("ROSSI: " + redPoint);
    } else {
      // altrimenti sfondo di colore verde
      $(this).css('background', 'green');
      // aumento di uno il punteggio
      greenPoint++;
      // stampo punteggio
      console.log("punteggio verde: " + greenPoint);
      $('.pverde').html("VERDI: " + greenPoint);
    }
  });

});
