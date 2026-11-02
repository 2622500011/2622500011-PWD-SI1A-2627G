function showPage(id) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('profil').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}
showPage('home');

function kirimBukuTamu() {
    let nama = document.querySelectorAll('input[type="text"]')[0].value;
    let email = document.querySelectorAll('input[type="text"]')[1].value;

    if(nama == ""){
        alert("Nama lengkap harus diisi");
        return false;
    }
    if(email === "") {
        alert("Email harus diisi");
        return false;
    }

    alert("Terima kasih telah mengisi buku tamu", "Pesan kamu sudah kekirim ke Dapur Manis 07");
    return false;
    }