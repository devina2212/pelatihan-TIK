// 1. pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventlistener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('hal0! Terima kasih sudah berkunjung!');
});
