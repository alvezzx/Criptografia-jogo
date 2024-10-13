const correctWord = "a queda do muro de berlim"; // Frase original correta
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const feedback = document.getElementById("feedback");

// Função para verificar a tentativa
function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase(); // Converte a entrada para minúsculas
    if (userGuess === correctWord) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Tente novamente.";
        feedback.style.color = "red";
    }
    guessInput.value = ""; // Limpa o campo de entrada
}

// Adiciona um listener para o botão de enviar
submitButton.addEventListener("click", checkGuess);

// Adiciona um listener para a tecla Enter
guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});
