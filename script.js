
function responder(correto) {
    const resultado = document.getElementById("resultado");

    if (correto) {
        resultado.textContent =
            "Parabéns! Resposta correta! A IA deve ser usada para aprender.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "Ops! Tente novamente. Utilize a IA com consciência!";
        resultado.style.color = "red";
    }
}
