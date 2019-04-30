<?php
  define('PI', 3.14159);
  echo PI, '<br>';

  const NARODOWOSC = 'polska';
  echo NARODOWOSC, '<br>';

  define('WIEK', 22, true);
  echo WIEK; //define nie jest case-sensitive

  /* Utwórz zmienne:
    imie, nazwisko oraz stałe: miasto, kraj (przypisz swoje dane).
    Wykorzystaj do wyświetlenia heredoca
    Wyświetl na ekranie w formacie:
    Imię: <imie>
    Nazwisko: <nazwisko>
    Miasto: <miasto>, kraj: <kraj>
    */

    //const i define to stałe!
  $imie = 'Tadeusz';
  $nazwisko = 'Rydzyk';
  const MIASTO = 'Toruń';
  define('KRAJ', 'Polska');

  $napis = <<<dane
  <br>Imię: $imie
  <br>Nazwisko: $nazwisko <br>

dane;
//stałych w heredoc nie wstawisz!
  echo $napis;
  echo 'Miasto: ', MIASTO, ', Kraj: ', KRAJ;
  echo '<br>';
  echo 'Wersja PHP, ', PHP_VERSION;
  echo '<br>Typ: ', gettype(PHP_VERSION);

  $ver = PHP_VERSION;
  if ($ver > 7.0)
  {
    echo "Nowa wersja PHP";
  } else echo "Stara Wersja PHP"; //klamra niekonieczna
 ?>
