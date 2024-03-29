const mongoose = require('mongoose')
const User = require('./schemas/User')
const Progress = require('./schemas/Progress')
const Dialogue = require('./schemas/Dialogue')
const Pet = require('./schemas/Pet')

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://user1:asd12345@swengtest.svfsh4k.mongodb.net/ancient-pet-exhibit?retryWrites=true&w=majority&appName=swengtest')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

//user_populate()
//users_delete()

//pet_populate("doggo","doggo_4","German Shepherd","German Shepherds are beacons of joy with their hardworking ethic, eager trainability, and brave hearts, making them extraordinary companions. While their spirited nature, occasional playfulness, and protective instincts might require a bit of guidance, it's all part of their endearing charm! Here's a delightful fact: German Shepherds are among the most beloved breeds in military and police work worldwide! With their sharp minds, adaptability, and unwavering dedication, they excel in tasks like bomb detection and search and rescue missions, bringing safety and security wherever they go.",4)
//pet_populate("doggo", "doggo_5", "Poodle", "Poodles are a joy with their hypoallergenic fur, versatile looks, and playful spirit, making them wonderful companions. Though their grooming needs, occasional separation anxiety, and stubbornness may require some patience, they add character to their lovable nature! Here's an interesting nugget: Poodles have a fascinating history of entertaining in circuses and shows. Renowned for their trainability and striking appearance, they dazzled audiences with their agility and mastery of complex tricks, leaving smiles wherever they performed.", 4)

async function user_populate(){
    try{
        const progressDocs = await Progress.insertMany([
            {username:"Testter", dog_1: false, dog_2: false, dog_3: false},
            {username:"Testtoo", dog_1: false, dog_2: false, dog_3: false}
        ])

        User.insertMany([ 
            {username:"Test", progress: progressDocs[0]._id},
            {username:"Test2", progress: progressDocs[1]._id}
        ])
        console.log("User createsd");
    } catch(e){
        console.log(e.message)
    }
}

async function users_delete(){
    try{
        User.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} users`);
    })
        .catch((error) => {
        console.error("Error deleting users:", error);
    })
        Progress.deleteMany({})
        .then((result) => {
        console.log(`Refreshed ${result.deletedCount} user's progress`);
    })
        .catch((error) => {
        console.error("Error deleting progresss:", error);
    })
    } catch(e){
        console.log(e.message)
    }
}

async function dialogue_populate(name, sprite, text) {
    try {
        let entry = new Dialogue({name: name, sprite: sprite, text: text})
        await entry.save()
        console.log("Dialogue successfully created.")
    } catch(e) {
        console.log(e.message)
    }
}

async function pet_populate(species, petcode, name, description, in_gallery) {
    try {
        let entry = new Pet({ species: species, petcode: petcode, name: name, description: description, in_gallery: in_gallery })
        await entry.save()
        console.log("Pet successfully created.")
    } catch (e) {
        console.log(e.message)
    }
}