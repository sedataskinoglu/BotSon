// giriskayitol.html sayfasının içindeki script kısmına:
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın hemen yenilenmesini durdurur

    // Mesajı göster
    alert("Hoş geldiniz İmren! Botaniva ana sayfasına yönlendiriliyorsunuz.");

    // Ana sayfaya (index.html) geri gönder
    // Dosya konumuna göre yol: bir üst klasöre çık ve index.html'i bul
    window.location.href = "../index.html"; 
});
function loginFunc() {
    // Şık bir mesaj göster
    alert("Hoş geldiniz İmren! Botaniva ana sayfasına yönlendiriliyorsunuz.");

    // Ana sayfaya yönlendir
    // Eğer bu dosya 'pages' klasörü içindeyse '../index.html' yazmalısın
    window.location.href = "../index.html"; 
}