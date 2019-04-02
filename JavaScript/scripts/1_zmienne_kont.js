let i = prompt('Podaj swoje imię', 'np. Jacek');
let j = prompt('Podaj swoje nazwisko', 'np. Kowalski');

dane = '<hr>Imię: <span style="color:red">' + i;

document.write(dane);

dane += '</span>, nazwisko: <span style="color:blue">' + j + '</span>';

document.write(dane);
