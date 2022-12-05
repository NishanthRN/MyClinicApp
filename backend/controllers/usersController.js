const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})

const getUserById = asyncHandler(async (req, res) => {

    const { id } = req.params

    const user = await User.findById(id).catch(err => {
        console.log(` error getting user ${err} `)
    })

    if (!user) {
        return res.status(500).json({
            message: "error getting user"
        })
    }

    return res.status(200).json({
        message: "user get successfully",
        data: user
    })

})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {

    console.log('hrer')
    const { name, age, dob, gender, mobileno, address, occupation, prevvisited, maritalstatus, email, height, weight, panno, aadharno, diagnosis, medname1, dosage1, quantity1, food1, medname2, dosage2, quantity2, food2, medname3, dosage3, quantity3, food3 } = req.body

    // Confirm data
    if (!name || !age) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    // const duplicate = await User.findOne({ username }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate username' })
    // }

    // Hash password 
    // const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { name, age, dob, gender, mobileno, address, occupation, prevvisited, maritalstatus, email, height, weight, panno, aadharno, diagnosis, medname1, dosage1, quantity1, food1, medname2, dosage2, quantity2, food2, medname3, dosage3, quantity3, food3 }

    // Create and store new user 
    const user = await User.create(userObject).catch(err => {
        console.log(`error creating user :: ${err}`)
    })

    if (user) { //created 
        return res.status(201).json({ message: `New userser created` })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { _id, name, age, dob, gender, mobileno, address, occupation, prevvisited, maritalstatus, email, height, weight, panno, aadharno, diagnosis, medname1, dosage1, quantity1, food1, medname2, dosage2, quantity2, food2, medname3, dosage3, quantity3, food3 } = req.body

    const obj = {
        name, age, dob, gender, mobileno, address, occupation, prevvisited, maritalstatus, email, height, weight, panno, aadharno, diagnosis, medname1, dosage1, quantity1, food1, medname2, dosage2, quantity2, food2, medname3, dosage3, quantity3, food3
    }



    // Does the user exist to update?
    const user = await User.findByIdAndUpdate(_id, { ...obj }).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }


    // // Allow updates to the original user 
    // if (duplicate && duplicate?._id.toString() !== id) {
    //     return res.status(409).json({ message: 'Duplicate username' })
    // }

    // user.username = username
    // user.roles = roles
    // user.active = active

    // if (password) {
    //     // Hash password 
    //     user.password = await bcrypt.hash(password, 10) // salt rounds 
    // }

    res.status(200).json({ message: ` updated`, data: user })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // Does the user still have assigned notes?
    const note = await Note.findOne({ user: id }).lean().exec()
    if (note) {
        return res.status(400).json({ message: 'User has assigned notes' })
    }

    // Does the user exist to delete?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUserById
}