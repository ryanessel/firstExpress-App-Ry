const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const animalSchema = new Schema({
    name: String,
    isMale: {
        type: Boolean,
        default: false,
    },
    isFemale: {
        type: Boolean,
        default: false
    },
    color: { 
        type: String,
        default: 'Black',
        enum: ['Black', 'Gray', 'White', 'Orange', 'Pink']
    },
    petType: {
        type: String,
        enum:[`Cat`, `Dog`, `Hamster`, `Parrot`, `Snake`]
    },
    siblings: {type: [{type: Schema.Types.ObjectId, ref: 'Animal'}]}
}, {
    timestamps: true
})

const Animal = model('Animal', animalSchema);
module.exports = Animal;

