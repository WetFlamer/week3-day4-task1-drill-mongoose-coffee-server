const { Router } = require('express');

const router = Router();

router.use('/main', require('./Drinks.route'))
module.exports = router;