/*
  użytkownik podaje z klawiatury hasło w polu input
  Jeśli poda błędne haslo, to wyświetli się alert o treści "błędne hasło".
  USer bedzie pytany do momentu podania prawidłowego hasła: 'okoń'

  Wykorzystaj pętlę while*/
let elHaslo = document.getElementById('pwd')

let elButton = document.getElementById('przycisk');

let haslo, komunikat;


//WHILE
/*pass = prompt('Podaj hasło');
while(pass != 'okoń'){
  pass = prompt('Podaj ponownie hasło');
}*/

//DO while
do {
  pass = prompt('Podaj ponownie hasło');
} while (pass != 'okoń');

elButton.addEventListener('click', wyswietl);
