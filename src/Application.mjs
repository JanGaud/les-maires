import Maire from "./Maire.mjs";
import { mairesMTL } from "./mairesdata.js";

export default class Application {
    
    /**
     * Constructeur de la classe Application
     * Le constructeur attache les écouteurs d'événement sur les bonnes méthodes de l'application
     * Il instancie l'objet Maire.
     */
    constructor() {
        console.log(mairesMTL);
        this.oMaire = new Maire(mairesMTL);
        const btnRechercheNom = document.querySelector(".btn-recherche-nom");
        const btnRechercheDate = document.querySelector(".btn-recherche-date");
        const btnListeNom = document.querySelector(".btn-liste-nom");
        const btnListeDate = document.querySelector(".btn-liste-date");
        
        btnRechercheNom.addEventListener("click", this.rechercheNom.bind(this));
        btnRechercheDate.addEventListener("click", this.rechercheDate.bind(this));
        btnListeNom.addEventListener("click", this.listeNom.bind(this));
        btnListeDate.addEventListener("click", this.listeDate.bind(this));
        
    }
    /**
    Mettre les autres méthodes ici.
    */
   rechercheNom(){

   }
   rechercheDate(){

   }
   listeNom(){
    let param = {
        type: "nom",
        ordre : "DESC"
    }
    let res = this.oMaire.listeMaires(param)
    this.afficher(res);
   }
   listeDate(){

   }

   afficher(data){
    document.querySelector(".tbl-resultat").innerHTML = "";
    let chaineHTML = "<tr><th>Nom</th><th>Prénom</th><th>Début</th><th>Fin</th></tr>";
    data.forEach(unMaire => {
        chaineHTML += `<tr><td>${unMaire.nom}</td><td>${unMaire.prenom}</td><td>${unMaire.debut}</td><td>${unMaire.fin}</td></tr>`;
    });
    document.querySelector(".tbl-resultat").innerHTML = chaineHTML;
   }
  }