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
