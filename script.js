function gerarSenha() {
    // Pegar o tamanho que o usuário escolheu
    let tamanho = parseInt(document.getElementById('tamanho').value);
    
    // Todos os caracteres que o sistema pode usar (Total: 84 opções)
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    const baseOpcoes = caracteres.length; // 84

    let senhaGerada = "";

    // Sorteia os caracteres um por um usando a matemática do computador
    for (let i = 0; i < tamanho; i++) {
        let indiceAleatorio = Math.floor(Math.random() * baseOpcoes);
        senhaGerada += caracteres[indiceAleatorio];
    }

    // Calcula o total de combinações possíveis (Base elevada ao expoente do Tamanho)
    let totalCombinacoes = Math.pow(baseOpcoes, tamanho);

    // Exibe o resultado na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Senha Gerada:</strong> <code style="background: #222; padding: 5px; border-radius: 3px; color: #00ffcc;">${senhaGerada}</code></p>
        <p>Esta senha foi gerada combinando um 'alfabeto' de ${baseOpcoes} caracteres.</p>
        <p><strong>Total de combinações possíveis:</strong> ${totalCombinacoes.toExponential(2)}</p>
    `;
}
