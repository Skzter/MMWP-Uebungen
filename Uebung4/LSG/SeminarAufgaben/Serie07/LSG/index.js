//Aufgabe 1-3
function dragStarthandler(event)
{
    console.log("start dragging");
    event.dataTransfer.setData("text", event.target.id);
}

function dragOverhandler(event)
{
    console.log("dragOver");
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function dropHandler(dropEvent)
{
    console.log("drop");
    dropEvent.preventDefault();
    const data = dropEvent.dataTransfer.getData("text");
    dropEvent.target.appendChild(document.getElementById(data));
    if (event.target.classList.contains("zone")) 
    {
        event.target.classList.remove("over");
    }
}

function dragEnterhandler(event)
{
    if (event.target.classList.contains("zone")) 
    {
        event.target.classList.add("over");
    }
}

function dragLeavehandler(event)
{
    if (event.target.classList.contains("zone")) 
    {
        event.target.classList.remove("over");
    }
}

// Aufgabe 4

var counter = 0;
const txt = document.getElementById("aufg_text");
const col = document.getElementById("aufg_color");
const aufg_spalte = document.getElementById("aufgaben");

function doSmth()
{
    console.log(txt.value);
    console.log(col.value);
}

window.onload = (event) => {
    txt.value = "";
    col.value = "#000000";
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
   
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function addAufgabe()
{
    var neueAufg = document.createElement("div");
    var neueText = document.createTextNode(txt.value);
    neueAufg.appendChild(neueText);
    neueAufg.style.backgroundColor = col.value;
    neueAufg.style.color = invertColor(col.value);
    neueAufg.setAttribute('draggable', true);
    neueAufg.setAttribute('id', '_' + counter);
    counter++;
    neueAufg.setAttribute('class', 'task');
    neueAufg.addEventListener('dragstart', dragStarthandler);
    aufg_spalte.appendChild(neueAufg);
}

function drophandler(dropevent, box)
{
    console.log("Dropped");
    dropevent.preventDefault();
    const data = dropevent.dataTransfer.getData("text");
    const column = document.getElementById(box);
    const el = document.getElementById(data);
    if(box == 'Done')
    {
        el.style.textDecoration = "line-through";
    }
    else
    {
        el.style.textDecoration = "none";
    }
    column.appendChild(el);
}

function deleteTasks()
{
    const parent = document.getElementById("Trash");
    const startChild = parent.firstChild.nextSibling.nextSibling;
    while(startChild.nextSibling != null)
    {
        parent.removeChild(startChild.nextSibling);
    }
}
