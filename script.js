document.getElementById("mostrarMensagem").addEventListener("click", function() {
    document.getElementById("mensagem").style.display = "block"; // Mostra a mensagem
    this.style.display = "none"; // Esconde o botão
});