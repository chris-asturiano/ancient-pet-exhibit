const { Router } = require('express'); 
const router = Router();


router.get('/', async(req, res) => {
    res.render('intro', {title: "Welcome..."});
});

module.exports = router;