const Templates = {

    home: `
        <section class="home">
            <h2>Bem-vindo à ONG Semeando o Futuro</h2>
            <p>Trabalhamos para transformar vidas através da educação e solidariedade.</p>
        </section>
    `,

    sobre: `
        <section class="sobre">
            <h2>Sobre Nós</h2>
            <p>A ONG Semeando o Futuro atua promovendo ações sociais, cursos, eventos e apoio a famílias.</p>
        </section>
    `,

    projetos: `
        <section class="projetos">
            <h2>Projetos</h2>
            <ul>
                <li>Aulas de reforço escolar</li>
                <li>Campanhas de alimentação</li>
                <li>Oficinas de tecnologia</li>
            </ul>
        </section>
    `,

    cadastro: `
        <section class="cadastro">
            <h2>Cadastro</h2>

            <form id="formCadastro">

                <label>Nome</label>
                <input type="text" id="nome" placeholder="Seu nome">

                <label>Email</label>
                <input type="email" id="email" placeholder="email@exemplo.com">

                <label>Telefone</label>
                <input type="text" id="telefone" placeholder="(00) 00000-0000">

                <button type="submit">Enviar</button>

                <p id="msgErro" style="color:red; display:none; margin-top:10px;"></p>
            </form>
        </section>
    `
};
