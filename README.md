# projeto Arte com Pixels

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />
Neste projeto: implementado um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨
- Ele já está pronto e rodando neste link:
[https://portifolio-wheat-mu-48.vercel.app/](https://frontend-pixels-art.vercel.app/)

 </details>

<details>
  <summary><strong>:memo: Tecnologias Utilizadas:</strong></summary><br />

- Javascript
- CSS
- HTML

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código: linters `ESLint` e `StyleLint`.
O código está alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!
  Para rodar o `ESLint` e o `StyleLint` localmente no projeto, execute os comandos abaixo:

  1. Para avaliar se os arquivos com a extensão `CSS` estão com o padrão correto

```bash
npm run lint:styles
```

  2. Para avaliar se os arquivos com a extensão `JS` estão com o padrão correto

```bash
npm run lint
```
</details>

<details>
  <summary><strong>🛠 Testes e Cypress</strong></summary><br />

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web. Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o Cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

1. Para executar os testes apenas no terminal:

```bash
npm test
```

2. Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```
</details>

<details>
# Projeto Paleta de Cores e Quadro de Pixels

## Funcionalidades Implementadas

### 1. Título "Paleta de Cores"

- Adicionado o título "Paleta de Cores" com a tag `<h1>` e id `title`.

### 2. Paleta de Cores

- Criada uma paleta de cores com quatro opções distintas.
- A paleta possui o id `color-palette` e cada cor individual possui a classe `color`.
- Cores com fundo correspondente e borda preta sólida.
- Posicionada abaixo do título "Paleta de Cores".

### 3. Primeira Cor da Paleta

- Adicionada a cor preta como a primeira cor na paleta.

### 4. Botão para Cores Aleatórias

- Implementado botão com id `button-random-color` para gerar cores aleatórias na paleta.
- A primeira cor permanece preta.

### 5. Salvando Paleta no LocalStorage

- Implementada função para salvar a paleta gerada aleatoriamente no LocalStorage com chave `colorPalette`.
- Paleta é restaurada ao recarregar a página.

### 6. Quadro de Pixels 5x5

- Adicionado um quadro de pixels 5x5 com id `pixel-board`.
- Cada pixel possui a classe `pixel` e inicialmente é branco.
- Posicionado abaixo da paleta de cores.

### 7. Estilo dos Pixels

- Cada pixel do quadro tem 40x40px de dimensão e borda preta sólida de 1px.

### 8. Cor Inicial Selecionada na Paleta

- A cor preta é selecionada inicialmente na paleta (classe `selected`).

### 9. Seleção de Cor na Paleta

- Implementada função para selecionar uma única cor na paleta (`selected`).
- A cor previamente selecionada perde a classe `selected`.

### 10. Preenchimento de Pixels

- Implementada função para preencher um pixel do quadro com a cor selecionada na paleta.

### 11. Botão para Limpar o Quadro

- Adicionado botão com id `clear-board` para limpar todos os pixels do quadro, deixando-os brancos.

### 12. Salvando e Recuperando Desenho no LocalStorage

- Implementada função para salvar e recuperar o desenho atual do quadro no LocalStorage com chave `pixelBoard`.
- Desenho é restaurado ao recarregar a página.

## Como Executar o Projeto

1. Clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Interaja com a paleta de cores e o quadro de pixels conforme as funcionalidades descritas.


</details>
