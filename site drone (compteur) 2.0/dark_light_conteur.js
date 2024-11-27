var bouton = document.getElementById("dark_light");
bouton.addEventListener('click',dark_light);

function dark_light()
{
    var datatheme = document.getElementById("body");
    if(datatheme.getAttribute('data-theme')=="light"){
    datatheme.setAttribute("data-theme",'dark');
    bouton.innerHTML="Mode clair";
    }else{
        datatheme.setAttribute("data-theme",'light');
        bouton.innerHTML="Mode sombre";
    }
}


var Jour = document.getElementById("jour");
Jour.addEventListener('click', Mettreajourlecompteur);

var Heure = document.getElementById("heure")
Heure.addEventListener('click', Mettreajourlecompteur);

var Minute = document.getElementById("minute")
Minute.addEventListener('click', Mettreajourlecompteur);

var Second = document.getElementById("seconde")
Second.addEventListener('click', Mettreajourlecompteur);

function Mettreajourlecompteur(){ 
    var date = new Date();
    var datestage = Date.UTC(2023, 4, 29, 8, 00);
    var dateadj = Date.now();
    var diff = datestage - dateadj;     //nbr de millisecond

    var nbjour = Math.floor(diff/(24*60*60*1000));     
    var nbh = Math.floor(diff/(1000*60*60)) - nbjour*24;
    var nbmin = Math.floor(diff/(1000*60)) ;
    var nbsec = Math.floor(diff/1000) ;

    Jour.innerHTML = nbjour
    Heure.innerHTML = nbh
    Minute.innerHTML = nbmin
    Second.innerHTML = nbsec

    
}