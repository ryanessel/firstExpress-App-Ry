// This is the base setup for your modals (Schema's) on your express or js file.

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    color: String,
    favFood: String,
    petOwner: String,
    homeLocation: {
        address: String,
        locationOwner: String,
        contactNumber: String,
        mayContactDay: Boolean,
        mayContactNight: Boolean,
        mayContactAnytime: Boolean
    }
})

const Cat = mongoose.modal('Cat', catSchema);

// ==================================================





mydatabase.connect.acceptincomingdata({name: 'Felix', color: "Yellow/Black", favFood: false})















// ============  ******************* ================
//   How to Link Your collections using Object Ids
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    middleInitial: String,
    namePrefix: String,
    nameAppendix: String,
    email: String,
    password: String,
    locationsOwned: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}]}
})

const User = mongoose.modal('User', userSchema);





const locationSchema = new mongoose.Schema({
        address: String,
        locationOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        contactNumber: String,
        mayContactDay: Boolean,
        mayContactNight: Boolean,
        mayContactAnytime: Boolean
    })

const Location = mongoose.modal('Location', locationSchema);





const catSchema = new mongoose.Schema({
    name: String,
    color: String,
    favFood: String,
    petOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    homeLocation: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
})

const Cat = mongoose.modal('Cat', catSchema);

// locationsOwned = ["6317d96546e09f09308484a5", "6317d96546e09f09308484a5", "6317d96546e09f09308484a5", "6317d96546e09f09308484a5", "6317d96546e09f09308484a5"]