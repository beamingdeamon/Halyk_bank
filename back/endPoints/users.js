const express = require('express')
const router = express.Router()

const mongoUser = require('../models/User.js').mongoUser
const Password = require('../objects/Password.js')
const Login = require('../objects/Login.js')

router.get('/', async (req, res) => {
    const result = await mongoUser.find().exec()
    res.status(200).send( JSON.stringify(result) )
})

// begin registration user
router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newUser = new mongoUser({
            Login: new Login(data.iin),
            Password: new Password(data.password),
            FirstName: data.firstName,
            LastName: data.lastName,
            PhoneNumber: data.phoneNumber
        })
        const result = await newUser.save()
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})

/*
TEST:
POST http://localhost:3000/users/ HTTP/1.1
content-type: application/json

{
    "iin": "020214500042",
    "password": "password",
    "firstName": "Dimash",
    "lastName": "Kenzhegaliev",
    "phoneNumber": "+77055539966"
}
*/
// end Registration User


// begin find user by id
router.get('/id/:id', async (req, res) => {
    try {
        const result = await mongoUser.findById(req.params.id).exec()
        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})

/*
TEST:
get http://localhost:3000/users/id/6086027174b9991f6cf203a9 HTTP/1.1
content-type: application/json
*/
// end find user by id


// begin find by iin
router.get('/iin/:iin', async (req, res) => {
    try {
        const result = await mongoUser.findOne({'Login._login': req.params.iin}).exec()
        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})
/*
TEST:
get http://localhost:3000/users/iin/020214500042 HTTP/1.1
content-type: application/json
*/
// end find by iin


// begin find by name
router.post('/name', async (req, res) => {
    try {
        const data = req.body
        let result

        if (data.firstName && data.lastName) {
            result = await mongoUser.findOne({'FirstName': data.firstName, 'LastName': data.lastName}).exec()
        }
        else if (data.firstName) {
            result = await mongoUser.find({'FirstName': data.firstName}).exec()
        }
        else if (data.lastName) {
            result = await mongoUser.find({'LastName': data.lastName}).exec()
        }

        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})

/*
TEST:
POST http://localhost:3000/users/name/ HTTP/1.1
content-type: application/json

{
    "lastName": "Kenzhegaliev"
}
*/
// end find by name


// begin autorization
router.post('/autorization', async (req, res) => {
    try {
        const data = req.body
        let user = await mongoUser.findOne({'Login._login': data.iin}).exec()
        user.Password = new Password(user.Password._password)
        const result = user.Password.passwordVerify(data.password)
        if (!result) res.sendStatus(500)
        res.status(200).send(user)
    }
    catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

/*
TEST:
POST http://localhost:3000/users/autorization/ HTTP/1.1
content-type: application/json

{
    "iin": "020214500042",
    "password": "password"
}
*/
// end auttorization


// not using
router.get('datesOfBirths', async (req, res) => {
    let users = await mongoUser.find().exec()
    const currentDate = new Date.now()
    let currentDay = currentDate.getDate() + currentDate.getMonth() * 31
    users.forEach(user => {
        user.Birthday = new Date(user.Birthday)
        user.Birthday = new Date(currentDate.getFullYear, user.Birthday.getMonth, user.Birthday.getDate)

        let momentDay = user.Birthday.getDate() + user.Birthday.getMonth() * 31
        user.daysToBirthday = momentDay - currentDay
    })

    sortByDateOfBirth(users)

    res.status(200).json(users)
})

function sortByDateOfBirth(arr) {
    arr.sort((a, b) => a.daysToBirthday > b.daysToBirthday ? 1 : -1);
}

module.exports = router