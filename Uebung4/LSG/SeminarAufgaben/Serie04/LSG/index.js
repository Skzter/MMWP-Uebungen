// 2. Aufgabe
const element = document.getElementById('text1');
const strings = ["Algorithmus", "Datenbank", "Programmiersprache", "Künstliche Intelligenz", "Softwareentwicklung", "Datenstruktur", "Quellcode", "Cloud-Computing", "Maschinelles Lernen", "Netzwerkprotokoll", "Objektorientierung", "Versionierungssystem", "Kryptographie", "Datenvisualisierung", "Big Data"];
const max = 15;


function changeText()
{
    let rand = Math.floor(Math.random()*max);
    console.log(rand);
    element.innerHTML = strings[rand];
}


// 3.1
const outputField = document.getElementById('out');
class Person
{
    #name;
    #age;

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    // 3.3
    static gP()
    {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let p = new Person(name, age);
        outputField.textContent = "Die kreierte Person heißt " + p.getName() + " und ist " + p.getAge() + " Jahre alt!";
    }
}

// 4.
function ChangeVisibility()
{
    let pic = document.getElementById('vb');
    var style = pic.style.visibility;
    if(style == 'visible')
    {
        console.log("visible to hidden");
        pic.style.visibility = 'hidden';
    } 
    else if(style == 'hidden')
    {
        console.log("hidden to visible");
        pic.style.visibility = 'visible';
    }
} 
