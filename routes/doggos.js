const { Router } = require('express'); 
const router = Router();

const Progress = require('../database/schemas/Progress');

router.get('/', (req, res) => {
    res.render('doggos', { title: "Meet the Doggos" });
});

module.exports = router;