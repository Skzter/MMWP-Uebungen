function validate()
{
    let pw = document.forms["form"]["pw"].value;
    let pwe = document.forms["form"][pwe].value;

    if(!(pw == pwe))
    {
        alert("Passwort stimmt nicht überein!")
        return false;
    }
}