const router = require('express').Router()
const auteursController = require('../controllers/auteursController')

//PAGES AUTEURS
//GET
router.get('/', auteursController.getAuteursPage)
router.get('/auteur/:auteurId', auteursController.getSingleAuteursPage)


module.exports = router