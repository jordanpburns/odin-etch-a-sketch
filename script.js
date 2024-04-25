const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: center; align-items: center;"
const gridContainer = document.createElement("div");
gridContainer.style.cssText = "display: flex; flex-direction: column; max-width: 95vh; min-width:95vh"


let rowLength = 10;
let columnLength = 10;

body.appendChild(gridContainer);

for (i = 0; i < columnLength; i++) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; flex: 1;"
    for (j = 0; j < rowLength; j++) {
        const rowElement = document.createElement("div");
        rowElement.style.cssText = "border-style: solid; border-color: black; flex: 1; aspect-ratio: 1 / 1 ;";
        rowElement.className = "gridElement";
        rowElement.addEventListener("mouseenter", (event) => {
            event.target.classList.add("hovered");
        });
        row.appendChild(rowElement);
    }
    gridContainer.appendChild(row);
}
