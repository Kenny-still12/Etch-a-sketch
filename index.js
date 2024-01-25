const gridPanel = document.querySelector(".container");
const randomColor = ['red', 'black', 'blue', 'yellow', 'green'];
const CONTAINER_SIZE = 600;


function createPanel (numOfPanel){

    let panelSize = CONTAINER_SIZE / numOfPanel;
    for(let i = 0; i < numOfPanel *numOfPanel; i++){
            const panel = document.createElement('div');
            let random = randomColor[Math.floor(Math.random() * 5)];
            panel.style.width = panelSize +'px';
            panel.style.height = panelSize +'px';
            panel.style.backgroundColor = `${random}`;
            gridPanel.appendChild(panel);
    }
    console.log(random);
}

console.log(16* 16)

createPanel(24);