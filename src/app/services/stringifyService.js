export function convertDate(date) {
    // Convertir la date ISO 8601 en objet Date
    var dateObj = new Date(date);

    // Extraire le jour, le mois et l'année de l'objet Date
    var jour = dateObj.getDate();
    var mois = dateObj.getMonth() + 1; // Les mois commencent à 0 dans JavaScript
    var annee = dateObj.getFullYear();

    // Ajouter un zéro devant le jour et le mois si nécessaire
    jour = (jour < 10) ? '0' + jour : jour;
    mois = (mois < 10) ? '0' + mois : mois;

    // Construire la date au format "dd/MM/yyyy"
    var dateFormatee = jour + '/' + mois + '/' + annee;

    // Retourner la date formatée
    return dateFormatee;
}