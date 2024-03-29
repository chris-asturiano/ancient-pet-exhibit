const { Router } = require('express'); 
const router = Router();

const Progress = require('../database/schemas/Progress');
const Pet = require('../database/schemas/Pet')

router.get('/', (req, res) => {
    res.render('birdos', { title: "Meet the Birdos!" });
});

router.get('/:id', async (req, res) => {
    try {
        const petcode = req.params.id;
        const pet_data = await Pet.findOne({species: 'borb', petcode: petcode});
        res.send(pet_data);
    } catch (e) {
        console.log(e);
        res.sendStatus(404);
    }
})

module.exports = router;