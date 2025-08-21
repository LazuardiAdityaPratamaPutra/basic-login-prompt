alert('Selamat datang di Program Login Sederhana');

var nama = 'user';
var password = '12345';
var ulang = true;
var login = false;

while (ulang){
  var nama = prompt('Masukan Username :');
  var password = prompt('Masukan Password :');

  if (nama === 'user' && password === '12345' ) {
    alert ('Selamat datang, Admin!');
    var login = true;
    ulang = false;
  }else {
    alert ('Username atau Password salah');
    ulang = confirm('Mau coba login lagi?');
  }
}
if(login){
  alert('Login selesai');
}else{
  alert('Login dibatalkan');
}
