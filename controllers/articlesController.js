//GET - AFFICHE LA LISTE DES ARTICLES
exports.getArticlesPage = async (req,res) => {
    const listeDesArticles = await querysql("SELECT * FROM article")
    res.render('articles', {articles:listeDesArticles})
}

//GET - AFFICHE UN ARTICLE
exports.getSingleArticlePage = async (req,res) => {
    // Lit dans l'url grace à params. Body = formulaire
    const id = req.params.id; 
    // requete protèger pour proteger la requete sql.
    // ID entre crochet 
    const unArticle = await querysql("SELECT * FROM article WHERE articleid = '"+ id +"';") 
    res.render('unArticle',{article: unArticle[0]})
}