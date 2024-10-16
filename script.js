// Pesan selamat datang saat halaman dimuat
function welcomeMessage() {
    alert("Selamat datang di halaman Kontak Kami!");
}

// Mode Gelap/Terang dengan Ikon
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("darkModeIcon");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-brightness-high");
    } else {
        icon.classList.remove("bi-brightness-high");
        icon.classList.add("bi-moon");
    }
}

// Menampilkan Waktu Sekarang
function displayTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = "Waktu sekarang: " + timeString;
}
setInterval(displayTime, 1000); // Update waktu setiap 1 detik

// Ganti gambar saat diklik
function changeImage() {
    const image = document.getElementById("starbucksImage");
    if (image.src.includes("STARBUCKS.jpg")) {
        image.src = "images/STARBUCKS2.jpg"; // Ganti dengan gambar lain
    } else {
        image.src = "images/STARBUCKS.jpg"; // Kembali ke gambar awal
    }
}

// Validasi form kontak
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Semua bidang harus diisi!");
        return false; // Mencegah pengiriman form
    }
    return true; // Mengizinkan pengiriman form
}

// Tombol Scroll ke Atas
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
