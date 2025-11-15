/* ===========================================
   ONG Semeando o Futuro - Entrega III SPA
   =========================================== */

// Função principal de navegação
function navegar(pagina) {
  if (pagina === "home") {
    carregarHome();
  } else if (pagina === "cadastro") {
    carregarCadastro();
  } else if (pagina === "projetos") {
    carregarProjetos();
  }
}

// Carregar página inicial
function carregarHome() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <h2>Bem-vindo à ONG Semeando o Futuro</h2>
    <p>Nossa missão é transformar vidas através da solidariedade e da educação.</p>
  `;
}

// Carregar página de cadastro
function carregarCadastro() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <h2>Cadastro de Voluntário</h2>
    <form id="cadastroForm">
      <label>Nome:</label>
      <input type="text" id="nome" placeholder="Digite seu nome">
      <label>Email:</label>
      <input type="email" id="email" placeholder="Digite seu email">
      <label>Telefone:</label>
      <input type="tel" id="telefone" placeholder="Digite seu telefone">
      <button type="submit">Enviar</button>
      <p id="mensagem"></p>
    </form>
  `;

  const form = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (!nome || !email || !telefone) {
      mensagem.textContent = "⚠️ Por favor, preencha todos os campos.";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "✅ Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
    form.reset();
  });
}

// Carregar página de projetos
function carregarProjetos() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <h2>Projetos Atuais</h2>
    <ul>
      <li>🌱 Projeto Verde Vida - Educação ambiental nas escolas</li>
      <li>💻 Inclusão Digital - Aulas de informática para jovens</li>
      <li>📚 Leitura Solidária - Doação de livros e reforço escolar</li>
    </ul>
  `;
}

// Quando a página carregar, mostrar o "home" por padrão
window.onload = carregarHome;
