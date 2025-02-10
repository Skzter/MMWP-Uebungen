function getText()
{
    var xmlO = new XMLHttpRequest();
    xmlO.onload = () => {
        document.getElementById("ajax")
        .innerHTML = xmlO.responseText;
    };
    xmlO.open("GET", "https://skzter.dev/unused/alt/ajax.txt", true);
    xmlO.send();
}
