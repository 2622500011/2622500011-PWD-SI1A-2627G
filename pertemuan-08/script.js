function showPage(id) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('profil').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}
showPage('home');