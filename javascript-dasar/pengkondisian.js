var x = prompt("Masukan Angka :");
// alert("selamat datang " + nama);

if (x % 2 == 0) {
  alert(x + " bilangan genap");
} else if (x % 2 == 1) {
  alert(x + " bilangan ganjil");
} else {
  alert("data bukan angka");
}

if (confirm("Apakah anda manusia ?")) {
  location = "http://google.com";
} else {
  alert("anda dipenjara");
}
