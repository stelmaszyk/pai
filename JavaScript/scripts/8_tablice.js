//tworzenie tablicy za pomocą literału

let kolory = ['czerwony', 'czerwony', 'niebieski'];
console.log(kolory[0]); // czerwony

//konstruktor Array
let cars = new Array('BMW', 'Ferrari', 'McLaren', 'Maluch');
console.log('Last car: ', cars[cars.length-1]); // Maluch

//dodanie do tablicy
cars.push('Polonez');
console.log(`Number of elemets in array: ${cars.length}`);
console.log(`Last car: ${cars[cars.length-1]}`);

//TABLICE WIELOWYMIAROWE
let tab = new Array(
  new Array('Janusz', 'Nowak', 'Poznań'),
  new Array('Jarosław', 'Kaczyński', 'Smoleńsk'),
  new Array('Anna', 'Nowakowska', 'Sosnowiec')
);
console.log(tab[0]);
console.log(tab[2][2]); // tablica druga, element 2

// sortowanie
let imiona = ['Julia', 'Anna', 'Paweł', 'Krzysztof'];
console.log(imiona);
let posortowane = imiona.sort(); // sortowanie wg tablicy ASCII
console.log(posortowane);
let odwrotnosc = imiona.reverse(); // sortowanie wsteczne wg tablicy ASCII
console.log(odwrotnosc);

console.log(odwrotnosc.indexOf('Julia'));; // 2 pozycja (3, bo od zera) w tablicy od tylu.
console.log(odwrotnosc.indexOf('Motherfucker')) ; // -1 oznacza, że taki element nie istnieje w tablicy

odwrotnosc.pop(); // usunięcie ostatniego elementu tablicy
console.log(odwrotnosc);
imiona.push('Agnieszka');
console.log(odwrotnosc);

odwrotnosc.unshift('pierwszy'); // dodaję na początek tablicy
console.log(odwrotnosc);

//----
//tablica z liczbami
let numbers = [1, 3, 30, 150, -10, 1450, 2137];
console.log(numbers);
let numbersSort = numbers.sort();
console.log(numbers);

//funkcja sortująca liczby
numbers.sort(function(a, b){
  return (a - b);
})
console.log(numbers);
