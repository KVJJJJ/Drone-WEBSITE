document.getElementById("form_inscription") .addEventListener("submit", VerifierFormulaireInscription);
function VerifierFormulaireInscription(){
    var mdp1 = document.getElementById("mdp1").value;
    var mdp2 = document.getElementById("mdp2").value;
    if (mdp1 !== mdp2){
        alert("le mot de passe saisi est different du premier");
        event.preventDefault();
    }
}

document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);
function VerifierMotDePasse()
{
    var mdp8cara = document.getElementById("mdp_longueur");
    var mdpMaj = document.getElementById("mdp_Maj");
    var mdpMin = document.getElementById("mdp_Min");
    var mdpchif = document.getElementById("mdp_chif");
    var mdpcaraspe = document.getElementById("mdp_caraspe");
    var valeurMDP = document.getElementById("mdp1").value;
    var nbmaj = 0;
    var nbmin = 0;
    var nbchif = 0;
    var nbspe = 0;

    
    if (valeurMDP.length>=8)
    {
        mdp8cara.classList.remove("rouge");
        mdp8cara.classList.add("vert");
    }
    else if (mdp8cara.classList.contains("vert"))
    {
        mdp8cara.classList.remove("vert");
        mdp8cara.classList.add("rouge");
    }



    for( var i=0; i<valeurMDP.length; i++ )
    {
        if( valeurMDP.charAt(i)>='A' && valeurMDP.charAt(i)<='Z')
        {
            nbmaj++;
        }

        if( valeurMDP.charAt(i)>='a' && valeurMDP.charAt(i)<='z')
        {
            nbmin++;
        }

        if( valeurMDP.charAt(i)>='0' && valeurMDP.charAt(i)<='9')
        {
            nbchif++;
        }

        if ( valeurMDP.charAt(i)>='!'&& valeurMDP.charAt(i)<='/' ||  valeurMDP.charAt(i)>=':' && valeurMDP.charAt(i)<='@' ||  valeurMDP.charAt(i)>='[' && valeurMDP.charAt(i)<='_' )
        {
            nbspe++;
        }
    }


    if( nbmaj>=1)
        {
            mdpMaj.classList.remove("rouge");
            mdpMaj.classList.add("vert");
        }
    else if (mdpMaj.classList.contains("vert"))
        {
            mdpMaj.classList.remove("vert");
            mdpMaj.classList.add("rouge");
        }

    if( nbmin>=1)
        {
            mdpMin.classList.remove("rouge");
            mdpMin.classList.add("vert");
        }
    else if (mdpMin.classList.contains("vert"))
        {
            mdpMin.classList.remove("vert");
            mdpMin.classList.add("rouge");
        }


    if( nbchif>=1)
        {
            mdpchif.classList.remove("rouge");
            mdpchif.classList.add("vert");
        }
    else if (mdpchif.classList.contains("vert"))
        {
            mdpchif.classList.remove("vert");
            mdpchif.classList.add("rouge");
        }

    if( nbspe>=1)
        {
            mdpcaraspe.classList.remove("rouge");
            mdpcaraspe.classList.add("vert");
        }
    else if (mdpcaraspe.classList.contains("vert"))
        {
            mdpcaraspe.classList.remove("vert");
            mdpcaraspe.classList.add("rouge");
        }
}
