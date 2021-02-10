//GET - AFFICHE LA LISTE DES AUTEURS
exports.getAuteursPage = async (req,res) => {
    const listeAuteurs = await querysql('SELECT * FROM auteur')
    res.render('auteurs', {auteurs: listeAuteurs})
}

exports.getSingleAuteursPage = async (req,res) => {
    //
    const auteurId = req.params.auteurId;
    const auteurSingle = await querysql("SELECT * FROM auteur WHERE auteurId = '"+ auteurId +"';")
    console.log(auteurSingle);
    res.render('unAuteur', {unAuteur: auteurSingle[0]})
}

