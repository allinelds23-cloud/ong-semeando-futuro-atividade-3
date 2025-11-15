function setupFormValidation() {
    const form = document.getElementById("formCadastro");
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const msgErro = document.getElementById("msgErro");

        if (!nome || !email || !telefone) {
            msgErro.innerText = "Todos os campos são obrigatórios.";
            msgErro.style.display = "block";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            msgErro.innerText = "Digite um email válido!";
            msgErro.style.display = "block";
            return;
        }

        msgErro.style.display = "none";
        alert("Cadastro enviado com sucesso!");
    });
}
