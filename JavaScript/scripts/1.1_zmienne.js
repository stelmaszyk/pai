let komunikat = document.getElementById(('komunikat'));
komunikat.innerHTML = '<strong>tekst</strong>';
// komunikat.textContent = '<strong>tekst</strong>';
//textContent nie intepretuje HTMLA!

let druzyna = prompt('Podaj druzyne: ');

if (druzyna == 'Lech' || druzyna == 'lech') {
  komunikat.textContent = 'Lech - ekstraklasa ??';
}
else if (druzyna == 'cracovia' || druzyna =='Cracovia') {
  komunikat.textContent = 'Cracovia - Kraków';
}
else {
  komunikat.textContent = 'Poznań!';
}


//pole kwadratu = bok wiekszy od 0!

let elKomKw = document.getElementById('komKwadrat');
let bok = parseFloat(prompt('Podaj długość boku kwadratu'));
if (bok > 0) {
  let pole = bok * bok;
  let obwod = bok * 4;
  let text = '<hr> Pole wynosi: ' + pole + ' cm<sup>2</sup>';
  text += 'Obwód wynosi: ' + obwod + ' cm <br>';
  elKomKw.innerHTML = text;
}
else {
  elKomKw.innerHTML = '<span style="color:red"> Błędne dane! </span> ';
}
