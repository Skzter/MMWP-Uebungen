var entries = [];
function doStuff(event)
{
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let form = document.getElementById("form");
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let pw = document.forms["form"]["pw"].value;
    let pwe = document.forms["form"]["pwe"].value;
    let datum = document.forms["form"]["datum"].valueAsDate;
    let land = document.forms["form"]["land"].value;
    let check = document.forms["form"]["check"].checked;
    const data = new FormData(form);
  

    if((name == null) || (name == ""))
    {
        alert("Name muss ausgefüllt sein!");
        return false;
    }
        
    if(!emailRegex.test(email))
    {
        alert("Keine gültige Email!");
        return false;
    }

    if (pw == null || pw == "" || pwe == null || pwe == "")
    {
        alert("Bitte Passwort eingeben");
        return false;
    } else if (pw.length < 8)
    {
        alert("Passwort zu kurz. Mindestens 8 Zeichen!");
        return false;
    } else if (!(pw == pwe))
    {
        alert("Passwörter stimmen nicht überein");
        return false;
    }

    if((datum == null))
    {
        alert("Datum muss ausgefüllt sein!");
        return false;
    }

    if(land == "")
    {
        alert("Land auswählen!")
        return false;
    }
    
    if(!check)
    {
        alert("AGBs akzeptieren!");
        return false;
    }

    console.log(data);
    entries.push(data);
    console.log(entries);
    console.log("Nutzer hat " + (verg / 1000).toFixed(2) + "s mit ausfüllen des Formulars verbracht"); 
    form.reset();
    return true;
}

let input_form = document.getElementsByClassName("form-control");
let input_select = document.querySelector(".form-select");
let input_check = document.querySelector(".form-check-input");

window.onload = () =>
{
    startTime = Date.now();
    document.getElementById("form").reset();
}

var startTime;
var verg;

for(let i = 0; i < input_form.length; i++)
{
    input_form[i].addEventListener("input", () => {
        let currTime = Date.now();
        verg = Math.abs(currTime - startTime);
        console.log("Input in Form bei " + currTime + "| Zeit seit erste Input > " + verg);
    });
}

input_check.addEventListener("input", () => {
    let currTime = Date.now();
    verg = Math.abs(currTime - startTime);
    console.log("Input in Form bei " + currTime + "| Zeit seit erste Input > " + verg);
});

input_select.addEventListener("input", () => {
    let currTime = Date.now();
    verg = Math.abs(currTime - startTime);
    console.log("Input in Form bei " + currTime + "| Zeit seit erste Input > " + verg);
});
