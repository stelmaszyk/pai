// window.alert("Test1");
// alert("Test");

//JS nie wymaga średników, ale lepiej żeby były. są pomijane.

zmienna  = 7;

/*
  zmienna - nazwa zmiennej
  = operator przypisania
  7 - wartość zmiennej.
*/

var imie = "Janusz";
let nazwisko;
nazwisko = "Nowak";
document.write('Twoje imie: ' + imie + '<br>'); //<br> - przejscie do nowej linii
// powyżej - konkatenacja - sposób wolniejszy - bo łączy

let wiek = 21;
document.write('Twój wiek: ', wiek, '<br>');
//sposób wydajniejszy, on wyświeetla po kolei, nie łączy.

console.log(wiek); // wyświetlenie w konsoli
console.log('wynik = ', 3*5);
//--

let x, y;
x = 10;
y = 7;
suma = x + y ;
wynik = 'Suma wynosi: ';
wynik += suma;
wynik += '<br>';
document.write(wynik);

//działania: =, -, *, /

//POTĘGOWANIE.

let potega = Math.pow(2, 10);
// alert('Potega: ' + potega);

//MODULO -- reszta z dzielenia
let modulo = x%y;
document.write('wynik modulo: ', modulo);

//TYPY DANYCH
let a = 10, b = '10a';
console.log(typeof(a)); //zwroci typ // number
console.log(typeof(b));

let prawda = true;
console.log(typeof(prawda));

let nic = null;
console.log(typeof(nic));

let pusta;
console.log(typeof(pusta));

console.log(a + (a%3) - 10);


//SYSTEMY LICZBOWE
let dzisietny = 11; // liczba w systemie dzisiętnym // decymalnym,
let oktalny = 010; //

console.log(oktalny);

let szesnastkowy = 0x10;
console.log(szesnastkowy);

// pobieranie danych od użyszkodnika

let l1 = prompt('Podaj pierwszą liczbę. ');
console.log('Podana 1. liczba z klawiatury: ', l1);

let l2 = prompt('Podaj druga liczbę: ');
console.log('Podana 2. licza z klawiatury', l2);

let sumax = l1 + l2;
console.log('Suma liczb' + l1 + ' i ' + l2 + 'wynosi: ' + sumax);
//połączył stringi

console.log(typeof(l1));
console.log(typeof(l2));

//konwersja typów danych
l1 = parseInt(l1);
l2 = parseInt(l2);

console.log(typeof(l1));
console.log(typeof(l2));
let sumaz = l1 + l2;
console.log('Suma liczb ' + l1 + ' i ' + l2 + ' wynosi: ' + sumaz);

document.write('<br>');
/*
  Suma dwóch liczb zmiennoprzecinkowych
  wyświetl sumę dwóch liczb w formacie: a + b
  2 + 3 = 5
*/

//camelCase --> pierwszaZmienna maszNaImie --> sposób nazywania zmiennych

l1 = parseFloat(prompt('Podaj pierwszą liczbę', 'np 2.5'));
l1 = parseFloat(prompt('Podaj druga liczbę', 'np 2'));
suma = l1 + l2;
document.write(l1 + ' + ' + l2 + ' = ', suma);
