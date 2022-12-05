const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    dob: {
        type: Date,
        default: Date.now
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
        default: "Male"
    },

    mobileno: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    occupation: {
        type: String,
        required: false
    },

    aadharno: {
        type: String,
        required: false
    },

    panno: {
        type: String,
        required: false
    },

    maritalstatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Legally separated', 'Widowed'],
        required: true,
        default: "Single"
    },

    email: {
        type: String,
        required: false
    },

    height: {
        type: Number,
        required: false
    },

    weight: {
        type: Number,
        required: false
    },

    diagnosis: {
        type: String,
        required: true
    },

    medname1: {
        type: String,
    },

    dosage1: {
        type: String,
    },
    quantity1: {
        type: String,
        // required: true
    },
    food1: {
        type: String,
        // required: true
    },

    medname2: {
        type: String,
        // required: true
    },
    dosage2: {
        type: String,
        // required: true
    },
    quantity2: {
        type: String,
        // required: true
    },
    food2: {
        type: String,
        // required: true
    },

    medname3: {
        type: String,
        // required: true
    },
    dosage3: {
        type: String,
        // required: true
    },
    quantity3: {
        type: String,
        // required: true
    },
    food3: {
        type: String,
        // required: true
    },



    prevvisited: {
        type: Date,
        default: Date.now()
    },

    panno: {
        type: Number,
        required: false
    }
    // roles: [{
    //     type: String,
    //     default: "Employee"
    // }],
    // active: {
    //     type: Boolean,
    //     default: true
    // }
})

userSchema.plugin(AutoIncrement, {
    inc_field: 'pid',
    id: 'patientid',
    start_seq: 1
})

module.exports = mongoose.model('User', userSchema)