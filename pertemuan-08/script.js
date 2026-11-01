function showPage(id){
  document.getElementById('home').style.display='none';
  document.getElementById('menu').style.display='none';
  document.getElementById('profil').style.display='none';
  document.getElementById('bukutamu').style.display='none';
  document.getElementById(id).style.display='block';
}

// pas pertama buka, yang muncul cuma home
showPage('home');