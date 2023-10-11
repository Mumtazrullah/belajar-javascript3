//Function merubah nilai dari suhu Celcius ke Farenheit
console.log("Fungsi merubah nilai dari suhu Celcius ke Farenheit")
function konversi(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Penggunaan fungsi:
  var Celsius = 30;
  var Fahrenheit = konversi(    Celsius);
  console.log(Celsius + " derajat Celsius = " + Fahrenheit + " derajat Fahrenheit.");
  
// Membuat array yang berisi objek-objek
console.log("\nMembuat array yang didalamnya ada objek")
var siswa = [
    { id: 1, nama: 'Tatang Setang', umur: 16, kelas: '11 RPL 2' },
    { id: 2, nama: 'Albert Eisntein', umur: 14, kelas: '11 RPL 1' },
    { id: 3, nama: 'John Wick', umur: 16, kelas: '11 RPL 2' },
    { id: 4, nama: 'Toni Walker', umur: 14, kelas: '11 RPL 3' }
];

// Contoh akses elemen di dalam array
console.log("Nama siswa pertama:", siswa[0].nama);
console.log("Kelas siswa kedua:", siswa[1].kelas);

// Menambahkan objek ke dalam array
var siswaBaru = { id: 5, nama: 'Enderson', umur: 16, kelas: '11 RPL 5' };
siswa.push(siswaBaru);

// Mengubah nilai objek dalam array
siswa[2].kelas = '11 RPL 4';

// Menghapus objek dari array berdasarkan indeks
var indeksHapus = 1; // Contoh: menghapus siswa kedua (indeks 1)
siswa.splice(indeksHapus, 1);

// Menampilkan seluruh siswa dalam array
console.log("Data Seluruh Siswa:");
for (var i = 0; i < siswa.length; i++) {
    console.log("ID:", siswa[i].id, "Nama:", siswa[i].nama, "Umur:", siswa[i].umur, "Kelas:", siswa[i].kelas);
}

