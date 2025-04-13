const express = require('express');
const router = express.Router();
const AUUserController = require('../controllers/auUserController');

router.get('/', AUUserController.getAll);
router.get('/:id', AUUserController.getById);
router.post('/', AUUserController.create);
router.put('/:id', AUUserController.update);
router.delete('/:id', AUUserController.delete);
router.get('/created-by/:userId', AUUserController.getByCreatorId);


module.exports = router;
