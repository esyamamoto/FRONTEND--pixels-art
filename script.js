//2 - Adicione à página uma paleta contendo quatro cores distintas
const colorPalette = document.getElementById('color-palette');

function button() {
    const arrayColors = ['black', 'red', 'blue', 'green']; //1 array 4 cores
    for (let index = 0; index < arrayColors.length; index += 1) { // Loop para percorrer o array de cores
    const button = document.createElement('button'); // Cria um elemento <button> para representar cada cor
    button.style.backgroundColor = arrayColors[index];  // Define a cor de fundo do botão com base na cor atual do loop
    colorPalette.appendChild(button);  // Adiciona o botão à paleta de cores
}
}
button()
//3 - Adicione a cor preta como a primeira cor da paleta de cores
const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.style.backgroundColor = 'black';
//4 - Adicione um botão para gerar cores aleatórias para a paleta de cores

//5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

//6 - Adicione à página um quadro contendo 25 pixels

//7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura

