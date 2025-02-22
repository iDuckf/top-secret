function MusicStop() {
    let on = document.getElementById("onMusic")
    let off = document.getElementById("offMusic")

    on.style.display = "block"
    off.style.display = "none"

    var audio = document.getElementById("bgMusic");
    audio.pause();
}

function MusicPlay() {
    let on = document.getElementById("onMusic")
    let off = document.getElementById("offMusic")

    on.style.display = "none"
    off.style.display = "block"

    var audio = document.getElementById("bgMusic");
    audio.play();
}

function showHome() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "block"
    form.style.display = "none"
    ucapan.style.display = "none"
}

function showUcapan() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "none"
    form.style.display = "none"
    ucapan.style.display = "block"
}

function showForm() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "none"
    form.style.display = "block"
    ucapan.style.display = "none"
}

function sendMessage() {
    let text = document.getElementById("text").value;
    let phone = "6281383231431"; // Nomor tujuan
    let message = text + " -Dikirim Lewat Birthday Web"
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    let modal = document.getElementById("modal")

    window.open(url, "_blank"); // Membuka WhatsApp di tab baru
    
    text.disabled = false
    let kirim = document.getElementById("kirim").disabled = false
    modal.style.display = "none"
}

function openModal() {
    let text = document.getElementById("text").value;
    let warning = document.getElementById("warning")
    
    if (text == "") {
        warning.innerHTML = "Formnya Jangan Dikosongin Dong 🥹"
    } else {
        let modal = document.getElementById("modal")

        modal.style.display = "block"
        warning.innerHTML = ""
        let text = document.getElementById("text").disabled = true
        let kirim = document.getElementById("kirim").disabled = true
    }
}

window.onload = function () {
    // Klik tombol secara otomatis
    document.getElementById("onMusic").click();

    // Memastikan bahwa musik diputar setelah dimulai
    var audio = document.getElementById("bgMusic");
    if (audio.paused) {
        audio.play();
    }

    // Matikan mute setelah beberapa detik
    setTimeout(function () {
        audio.muted = false;
    }, 1000);  // Menghapus mute setelah 1 detik
};