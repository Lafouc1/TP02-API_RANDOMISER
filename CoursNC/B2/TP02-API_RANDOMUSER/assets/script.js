console.log("coucou");
//Définir le endpoint
let endpoint = "https://randomuser.me/api/?results=10";

//Fetch des datas
fetch(endpoint)
.then(
    //Fonction callback anonyme
    function (response){
        //Affichage de la réponse
        console.log(response);

        //Affichage du code de statut de la réponse
        if (response.status == 200) {
            response.json()
            .then(
                //Une fois que la conversion en json est finie
                function (datas){
                    console.log(datas.results);
                    let users = datas.results;
                    let dataUsers = document.getElementById("dataUsers");

                    users.forEach(
                        function (user) {
                            console.log("Nom d'utilisateur : " + user.name.first);
                            console.log("Pays de l'utilisateur : " + user.location.country);
                            // Générer la ligne et l'ajouter au tableau
                            dataUsers.appendChild(generateDataUser(user));
                            }
                        );
                        }
                    )
                }
        else{
            console.log("Mauvais statut de réponse");
        }

        //Contenu de la réponse dans body
        console.log(response.body);
    }
);

function generateDataUser(user){
    //Création des éléments du HTML
    let row = document.createElement("tr");
    let nomUtilisateur = document.createElement("td");
    let paysUtilisateur = document.createElement("td");

    //Ajout de valeurs dans le tableau
    nomUtilisateur.innerText = user.name.first + " " + user.name.last;
    paysUtilisateur.innerText = user.location.country;

    //Ajout des valeurs dans la ligne
    row.appendChild(nomUtilisateur);
    row.appendChild(paysUtilisateur);
    return row;
}