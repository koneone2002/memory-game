const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  console.log('clicked');
  this.classList.toggle('flip');
}

// eventlistener
cards.forEach(card => card.addEventListener('click', flipCard));
