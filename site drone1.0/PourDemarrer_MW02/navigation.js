var hamburger = document.getElementById("hamburger");

hamburger .addEventListener('click', afficherMasquerBarreNavigation);

function afficherMasquerBarreNavigation(){
    var maBarreNav = document.getElementById("barre_navigation");

    if (maBarreNav.style.display == "grid")
        maBarreNav.style.display = ""
    
    else (maBarreNav.style.display = "grid")

}