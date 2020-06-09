
// CREO LA FUNZIONALITA' DEL CLICK PER ANIMARE LO SLIDER


$(document).ready(
  function() {
    // per scorrere al prossimo utilizzzando la funzione creata
    var next = $('.slider-wrapper .next');

    $(next).click(
      function (){
        scorreriProssimo();
      }
    );

    // per scorrere al precedente utilizzando la funzione creata
    var previous = $('.slider-wrapper .prev');

    $(previous).click(
      function(){
        scorriPrecedente();
      }
    );

  }
);


// FUNZIONE PER SCORRERE AL PROSSIMO

function scorreriProssimo(){
  // Creo le variabili per le immagini
  var immagineCorrente = $('.slider-wrapper .images .active');
  var immaginePrima = $('.images .first');

  // Creo le variabili per l'indicatore
  var indicatoreCorrente = $('.nav .active');
  var indicatorePrimo = $('.nav .first');

  // Gli tolgo la classe active
  $(immagineCorrente).removeClass('active');
  $(indicatoreCorrente).removeClass('active');


  // se l'immagine corrente è lultimo, gli do la classe active per farlo tornare alla prima immagine
  if (immagineCorrente.hasClass('last') && (indicatoreCorrente.hasClass('last'))) {
    $(immaginePrima).addClass('active');
    $(indicatorePrimo).addClass('active');


    // altrimenti aggiungo la classe active all'immagine successiva facendo scorrere lo slider
  } else {
    immagineCorrente.next('img').addClass('active');
    indicatoreCorrente.next('i').addClass('active');
  }

}

// FUNZIONE PER SCORRERE AL PRECEDENTE

function scorriPrecedente(){
  // Creo le variabili per le immagini
  var immagineCorrente = $('.slider-wrapper .images .active');
  var immagineUltima = $('.images .last');

  // Creo le variabili per l'indicatore
  var indicatoreCorrente = $('.nav .active');
  var indicatoreUltimo = $('.nav .last');

  // Gli tolgo la classe active per poter visualizzare il precedente
  $(immagineCorrente).removeClass('active');
  $(indicatoreCorrente).removeClass('active');

  // se l'immagine corrente è il primo, gli do la classe active per farlo tornare all'ultima immagine
  if (immagineCorrente.hasClass('first') && (indicatoreCorrente).hasClass('first')) {
    $(immagineUltima).addClass('active');
    $(indicatoreUltimo).addClass('active');

    // altrimenti aggiungo la classe active all'immagine successiva facendo scorrere lo slider
  } else {
    immagineCorrente.prev('img').addClass('active');
    indicatoreCorrente.prev('i').addClass('active');
  }


}
