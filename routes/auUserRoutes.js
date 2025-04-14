const express = require('express');
const router = express.Router();
const AUUserController = require('../controllers/auUserController');
const upload = require('../middleware/upload');

router.get('/', AUUserController.getAll);
router.get('/:id', AUUserController.getById);
router.post('/', AUUserController.create);
router.put('/:id', AUUserController.update);
router.delete('/:id', AUUserController.delete);
router.get('/created-by/:userId', AUUserController.getByCreatorId);
router.get('/by-product/:productId', AUUserController.getByProductId);
router.post('/',
    upload.fields([
      { name: 'signature_uploaded', maxCount: 1 },
      { name: 'aadhar_uploaded', maxCount: 1 },
      { name: 'pan_uploaded', maxCount: 1 },
      {name: 'photo_uploaded', maxCount: 1}
    ]),
    controller.create
  );

module.exports = router;
