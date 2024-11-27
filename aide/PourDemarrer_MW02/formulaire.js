document.getElementById("form_inscription").addEventListener('submit',VerifierFormulaireInscription,true);
function VerifierFormulaireInscription(event){
var mdp1 = document.getElementById("mdp1").value;
var mdp2 = document.getElementById("mdp2").value; 
if (mdp1 !== mdp2){
alert("le mot de passe saisi est different du premier");
event.preventDefault();}
if(VerifierMotDePasse()==0){
    alert("les carartere du mdp ne sont pas respecter")
    event.preventDefault();
}}



document.getElementById("mdp1").addEventListener('input', VerifierMotDePasse);

function VerifierMotDePasse()
{
    var mdp8c = document.getElementById("mdp_longueur");
    var mdpMaj = document.getElementById("mdp_majuscule");
    var mdpMin = document.getElementById("mdp_minuscule");
    var special = document.getElementById("mdp_special");
    var mdpCh = document.getElementById("mdp_chiffre");
    var valeurmdp =document.getElementById("mdp1").value;
    var nbMaj = 0;
    var nbMin =0;
    var nbSpe = 0;
    var nbchiffre = 0;

    if(valeurmdp.length>=8){
        mdp8c.classList.remove("rouge");
        mdp8c.classList.add("vert");
    }
    else if(mdp8c.classList.contains("vert")){
        mdp8c.classList.remove("vert");
        mdp8c.classList.add("rouge");
    }

    for(var i=0;i<valeurmdp.length;i++){

        if(valeurmdp.charAt(i)>='A' & valeurmdp.charAt(i)<='Z'){
            nbMaj++;
        }

        if(valeurmdp.charAt(i)>='a' & valeurmdp.charAt(i)<='z'){
            nbMin++;
        }
        if(valeurmdp.charAt(i)>="0" & valeurmdp.charAt(i)<='9'){
            nbchiffre++;
        }
        if(valeurmdp.charAt(i)>='!' & valeurmdp.charAt(i)<='/' || valeurmdp.charAt(i)>=':' & valeurmdp.charAt(i)<='@' || valeurmdp.charAt(i)>='[' & valeurmdp.charAt(i)<='_'){
            nbSpe++;
        }
    }

    if(nbMaj>=1){
        mdpMaj.classList.remove("rouge");
        mdpMaj.classList.add("vert");
    }
    else{
        mdpMaj.classList.remove("vert");
        mdpMaj.classList.add("rouge");
    }

    if(nbMin>=1){
        mdpMin.classList.remove("rouge");
        mdpMin.classList.add("vert");
    }
    else{
        mdpMin.classList.remove("vert");
        mdpMin.classList.add("rouge");
    }
    if(nbchiffre>=1){
        mdpCh.classList.remove("rouge");
        mdpCh.classList.add("vert");
    }
    else{
        mdpCh.classList.remove("vert");
        mdpCh.classList.add("rouge");
    }
    if(nbSpe>=1){
        special.classList.remove("rouge");
        special.classList.add("vert");
    }    
    else if (special.classList.contains("vert")){
        special.classList.remove("vert");
        special.classList.add("rouge");     
    }
    if(valeurmdp.length>=8 && nbMaj>0 && nbMin>0 && nbSpe>0 && nbchiffre>0){
        return 1;
    }else{return 0;
    }

}





    
    





