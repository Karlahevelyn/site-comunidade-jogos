// Array para armazenar os comentários
const comentarios = [];

// Função para adicionar um novo comentário
function adicionarComentario(nome, texto) {
    const comentario = {
        nome,
        texto,
        data: new Date(),
    };
    comentarios.push(comentario);
    atualizarListaComentarios();
}

// Função para atualizar a lista de comentários
function atualizarListaComentarios() {
    const listaComentarios = document.getElementById("lista-comentarios");
    listaComentarios.innerHTML = "";
    for (const comentario of comentarios) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${comentario.nome}</strong> - ${comentario.data.toLocaleString()}<br>
            ${comentario.texto}
        `;
        listaComentarios.appendChild(li);
    }
}

// Registrar evento de submit do formulário
const formComentario = document.getElementById("form-comentario");
formComentario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const texto = event.target.texto.value;
    adicionarComentario(nome, email, texto);
});

// Exibir comentários iniciais (se houver)
atualizarListaComentarios();