const pi = Math.Pi;
let zaokraglij = Math.round(5.4); //5
let potega = Math.pow(2, 10); //1024
let pierwiastek = Math.sqrt(16); //4
let bezwzgledna = Math.abs(-4); //4
let calkowita = Math.ceil(4.1); //5
let calkowita1 = Math.floor(4.999); //4
let min = Math.floor(1, 2, -12, 0); //-12
let losuj = Math.random(); //liczba losowa od 0 do 1

//wylosuj liczbę całkowitą z przedziału <2; 10>
let losowana = Math.floor(Math.random()*9+2);
console.log(losowana);

//inna metoda
let minimum = 2;
let maksimum = 10, wylosuj;

for (var i = 1; i <= 10; i++) //pętla kontrolna
{
  wylosuj = Math.floor(Math.random() * (maksimum - minimum + 1)) + minimum;
}

//---

//napisz funkcję, która wylosuje liczby z przedziału, który poda użytkownik z klawiatury
// function losowanie(min1, max2) {
//   let liczba1 = prompt('Podaj liczbe 1');
//   let liczba2 = prompt('Podaj liczbę 2');
//   let liczbatemp = 0;
//
//   if (liczba1 > liczba2)
//   {
//     liczbatemp = liczba2;
//     liczba1 = liczba2;
//     liczba1 = liczbatemp;
//   }
//
//   min1 = liczba1;
//   max1 = liczba2;
//   wylosuj1 = Math.floor(Math.random()*max1+min1);
//   console.log(wylosuj1);
// }
// }

//-----------------
/*
  Wylosuj na keranie tyle liczb z przedziału ile poda użytkownik z klawiatury i wyświetl je w formacie:
  Minimalna:
  Maksymalna
  Liczba 1:
  liczba2;
  itd;*/

  let liczbamin = ParseInt(prompt('Podaj liczbę minimalną'));
  let liczbamax = ParseInt(prompt('Podaj liczbę maksymalną'));
  do {
    ilelosowan = prompt('Ile liczb wylosować? ');
  } while(isNaN(ilelosowan));

  for (var i = 0; i <= ilelosowan; i++)
  {
    wylosuj2 = Math.floor(Math.random()*liczbamax+liczbamin);
    document.write(wylosuj2);
  }
