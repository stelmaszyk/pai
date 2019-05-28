<?php
  if (isset($_POST['przycisk'])) {
    if (!empty($_POST['nazwa']) && !empty($_POST['cena'])) {
      $nazwa = $_POST['nazwa'];
      $cena = $_POST['cena'];
      echo $nazwa, $cena;

      $polaczenie = new mysqli('localhost', 'root', '', 'weterynarz');
    //  $polaczenie->set_charset('utf8');

    if (!polaczenie->connect_errno) {
      $polaczenie->set_charset('utf8';
      $sql = 'INSERT INTO uslugi (id, nazwa, cena) VALUES (NULL, "'.$nazwa'"", "@cena'.'")';
    }

    if($rezultat = $polaczenie->query(sql)) {
      echo 'ok';

    } else echo 'Bledne zapytanie';
      echo 'Error: ', $polaczenie->connect_error;
      // 0 - brak błędu
      // 2002 - serwer
      // 1044 - user
      //1045 - password
      //1049 -- databases
    }
    else {
      header('location: ../weterynarz.php?dodajUsluge=');
    }

  } else {
    header('location: ../weterynarz.php');

  }
 ?>
