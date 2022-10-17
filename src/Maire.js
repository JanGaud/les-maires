export default class Maire {
    /**
     * @typedef UnMaire
     * @type {object}
     * @property {string} nom - Le nom
     * @property {string} prenom - Le prénom
     * @property {number} debut - Année du début du mandat
     * @property {?number} fin - Année de fin du mandat ou null
     */

    /**
     * @type {UnMaire[]} Tableau des maires
     * @private
     */
    #aMaires;

    /**
     * Création de la liste des maires
     * @param {UnMaire[]} lesMaires - Tableau des maires pour la ville
     */
    constructor (lesMaires){
        this.#aMaires = lesMaires;
    }
    
     /**
      * Retourne les résultats de la recherche
      * @param {Object} params - Objet de paramètre
      * @param {string} params.type - Le type de recherche : ["date", "nom"]
      * @param {string | Number} params.valeur - La valeur recherchée
      * @returns {UnMaire[]} - Tableau des résultats;
     */
    rechercheMaires(params){
        let tableauFiltre = [];

        if(params.type === "date"){
                tableauFiltre = this.#aMaires.filter((maire)=>{
                return Number(params.valeur) >= maire.debut 
                    && (maire.fin == null ? true : Number(params.valeur) <= maire.fin);
            });
        }
        if(params.type === "nom"){
            tableauFiltre = this.#aMaires.filter((maire)=>{
                return maire.nom.toLowerCase().includes(params.valeur.trim().toLowerCase()) 
                    || maire.prenom.toLowerCase().includes(params.valeur.trim().toLowerCase());
            })
        }

        return tableauFiltre;
    }

    /**
     * Retourne la liste des maires trié selon les paramètres
     * @param {Object} params - Objet de paramètre
     * @param {string} params.type - Le type de tri : ["date", "nom"]
     * @param {string} params.ordre - L'ordre du tri : ["ASC", "DESC"]
     * @returns {UnMaire[]} - Tableau des résultats
     */
    listeMaires(params) {
        if(params.type === "nom"){
            this.#aMaires.sort(function(a, b){
                return a.nom.localeCompare(b.nom, "fr");
        });
        }
        if(params.type === "date"){
            this.#aMaires.sort(function(a, b){
                return a.debut > b.debut || a.fin > a.fin;
            })
        }
        if(params.ordre === "DESC"){
            this.#aMaires.reverse();
        }
        return this.#aMaires;
    }

    /**
     * @returns {Number} - Le nombre d'enregistrement dans le tableau des maires
     */
    getNombreMaires(){
        return this.#aMaires.length;
    }
    
  }