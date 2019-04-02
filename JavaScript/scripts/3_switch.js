//ROBIĘ SPCEJALNE SPAGHETTI

let k = document.getElementById('komunikat');
let x = prompt('Podaj co chcesz obliczyć', 'k - kwadrat / p - prostokąt / t - trójkąt');

let pole, bokA, bokB;

switch (x) {
  case 'k':
    bokA = prompt('Podaj długość boku a');
    pole = bokA * bokA; // przy dodawaniu tylko wazna knwersja
    k.innerHTML = 'Pole kwadratu wynosi: ' + pole + ' cm<sup>2</sup>';
    break;
  case 'p':
    bokA = prompt('Podak długość boku a');
    bokB = prompt('Podak długość boku b');
    pole = bokA * bokB;
    k.innerHTML = 'Pole prostokąta wynosi: ' + pole + ' cm<sup>2</sup>' ;
    break;

  case 't':
    bokA = prompt('podaj długość boku');
    bokB = prompt('podaj wysokóść trójkąta');
    pole = (bokA * bokB * 0.5);
    k.innerHTML = 'Pole trójkąta wynosi: ' + pole + ' cm<sup>2</sup>';
    break;
  default: k.innerHTML = '<span style="color:red"> Błędna opcja </span>';
  break;
}


/*
if (x == 'k') {
  bokA = prompt('Podaj długość boku a');
  pole = bokA * bokA; // przy dodawaniu tylko wazna knwersja
  k.innerHTML = ('Pole kwadratu wynosi: ' + pole + ' cm<sup>2</sup>');
} else if (x == 'p') {
  bokA = prompt('Podak długość boku a');
  bokB = prompt('Podak długość boku b');
  pole = bokA * bokB;
  k.innerHTML('Pole prostokąta wynosi: ' + pole + ' cm<sup>2</sup>');
} else if (x == 't') {
  bokA = prompt('podaj długość boku');
  bokB = prompt('podaj wysokóść trójkąta');
  pole = (bokA * bokB * 0.5);
  k.innerHTML = 'Pole trójkąta wynosi: ' + pole + ' cm<sup>2</sup>';
} else {
  window.alert('Wybrana funkcja nie istnieje... ');
}*/
