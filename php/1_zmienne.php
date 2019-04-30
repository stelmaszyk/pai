<?php
  $liczba = 10;
  $_liczba = 10;
  $imie_ = 10;
  $Imie = 10; //case sensitive!
  $wartość = 10; //zadziałają zmienne z polskimi znakami, UNIKAĆ!

  echo $liczba;
  echo "$liczba";

  //TYPY ZMIENNYCH
  //typy skalarne (proste)

  //typ boolean
  $prawda = true;
  $falsz = false;

  //typ integer
  $calkowita = 200;
  $szesnastkowa = 0xA;
  $osemkowa = 020;
  $binarna = 0b1010;

  echo $binarna;

  // typ float
  $zmiennoprzecinkowa = 5.25;
  $text = 'tekst';
  $text = "tekst"; //bez różnicy

  //składnia heredoc --> wyciąganie danych z bazy i takie tam gówna złączki
  $imie = 'Janusz';

  $napis = <<<TEKST
    <br> Mam na imie $imie
TEKST;
//ŻADNYCH SPACJI W POCZĄTKU I KOŃCU HEREDOCA
  echo $napis;

  //SKŁADNIA NOWDOC
    $nazwisko = 'Nowak'; //Jeśli wrzucię w cudzytsłowie to zostanie odnośnik o zmiennej potraktowany jako tekst
    $tekst = <<<'Etykieta'
    <br> <hr>Moje nazwisko: $nazwisko
Etykieta;
  echo $tekst;

  //typ złożony
    //typ array (tablicowy)
    //typ object (obiektowy)

  //typ specjalny
    //typ resource
    //typ null
    $inna = null;
    $inna1 = NULL;

    echo "<br>Zmienna o nazwie \$inna ma wartość: ",$inna;
 ?>
