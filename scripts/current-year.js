function updateCurrentYear() {
    var annoCorrente = new Date().getFullYear();
    document.getElementById("currentYear").textContent = annoCorrente;
}

// Chiamare la funzione all'avvio della pagina
window.onload = function() {
    updateCurrentYear();
};