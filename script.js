const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column;"
const gridContainer = document.createElement("div");
gridContainer.style.cssText = "display: flex; flex-direction: column; max-width: 90vh; min-width:90vh"

let rowLength = 20;
let columnLength = 20;
createGrid();

const header = document.createElement("div");
header.style.cssText = "display: flex; align-items: center;"

const changeGridSizeButton = document.createElement("button");
changeGridSizeButton.textContent = "Change grid size";
changeGridSizeButton.style.cssText = "padding: 16px; margin: 8px;"

changeGridSizeButton.addEventListener("click", () => {
    let userInput = prompt("What length of grid would you like? (Max 100)");
    if (userInput == null) {
        return;
    } else {
        length = Math.min(100, userInput);
    }
    rowLength = length
    columnLength = length;
    createGrid();
})

header.appendChild(changeGridSizeButton);
body.appendChild(header);
body.appendChild(gridContainer);

function createGrid() {
    //clear grid first
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
  }
    for (i = 0; i < columnLength; i++) {
        const row = document.createElement("div");
        row.style.cssText = "display: flex; flex: 1;"
        for (j = 0; j < rowLength; j++) {
            const rowElement = document.createElement("div");
            rowElement.style.cssText = "border-style: solid; border-color: black; flex: 1; aspect-ratio: 1 / 1; background-color: rgba(0,0,0,0.1);";
            rowElement.className = "gridElement";
            rowElement.addEventListener("mouseenter", (event) => {
                let bc = window.getComputedStyle(event.target).getPropertyValue('background-color');
                let rgba = bc.replace(/^rgba?\(|\s+|\)$/g,'').split(','); // from stack overflow: user372551 on https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color
                let opacity = parseFloat(rgba.slice(-1)[0]);
                newOpactiy = Math.min(0.99, opacity + 0.1);
                event.target.style.backgroundColor = `rgba(0,0,0,${newOpactiy})`;

            });
            row.appendChild(rowElement);
        }
        gridContainer.appendChild(row);
    }
}