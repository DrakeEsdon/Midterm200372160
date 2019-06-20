// Our router module
const router = require('express').Router();


// Our controller
const ArcadeGamesController = require('../controllers/ArcadeGamesController');

/* Our routes
router.get(`/`, ArcadeGamesController.index);
router.get(`/new`, ArcadeGamesController.new);
router.get(`/show`, ArcadeGamesController.show);
router.get(`/edit`, ArcadeGamesController.edit);
router.get(`/form`, ArcadeGamesController.form);
*/

// We have to export our changes
module.exports = router;