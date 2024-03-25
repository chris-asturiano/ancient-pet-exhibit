const { Router } = require('express'); 
const router = Router();

const Dialogue = require('../database/schemas/Dialogue');
const User = require('../database/schemas/User');
const Progress = require('../database/schemas/Progress');


router.get('/', (req, res) => {
    res.render('home', {title: "Welcome to the Exhibit!"});
});


module.exports = router;