const text = "MARDIANSYAH"; // Ganti nama lu di sini
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150); // Kecepatan ngetik
    }
}

document.addEventListener("DOMContentLoaded", type);