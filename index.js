const gridPanel = document.querySelector(".container");
const resetBtn = document.querySelector('.reset');
const randColorBtn = document.querySelector('.color-change');
const blackBtn = document.querySelector('.black');
const sizeBtn = document.querySelector('.change-size');

const CONTAINER_SIZE = 600;
const DEF_GRIDSIZE =  16;
const DEF_COLOR = 'black';

// creates a grid like panel inside the container
function createPanel (numOfPanel){

    let panelSize = CONTAINER_SIZE / numOfPanel;

    for(let i = 0; i < numOfPanel *numOfPanel; i++){
            const panel = document.createElement('div');
            panel.classList.add('grid-panel');
            panel.style.width = panelSize +'px';
            panel.style.height = panelSize +'px';
            //panel.style.backgroundColor = `${random}`;
            gridPanel.appendChild(panel);

            panel.addEventListener('mouseover', () => {
                panel.style.backgroundColor = DEF_COLOR;
            });

            resetBtn.addEventListener('click', () =>{
                reset();
            });

            randColorBtn.addEventListener('click', () => {
                panel.addEventListener('mouseover', () => {
                    panel.style.backgroundColor = random();
                });
    
            })

            blackBtn.addEventListener('click', () =>{
                panel.addEventListener('mouseover', () => {
                    panel.style.backgroundColor = DEF_COLOR;
                });
            });

            //sizeBtn.addEventListener('click', () => {
            //    changeSize();
            //});
    }
}

function reset(){
    const panels = document.querySelectorAll('.grid-panel');
    panels.forEach((gridPanel) => {
        gridPanel.style.backgroundColor = 'white';
    });
}

function random() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const A = Math.floor(Math.random() * 256);

    
    return `rgb(${R}, ${G}, ${B})`;
    
}

function changeSize (){
    let size = parseInt(prompt("enter the number ranged 1 - 128"));

    if (size <= 1 || size >= 64) {
        createPanel(size);
    }
}

createPanel(DEF_GRIDSIZE);
