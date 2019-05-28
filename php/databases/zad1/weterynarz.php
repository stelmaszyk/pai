<!DOCTYPE html>
<html lang="pl" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>WETERYNARZ</title>
    <link rel="stylesheet" href="./weterynarz.css">
  </head>
  <body>
    <div id="baner">    </div>
    <div id="left">
        <h2>PSY</h2>
        <table>
          <tr>
            <th>id</th>
            <th>imie</th>
            <th>wlasciciel</th>
          </tr>
        <!-- skrypt1 -->
        <?php
          //połączenie z serwerem
          if ($polaczenie = mysqli_connect('localhost', 'root', '')){
            echo 'Prawidlowe polaczenie z serwerem';
          }
          else  {
            echo 'Błęde połączenie z serwerem. ';
          }

          //połączenie z bazą danych
          if (mysqli_select_db($polaczenie, 'weterynarz')) {
            echo 'Prawidłowe połączenie z bazą danych.';
          } else echo 'Błąd połączenia z bazą danych.';

          $zapytanie = 'select id, imie, wlasciciel from zwierzeta where rodzaj=1';

          if ($rezultat = mysqli_query($polaczenie, $zapytanie)) {
            echo 'Zapytanie prawidłowe';
          } else echo 'Zapytanie nieprawidłowe.';

          //WYŚWIETLENIE ZAPYTANIA
          while ($wiersz = mysqli_fetch_assoc($rezultat)) {
            echo <<<WIERSZ
            <tr>
              <td>$wiersz[id];</td>
              <td> $wiersz[imie];</td>
              <td>$wiersz[wlasciciel];</td>
            </tr>
            <br>
WIERSZ;
          }

         ?>

         </table>

         <h2>Koty

           <h2>PSY</h2>
           <table>
             <tr>
               <th>id</th>
               <th>imie</th>
               <th>wlasciciel</th>
             </tr>
           <!-- skrypt1 -->
           <?php
             //połączenie z serwerem
             if ($polaczenie = mysqli_connect('localhost', 'root', '')){
               echo 'Prawidlowe polaczenie z serwerem';
             }
             else  {
               echo 'Błęde połączenie z serwerem. ';
             }

             //połączenie z bazą danych
             if (mysqli_select_db($polaczenie, 'weterynarz')) {
               echo 'Prawidłowe połączenie z bazą danych.';
             } else echo 'Błąd połączenia z bazą danych.';

             $zapytanie = 'select id, imie, wlasciciel from zwierzeta where rodzaj=2';

             if ($rezultat = mysqli_query($polaczenie, $zapytanie)) {
               echo 'Zapytanie prawidłowe';
             } else echo 'Zapytanie nieprawidłowe.';

             //WYŚWIETLENIE ZAPYTANIA
             while ($wiersz = mysqli_fetch_assoc($rezultat)) {
               echo <<<WIERSZ
               <tr>
                 <td>$wiersz[id];</td>
                 <td> $wiersz[imie];</td>
                 <td>$wiersz[wlasciciel];</td>
               </tr>
               <br>
WIERSZ;
             }

            ?>

            </table></h2>
    </div>
    <div id="center">
      <h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>
      <!-- skrypt 3 -->
      <?php
      if ($polaczenie = mysqli_connect('localhost', 'root', '')){
        echo '';
      }
      else  {
        echo 'Błęde połączenie z serwerem. ';
      }

      //połączenie z bazą danych
      if (mysqli_select_db($polaczenie, 'weterynarz')) {
        echo '';
      } else echo 'Błąd połączenia z bazą danych.';

      //kodowanie znaków utf-8
      mysqli_set_charset($polaczenie, 'utf8');

      $zapytanie = 'SELECT imie, telefon, szczepienie, opis from zwierzeta';
      if ($rezultat = mysqli_query($polaczenie, $zapytanie)) {
        echo '';
      } else echo 'Zapytanie nieprawidłowe.';

    while ($wiersz = mysqli_fetch_assoc($rezultat)) {
      echo <<<WIERSZ
      <b> Pacjent: $wiersz[imie]; <br> </b>
      Telefon właściciela: $wiersz[telefon], ostatnie szczepienie: $wiersz[szczepienie], informacje: $wiersz[opis]
      <hr>
WIERSZ;

    }

      ?>
    </div>
    <div id="right">
        <h2>DODANIE USŁUGI DO BAZY WETERYNARZ</h2>


        <?php
          if (isset($_GET['dodajUsluge'])) {

        ?>

        <form action="./skrypty/dodajUsluge.php" method="post">
          <input name="nazwa" placeholder="nazwa"> <br>
          <input type="number" name="number" placeholder="Cena"> <br>
          <input type="Submit" name="przycisk" placeholder="Dodaj usługę"> <br>

        </form>
        <?php
      } else { echo '<a href="./weterynarz.php?dodajUsluge=1">Dodaj usługę</a>'; }

      if (isset($_GET['dodanieUslugi'])) {
        if ($_GET['dodanieUslugi'] == 1) {
          echo "<h4>Prawidłowo dodano nową usługę do bazy danych</h4>";
        } else echo "<h4>Dodanie nowej usługi zakończyło się błedem.";
      }?>
    </div>
  </body>
</html>
