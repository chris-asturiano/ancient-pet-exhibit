const mongoose = require('mongoose')
const User = require('./schemas/User')
const Progress = require('./schemas/Progress')
const Dialogue = require('./schemas/Dialogue')

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/ancient-pet-exhibit')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

//user_populate()
//users_delete()

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