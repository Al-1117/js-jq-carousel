// Creo l'evento del click sulla freccia dello slider

var next = $('.slider-wrapper .next')
var previous = $('.slider-wrapper .prev')

$(document).ready(
  $(next).click(
    function (){
      scorreriAlProssimo();
    }

  )

);


// Funzione per scorre alla prossima immagine

function scorreriAlProssimo(){
  // Creo le variabili per le immagini
  var immagineCorrente = $('.slider-wrapper .images .active');
  var immaginePrima = $('.images .first');
  
  // Gli tolgo la classe active
  $(immagineCorrente).removeClass('active');

  // se l'immagine corrente è lultimo, gli do la classe active per farlo tornare alla prima pagina
  if (immagineCorrente.hasClass('last')) {
    $(immaginePrima).addClass('active');

  } else {
    immagineCorrente.next('img').addClass('active');
  }




}
