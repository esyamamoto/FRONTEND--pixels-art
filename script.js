const colorPalette = document.getElementById('color-palette');

function button() {
  const arrayColors = ['black', 'red', 'blue', 'green']; // 1 array 4 cores
  for (let index = 0; index < arrayColors.length; index += 1) { // Loop para percorrer o array de cores
    const button = document.createElement('button'); // Cria um elemento <button> para representar cada cor
    button.style.backgroundColor = arrayColors[index];// Define a cor de fundo do botão com base na cor atual do loop
    button.className = 'color'; //classe de color para os outros botoes
    colorPalette.appendChild(button); // Adiciona o botão à paleta de cores
    }   
}
button();
// 3 - Adicione a cor preta como a primeira cor da paleta de cores
// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores
// https://stackoverflow.com/questions/1484506/random-color-generator
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateRandomColors() {
    const colorBoxes = document.getElementsByClassName('color');
    for (let index = 1; index < 4; index += 1) {
      colorBoxes[index].style.backgroundColor = generateRandomColor();
    }
  }
  const buttonRandomColor = document.getElementById('button-random-color');
  buttonRandomColor.addEventListener('click', generateRandomColors);
// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

//8 - Defina a cor preta como cor inicial da paleta de cores
//9 - Crie uma função para selecionar uma cor na paleta de cores
