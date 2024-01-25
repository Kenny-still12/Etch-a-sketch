const gridPanel = document.querySelector(".container");
const resetBtn = document.querySelector('.reset');
const randomColor = ['red', 'black', 'blue', 'yellow', 'green'];
const CONTAINER_SIZE = 600;
const DEF_GRIDSIZE =  16;
const DEF_COLOR = 'black';

// creates a grid like panel inside the container
function createPanel (numOfPanel){

    let panelSize = CONTAINER_SIZE / numOfPanel;

    for(let i = 0; i < numOfPanel *numOfPanel; i++){
            const panel = document.createElement('div');
            panel.classList.add('grid-panel');
            let random = randomColor[Math.floor(Math.random() * 5)];
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
    }
}

function reset(){
    const panels = document.querySelectorAll('.grid-panel');
    panels.forEach((gridPanel) => {
        gridPanel.style.backgroundColor = 'white';
    });
}

function changeColor() {
    
}


createPanel(DEF_GRIDSIZE);

// for button animation 




//const grids = document.querySelectorAll('grid-panel');
//grids.addEventListener('mouseover', () => {
//    grids.style.backgroundColor = color;
//});