
const REGISTERFORM = $("#registerForm");

const LOGINFORM = $("#loginForm");
// ECOUTER LE CLICK
REGISTERFORM.on("submit", (e) =>{
    // empeche le recharge automatique du forlmulaire
    e.preventDefault();
    // recupere les info de l'user
    let pseudo = $("#pseudo").val();
    let firstName = $("#firstname").val();
    let lastName = $("#lastname").val();
    let password = $("#password").val();
    let action = $("#action").val()
// APL A NOTRE FONCTION
    //  dans le bouton id= action dou ilya action ausssi comm paramettre
    register(pseudo, firstName, lastName, password, action)
})

// NOTRE FONCTION
function register(pseudo, firstName, lastName, password, action) {
    //  a gauche ca vient de api register( des clé), a droite ca viendra du formulaire
    let data = {
        pseudo: pseudo,
        password: password,
        firstname: firstName,
        lastname: lastName,
        action: action
    }
    // objet qui a method post et une clé body
    let dataOption = {
     
        method: "post",
        // on applique la methode JSON.stringfy(), prk notre api comprenne cad prk php le comrenne cei est si haut cad let data ={...}
        body:JSON.stringify(data),
    }
    // aple fecth, elle est asynchro et s'execute en arrière plan et retour des promesse cad

    fetch("http://localhost/api_backend/", dataOption)
        // silya la promesse
        .then(response => {
            response.json()
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                console.log("promesse non tenue")
            })
        })
        // en cas ou ilya pas de promess
        .catch(error => console.log("et la promesse?"));
}
// ECOUTER LE CLICK

LOGINFORM.on("submit", (e) => {
    // empeche le recharge automatique du forlmulaire
    e.preventDefault();
    // recupere les info de l'user
    let pseudo = $("#pseudo").val();
    let password = $("#password").val();
    let action = $("#action").val();
    // APL A NOTRE FONCTION
    //  dans le bouton id= action dou ilya action ausssi comm paramettre
    login(pseudo, password, action)
})
// fonction login
function login(pseudo, password, action) {
    let data = {
        pseudo: pseudo,
        password: password,
        action: action
    }
    let dataOption = {

        method: "post",
        // on applique la methode JSON.stringfy(), prk notre api comprenne cad prk php le comrenne cei est si haut cad let data ={...}
        body: JSON.stringify(data),
    }
    // aple fecth, elle est asynchro et s'execute en arrière plan et retour des promesse cad

    fetch("http://localhost/api_backend/", dataOption)
        // silya la promesse
        .then(response => {
            response.json()
                .then(data => {
                    console.log(data);
                    // si on veut recupere l'identifiant et le nom de l'utilisateur qui se connect
                    localStorage.setItem("iduser", data.data.id_user);
                    localStorage.setItem("firstname", data.data.firstname);
                    // rediriger vers
                    window.location.href("")
                })
                .catch(error => {
                    console.log("erreur")
                });
        })
        // en cas ou ilya pas de promess
        .catch(error => console.log("ilya une erreur"));
}
