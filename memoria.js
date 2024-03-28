const kartyak = document.querySelectorAll('.memoria-kartya');
 
let felforditottkartya = false;
let zarttabla = false;
let elsokartya, masodikkartya;
const kovetkezogomb = document.getElementById("kovetkezo-gomb")
 
function flipCard() {
  if (zarttabla) return;
  if (this === elsokartya) return;
 
  this.classList.add('flip');
 
  if (!felforditottkartya) {
    felforditottkartya = true;
    elsokartya = this;
 
    return;
  }
 
  masodikkartya = this;
  checkForMatch();
}
 
function checkForMatch() {
  let egyMeccs = elsokartya.dataset.framework === masodikkartya.dataset.framework;
 
  egyMeccs ? disableCards() : unflipCards();
}
 
function disableCards() {
  elsokartya.removeEventListener('click', flipCard);
  masodikkartya.removeEventListener('click', flipCard);
 
  resetBoard();
}
 
function unflipCards() {
    zarttabla = true;
 
  setTimeout(() => {
    elsokartya.classList.remove('flip');
    masodikkartya.classList.remove('flip');
 
    resetBoard();
  }, 1500);
}
 
function resetBoard() {
  [felforditottkartya, zarttabla] = [false, false];
  [elsokartya, masodikkartya] = [null, null];
}
 
(function shuffle() {
    kartyak.forEach(kartya => {
    let randomPos = Math.floor(Math.random() * 12);
    kartya.style.order = randomPos;
  });
})();
 
kartyak.forEach(kartya => kartya.addEventListener('click', flipCard));