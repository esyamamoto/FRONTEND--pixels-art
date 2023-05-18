// ------------------------------------------------------------------------------------------------------------------------------------
//uma paleta contendo quatro cores distintas e suas respectivas classes
 const colorPalette = document.getElementById('color-palette');

function button() {
  const arrayColors = ['black', 'red', 'blue', 'green']; // 1 array 4 cores
  for (let index = 0; index < arrayColors.length; index += 1) { // Loop para percorrer o array de cores
    const button = document.createElement('button'); // Cria um elemento <button> para representar cada cor
    button.id = arrayColors[index];
    button.style.backgroundColor = arrayColors[index];// Define a cor de fundo do botão com base na cor atual do loop
    button.className = 'color';//classe de color para os outros botoes
    colorPalette.appendChild(button); // Adiciona o botão à paleta de cores
    }
    const addSelect = document.querySelector('#black');
    addSelect.classList.add('selected');
}
button();
// ------------------------------------------------------------------------------------------------------------------------------------
// botão para gerar cores aleatórias para a paleta de cores e cor preta como a primeira cor da paleta de cores
function generateRandomColor() {
    const letters = '0123456789ABCDEF'; // Define os caracteres permitidos para representar uma cor hexadecimal
    let color = '#'; // Começa com '#' para representar uma cor hexadecimal
    for (let i = 0; i < 6; i += 1) { // Seleciona aleatoriamente um dígito da string 'letters' para cada um dos seis dígitos da cor
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; // Retorna a cor hexadecimal gerada
  }

  function generateRandomColors() { // Obtém os elementos HTML com a classe 'color'
    const colorBoxes = document.getElementsByClassName('color');
    for (let index = 1; index < 4; index += 1) { // Define a cor de fundo de cada elemento com a classe 'color' usando a função generateRandomColor()
      colorBoxes[index].style.backgroundColor = generateRandomColor();
    }
  }
  const buttonRandomColor = document.getElementById('button-random-color'); // Adiciona um evento de clique ao elemento HTML com o id 'button-random-color'
  buttonRandomColor.addEventListener('click', generateRandomColors);
 
 
// ------------------------------------------------------------------------------------------------------------------------------------
// função localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

// ------------------------------------------------------------------------------------------------------------------------------------
//função para selecionar uma cor na paleta de cores
const colors = document.getElementsByClassName('color'); // Obtém todos os elementos com a classe "color"

function removeSelect() { // Função para remover a classe "selected" de todos os elementos
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function addSelect(event) {// Função para adicionar a classe "selected" ao elemento clicado
  event.target.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) { // Adiciona event listeners de clique a cada elemento com a classe "color"
  colors[i].addEventListener('click', removeSelect); // Quando um elemento é clicado, chama a função removeSelect
  colors[i].addEventListener('click', addSelect);// Quando um elemento é clicado, chama a função addSelect
}
//------------------------------------------------------------------------------------------------------------------------------------------
//10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
function squareBackground(event) { // Verifica se o elemento clicado possui a classe "pixel"
    if (event.target.classList.contains('pixel')) { 
      const getButton = document.querySelector('.selected'); // Obtém o primeiro elemento com a classe "selected"
      const getBackground = window  // Obtém o valor da propriedade "background-color" do elemento "getButton"
        .getComputedStyle(getButton) // O resultado é um objeto que representa o estilo CSS aplicado ao elemento.
        .getPropertyValue('background-color'); // Essa propriedade representa a cor de fundo do elemento.
      event.target.style.backgroundColor = getBackground; // Aplica a cor de fundo obtida ao elemento clicado
    }
  }
  document.addEventListener('click', squareBackground); // Adiciona um event listener de clique ao documento. Quando ocorre um clique, a função squareBackground é chamada
//------------------------------------------------------------------------------------------------------------------------------------------
//11 - Crie um botão que retorne a cor do quadro para a cor inicial

//12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage