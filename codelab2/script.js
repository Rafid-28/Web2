function validate() {
  var nama = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama === "" || email === "" || alamat === "") {
    alert("Anda harus mengisi data dengan lengkap!!");
  } else {
    alert("Data berhasil ditambahkan!");
  }
}
