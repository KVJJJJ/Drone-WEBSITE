var bouton= document.getElementById("dark_light");
bouton.addEventListener('click', dark_light);

function dark_light(){ 
    var datatheme = document.getElementById("body");

    if(datatheme.getAttribute('data-theme')=='light')
    {
        datatheme.setAttribute("data-theme", 'dark');
        bouton.innerHtml="Mode claire";
    }
    else
    {
        datatheme.setAttribute("data-theme", 'light');
        bouton.innerHTML="Mode sombre";
    }
}