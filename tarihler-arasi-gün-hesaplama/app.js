// const guncelYil = Number(prompt("Güncel Yıl: "));
// const guncelAy = Number(prompt("Güncel Ay: "));
// const guncelGun = Number(prompt("Güncel Gun: "));

// const gecmisYil = Number(prompt("Gecmis Yil: "));
// const gecmisAy = Number(prompt("GecmisAy: "));
// const gecmisGun = Number(prompt("GecmisGun: "));

// const toplamGun = ((guncelYil-gecmisYil) * 365) + ((guncelAy-gecmisAy) *30) + (guncelGun-gecmisGun);

// console.log("Tarihlar Arası Geçen Gün Sayısı = ", toplamGun);

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