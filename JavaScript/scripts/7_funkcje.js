// function witaj(imie)
// {
//   console.log(`Witaj ${imie}!`);
// }
//
// let imie = 'Janusz';
// witaj(imie);
//
// //---
// function budynek(rodzaj, nazwa) {
//   console.log(`${rodzaj}: ${nazwa}`);
// }
// budynek('katedra', 'Notre Dame');
//
// ///----
//
// let pole, objetosc, wynik;
// function poleObjetosc(szerokosc, dlugosc, wysokosc)
// {
//   pole = szerokosc * dlugosc ;
//   objetosc = pole * wysokosc ;
//   wynik = [pole, objetosc];
//   return wynik;
// }
//
// pole = poleObjetosc(2, 3, 4)[0];
// objetosc = poleObjetosc(2,3,4)[1];
// document.write(`Pole: ${pole}, objętosć: ${objetosc}');

//---------


let promien;
let elPrzycisk = document.getElementById('oblicz');
let pole, obwod, wynik;
let elKomunikat = document.getElementById('komunikat')

function PVKola(promien)
{
  promien = document.getElementById('promien').value;
  promien = parseFloat(promien);
  pole = Math.PI * Math.pow(promien, 2);
  obwod = 2 * Math.PI * promien;
  pole = pole.toFixed(2); // 2 miejsca po przecinku
  obwod = obwod.toFixed(2);
  wynik = [pole, obwod];
  komunikat.innerHTML = 'Pole koła: <span style="Color: red">' + wynik[0] + '<br> Obwód koła: <span style="color: red">' + wynik[1];
}

elPrzycisk.addEventListener('click', PVKola);
