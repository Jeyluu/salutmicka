const router = require('express').Router()
const articlesController = require('../controllers/articlesController')

//PAGES ARTICLES
//GET
router.get('/', articlesController.getArticlesPage)

module.exports = router
