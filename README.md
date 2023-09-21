# tarihler-arasi-hesaplama
let hesapla = document.getElementById("hesap");

hesapla.onclick = () => {
    // Şimdiki Tarihin DOM Şeklindeki Kodları
    let simdiGun = Number(document.getElementById("smdGun").value);
    let simdiAy = Number(document.getElementById("smdAy").value);
    let simdiYil = Number(document.getElementById("smdYil").value);

    // Geçmiş Tarihin DOM Şeklindeki Kodları
    let gecmisGun = Number(document.getElementById("gcmGun").value);
    let gecmisAy = Number(document.getElementById("gcmAy").value);
    let gecmisYil = Number(document.getElementById("gcmYil").value);

    // Tarih Hesaplama JS Kodları
    let sonuc = ((simdiYil - gecmisYil) * 365) + ((simdiAy - gecmisAy) * 30) + (simdiGun - gecmisGun);

    let sonucGun = document.getElementById("sonucGun"); 
    sonucGun.innerHTML = sonuc;
}
