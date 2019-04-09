let text = 'WSB - Wyższa Szkoła Bankowa';
console.log(text);
console.log(text.length);

let pierwszyZnak = text.charAt(0);
console.log(pierwszyZnak);

let ostatniZnak = text.charAt(text.length - 1);
console.log(ostatniZnak);

// indeks 1 znaku w tablicy ASCII
console.log(text.charCodeAt(0));

/*
  Sprawdź, czy użytkownik podał minimum jedną dużą literę w polu input
*/

let elTekst = document.getElementById('tekst');
let elPrzycisk = document.getElementById('przycisk');
let elKomunikat = document.getElementById('k');
let tekst;
let x = 'AZ', i, znak;

function sprawdz() {
  //65-90 - zakres dużych liter
  tekst = elTekst.value;
  for (i = 0; i < tekst.length; i++){
    znak = tekst.charCodeAt(i);
    if (znak >= 65 && znak <= 90)
    {
      k.innerHTML = 'Duża litera: ' + tekst.charAt(i);
    }
  }
}
elPrzycisk.addEventListener('click', sprawdz);

  //example
  tekst = 'poznAŃ';
  let duze = tekst.toUpperCase();
  console.log(duze);

  let male = tekst.toLowerCase();
  console.log(male);

  let wytnij = tekst.slice(1);
  console.log(wytnij);

  /*
    HOMEWORK
    Użytkownik podaje  z klawiatury w polach tekstowych swoje imie i nazwisko.
    Wyświetl dane w formacie:
    Imię: Jan
    Nazwisko: Kowalski
    (PIerwsza litera duża, pozostałe małe)
    */
