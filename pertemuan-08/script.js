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

    form.reset();
    tampilkanpesan();

    document.getElementById("ucapanTerimaKaih").textContent = 
    "terimakasih sudah memesan di warung kami, pesanan kamu akan segera kami proses.";

}

/* Menampilkan pesan yang sudah terkirim */
tampilkanpesan();