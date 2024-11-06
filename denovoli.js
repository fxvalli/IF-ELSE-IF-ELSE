// Exercício 1: toUpperCase, toLowerCase
function formatarNome(nomeCompleto) {
    const nomeMaiusculas = nomeCompleto.toUpperCase();
    const nomeMinusculas = nomeCompleto.toLowerCase();
    
    console.log("Nome em maiúsculas:", nomeMaiusculas);
    console.log("Nome em minúsculas:", nomeMinusculas);
}

// Exemplo de uso
formatarNome("João da Silva");

// Exercício 2: includes, indexOf
function verificarLetra(frase) {
    const letra = 'a';
    
    if (frase.includes(letra)) {
        const posicao = frase.indexOf(letra);
        console.log(`A letra "${letra}" foi encontrada na posição: ${posicao}`);
    } else {
        console.log(`A letra "${letra}" não foi encontrada na frase.`);
    }
}

// Exemplo de uso
verificarLetra("Essa é uma frase de exemplo.");

// Exercício 3: slice
function cortarTexto(texto, inicio, fim) {
    const trecho = texto.slice(inicio, fim);
    console.log("Trecho selecionado:", trecho);
}

// Exemplo de uso
cortarTexto("Esta é uma notícia importante sobre tecnologia.", 10, 34);

// Exercício 4: concat
function concatenarMensagens(mensagem1, mensagem2) {
    const mensagemConcatenada = mensagem1.concat(' ', mensagem2);
    console.log("Mensagem concatenada:", mensagemConcatenada);
}

// Exemplo de uso
concatenarMensagens("Olá, como você está?", "Espero que esteja bem!");

// Exercício 5: replace
function substituirPalavra(frase, palavraAntiga, palavraNova) {
    const fraseModificada = frase.replace(new RegExp(palavraAntiga, 'g'), palavraNova);
    console.log("Frase modificada:", fraseModificada);
}

// Exemplo de uso
substituirPalavra("A maçã é a fruta preferida dela.", "maçã", "banana");

// Exercício 6: split, join
function formatarPalavras(frase) {
    const palavras = frase.split(' ');
    const palavrasComHifen = palavras.join('-');
    console.log("Palavras formatadas:", palavrasComHifen);
}

// Exemplo de uso
formatarPalavras("Produto em promoção disponível agora");

// Exercício 7: push, pop
function gerenciarFila() {
    const fila = [];

    // Adicionando cinco números (senhas)
    fila.push(101);
    fila.push(102);
    fila.push(103);
    fila.push(104);
    fila.push(105);
    console.log("Fila após adicionar senhas:", fila);

    // Removendo a última senha
    const senhaRemovida = fila.pop();
    console.log("Senha removida:", senhaRemovida);
    console.log("Fila após atendimento:", fila);
}

// Exemplo de uso
gerenciarFila();

// Exercício 8: Classificação de Alunos por Rendimento
function classificarAluno(media) {
    if (media >= 8) {
        console.log("Classificação: Excelente");
    } else if (media >= 6) {
        console.log("Classificação: Bom");
    } else {
        console.log("Classificação: Precisa Melhorar");
    }
}

// Exemplo de uso
classificarAluno(7.5); // Classificação: Bom
classificarAluno(8.2); // Classificação: Excelente
classificarAluno(5.9); // Classificação: Precisa Melhorar

// Exercício 9: Cálculo de Desconto para Curso de Extensão
function calcularDescontoCurso(maticulado, valorCurso) {
    let valorFinal = valorCurso;

    if (maticulado) {
        valorFinal *= 0.8; // Aplicando 20% de desconto
    }

    console.log(`Valor final do curso: R$ ${valorFinal.toFixed(2)}`);
}

// Exemplo de uso
calcularDescontoCurso(true, 500);  // Valor final do curso: R$ 400.00
calcularDescontoCurso(false, 500); // Valor final do curso: R$ 500.00

// Exercício 10: Sistema de Avaliação de Projetos
function avaliarProjeto(funcionalidade, design, documentacao) {
    const media = (funcionalidade + design + documentacao) / 3;

    let avaliacao;
    if (media >= 8) {
        avaliacao = "Excelente";
    } else if (media >= 6) {
        avaliacao = "Bom";
    } else {
        avaliacao = "Precisa Melhorar";
    }

    console.log(`Avaliação final: ${avaliacao} (Média: ${media.toFixed(2)})`);
}

// Exemplo de uso
avaliarProjeto(9, 8, 7); // Avaliação final: Bom (Média: 8.00)

// Exercício 11: Verificação de Frequência e Notas para Aprovação
function verificarAprovacao(media, frequencia) {
    if (media >= 6 && frequencia >= 75) {
        console.log("Aluno aprovado!");
    } else if (media >= 4 && media < 6) {
        console.log("Aluno em recuperação.");
    } else {
        console.log("Aluno reprovado.");
    }
}

// Exemplo de uso
verificarAprovacao(5.5, 80); // Aluno em recuperação.
verificarAprovacao(6.5, 70); // Aluno reprovado.
verificarAprovacao(7.5, 76); // Aluno aprovado!

// Exercício 12: Controle de Acessos ao Laboratório de Informática
function controleAcesso(cartaoPossui, cartaoAtivo) {
    if (cartaoPossui) {
        if (cartaoAtivo) {
            console.log("Acesso permitido ao laboratório.");
        } else {
            console.log("Acesso negado: cartão inativo.");
        }
    } else {
        console.log("Acesso negado: cartão não encontrado.");
    }
}

// Exemplo de uso
controleAcesso(true, true);  // Acesso permitido ao laboratório.
controleAcesso(true, false); // Acesso negado: cartão inativo.
controleAcesso(false, true); // Acesso negado: cartão não encontrado.

// simulador_desempenho.js

const notas = Array.from({ length: 3 }, () => (Math.random() * 10).toFixed(2));
const media = notas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / 3;
console.log(`Notas: ${notas}, Média: ${media.toFixed(2)}`);
console.log(media >= 6 ? "Aprovado!" : media >= 4 ? "Recuperação." : "Reprovado.");
