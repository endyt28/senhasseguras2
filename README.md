# senhasseguras2
# 🎲 Gerador de Senhas Matemático

Projeto desenvolvido para o curso de **Matemática para Programar Senhas Seguras** da Alura Start. O objetivo deste software é gerar senhas aleatórias altamente seguras e calcular, em tempo real, a quantidade de combinações matemáticas necessárias para decifrá-la.

---

## 💡 Como funciona?

Em vez de apenas testar uma senha, o usuário escolhe a **quantidade de caracteres** desejada. O sistema então:
1. Sorteia caracteres aleatórios dentro de um conjunto de 84 opções (letras maiúsculas, minúsculas, números e símbolos).
2. Aplica a fórmula da Análise Combinatória para exibir a segurança da senha em notação científica.

---

## 🧮 O Princípio Multiplicativo Aplicado

A segurança da senha gerada se baseia no cálculo de possibilidades:

P = B ^ L

Onde:
* **B (Base):** O número total de caracteres disponíveis no sistema (neste projeto, a base é fixa em **84**).
* **L (Largura/Comprimento):** O tamanho da senha escolhido pelo usuário.

Ao aumentar o tamanho da senha, o número de combinações cresce de forma **exponencial**, tornando os ataques de força bruta computacionalmente impossíveis.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Criação da estrutura e dos botões da página.
* **CSS3:** Design moderno em modo escuro (*dark mode*) e responsivo.
* **JavaScript (ES6):** Manipulação do DOM, laços de repetição (`for`) e funções matemáticas (`Math.pow` e `Math.random`).

---

## 🚀 Como Executar o Projeto

1. Baixe os arquivos do repositório.
2. Abra o arquivo `index.html` diretamente em seu navegador.
3. Escolha o tamanho ideal e clique em **"Gerar Senha"**.
