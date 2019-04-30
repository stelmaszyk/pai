<?php
  $potega = 2**10; //** - potęga
  $modulo = 11%3;

//operatory bitowe
// and &, or | , not ~, xor ^

    $dziesiec = 0b1010;
    echo $dziesiec, '<br>';

    $x = $dziesiec >> 1;
    echo "$x<br>";

    $y = $dziesiec << 2;
    //101000 = 8 + 32 = 40;
    echo "$y<br>";

//operatory logiczne
  //and, or, xor, !, &&, ||

//operatory relacyjne
  // ==, ===, <>, !=, !==, >, <, <=, >=, <=>

  $a = 1;
  $b = 2;
  $c = '1';
  $d = 1;

  echo "<br>";
  $wynik = $a == $c; //1
  $wynik = $a === $c; //false
  $wynik = $a === $d; //1
  $wynik = $a <> $d; //false (puste pole)
  $wynik = $a <> $b; //1
  $wynik = $a !== $d; //false;
  $wynik = $a == $c; //1

  echo $wynik;

  $a = 11;
  $b = '11';
  $wynik = $a <=> $b;
  echo "<hr> $wynik <hr>";

#########################
  $a = 1.0;
  $b = 1;
  if ($a === $b) {
    echo 'Równe';
  } else 'Rożne';

  echo gettype($a);
  echo gettype($b);

  #########################

  $x = 2;
  echo $x++;//
  echo ++$x;//
  echo $x;//
  $y = $x++;
  echo $y;//
  $y = ++$x;
  echo $y;//
  echo ++$y, '<hr>';//

  #########################
  //OPERATORY RZUTOWANIA.
  //bool, int, float, string, array, object, unset
    $tekst1 = '4ssd';
    $tekst2 = 'Drugi tekst';
    $tekst3 = '7';
    $liczba  = 15;
    $j = -1;
    $c = 100;
    $i = 0;

    $dwa = (int)$tekst1; //ucina litery, jak widzi liczbe, to reszte usuwa.
    echo $dwa; echo '<br>';
    echo gettype($dwa);
    echo gettype($tekst1);

    $j = (bool)$j;
    echo $j; //1, true;
    echo $i; //0, false

    echo '<br>';
    $c = (unset)$c;
    echo $c;
    echo gettype($c);

  #########################
echo '<hr>';
  echo PHP_INT_SIZE, '<hr>'; //zmienna superglobalna, 8

  #########################

  $tekst = 'szkola';
  $x = 10;
  $a = 20.5;
  $y = true;
  $z = null;
  $w;
  echo gettype($tekst);echo '<hr>';
  echo gettype($x);echo '<hr>';
  echo gettype($a);echo '<hr>';
  echo gettype($y);echo '<hr>';
  echo gettype($z);echo '<hr>';
  echo gettype($w);echo '<hr>'; // Notice: Undefined Variable

  #########################

  //zmienne superglobalne
  // $_POST, $_GET, $_COOKIE, $_FILES, $_SESSION, $_SERVER
  echo $_SERVER['SERVER_PORT'], '<br>'; //8060
  echo $_SERVER['SERVER_PROTOCOL'], '<br>'; //HTTP/1.1
  echo $_SERVER['SCRIPT_NAME'], '<br>'; //Ścieżka bezwzględna /php/2_operacje_na_zmiennych.php
  echo $_SERVER['DOCUMENT_ROOT'], '<br>'; //ścieżka względna /opt/lampp/htdocs
  $lokalPliku = $_SERVER['DOCUMENT_ROOT'];
  $lokalPliku .= $_SERVER['SCRIPT_NAME']; // kropka - konkatenacja
  echo $lokalPliku; //dokładna lokalizacja pliku.
 ?>
