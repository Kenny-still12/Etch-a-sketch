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

    gridPanel.innerHTML = '';
    let panelSize = CONTAINER_SIZE / numOfPanel;

    for(let i = 0; i < numOfPanel *numOfPanel; i++){
            const panel = document.createElement('div');
            panel.classList.add('grid-panel');
            panel.style.width = panelSize +'px';
            panel.style.height = panelSize +'px';
            gridPanel.appendChild(panel);

            panel.addEventListener('mouseover', () => {
                panel.style.backgroundColor = DEF_COLOR;
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
    }
}

createPanel(DEF_GRIDSIZE);

sizeBtn.addEventListener('click', () => {
    console.log(changeSize());
});

resetBtn.addEventListener('click', () =>{
    reset();
});



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
    let size = parseInt(prompt("Enter the number between 12 - 32"));

    if (size == null || size == ''){
        return; 
    }
    if (size < 12 || size > 32) {
        changeSize();
    }
    else {
        reset();
        createPanel(size);
    }
}

