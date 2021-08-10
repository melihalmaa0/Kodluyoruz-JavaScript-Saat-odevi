let userName1 = prompt("Lütfen adınızı giriniz..");
userName = document.querySelector("#userName")
userName.innerHTML = userName1;

function clock () {
    let saat = document.getElementById('saat');
    let dakika = document.getElementById('dakika');
    let saniye = document.getElementById('saniye');

    let s = new Date().getHours();
    let d = new Date().getMinutes();
    let ss = new Date().getSeconds();
    saat.innerHTML = s;
    dakika.innerHTML = d;
    saniye.innerHTML = ss;
}
let interval = setInterval(clock, 100);

let g = new Date().getDay();
if (g == 0) {
    gun.innerHTML = "Pazar"
}
else if (g == 1) {
    gun.innerHTML = "Pazartesi"
}
else if (g == 2) {
    gun.innerHTML = "Salı"
}
else if (g == 1) {
    gun.innerHTML = "Çarşamba"
}
else if (g == 1) {
    gun.innerHTML = "Perşembe"
}
else if (g == 1) {
    gun.innerHTML = "Cuma"
}
else if (g == 1) {
    gun.innerHTML = "Cumartesi"
}
