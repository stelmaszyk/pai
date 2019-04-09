let i;
for (i = 1; i <= 10; i++){
  document.write(i + ' ');
}
document.write('<hr>');
/*
  napisz program, ktory wyświetli liczby od 13 do 20 włącznie , wykorzystaj pętlę for. Każda liczba ma być zapisana w nowej linii
*/

for (i = 13; i <= 20; i++){
  document.write(i , '<br>');
}
document.write('<hr>');

/*
wypisz liczy parzyste z przedziału <10;50> malejąco, po każdej liczbie wyświetl przeciek i spację, a po ostatniej liczbie wyświetl kropkę.*/

for (i = 50; i >= 10; i--){
  if(i%2 == 0)
  {
    if(i == 10) {

      document.write(i, '.');
    }
    else {
      document.write(i, ', ');
    }
  }
}

/*użytkownik podaje z klawiatury w polach input dwie liczby, jesli pierwsz liczba będzie większa od drugiej, to wyświetli rosnąco w bloku na stronie W przieciwnym razie wyświetli maejąco.
np. x = 1; i = 3 ==> 1 2 3
i na odwrot*/

let elPrzycisk = document.getElementById('przycisk');
let elLiczba1 = document.getElementById('liczba1');
let elLiczba2 = document.getElementById('liczba2');
let elKomunikat = document.getElementById('komunikat');
let liczba1, liczba2, wynik = '';
function wyswietl(){
  liczba1 = elLiczba1.value;
  liczba1 = parseInt(liczba1);
  liczba2 = elLiczba2.value;
  liczba2 = parseInt(liczba2);
  if (liczba1 <= liczba2){
    for (i = liczba1; i <= liczba2; i++){
      wynik += i + ' '; //wynik = wynik + spacja
    }
  }
  if (liczba1 <= liczba2) {
    for (i = liczba2; i >= liczba1; i--){
      wynik += i + ' ';
    }
  }
  elKomunikat.innerHTML = wynik;
}

elPrzycisk.addEventListener('click', wyswietl);
