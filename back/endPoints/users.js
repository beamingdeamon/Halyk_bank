const express = require('express')
const router = express.Router()

const mongoUser = require('../models/User.js').mongoUser
const Password = require('../objects/Password.js')
const Login = require('../objects/Login.js')
const multer = require('multer')
const fs = require('fs')

const tmpDir = __dirname + '/tmp/'
const uploadDir = __dirname + '/uploads/'
const upload = multer({dest: './endPoints/tmp/'})

router.get('/', async (req, res) => {
    const result = await mongoUser.find().exec()
    res.status(200).send( JSON.stringify(result) )
})

router.post('/', upload.single('avatar'), async (req, res) => {
    try {
        const avatar = data.avatar
        const data = req.body

        const validTypes = ['svg+xml', 'png', 'gif', 'jpeg']

        const fileType = avatar.mimetype.split('/')

        const image = null

        if (avatar.size > 1000000) {
            delBadFile(avatar.filename)
            res.status(500).json({
                type: 'error',
                message: 'Файл слишком большой'
            })
        }
        if (fileType[0] !== 'image') {
            delBadFile(avatar.filename)
            res.status(500).json({
                type: 'error',
                message: 'Загружать можно только изображения'
            })
        }
        if (validTypes.includes(fileType[1])) {
            fs.renameSync(tmpDir + avatar.filename, uploadDir + 'avatar' + avatar.originalname)
            image = uploadDir + 'avatar' + avatar.originalname
        } else {
            delBadFile(avatar.filename)
            res.status(500).json({
                type: 'error',
                message: 'недопустимый формат изображения'
            })
        }

        const newUser = new mongoUser({
            Login: new Login(data.login),
            Password: new Password(data.password),
            FirstName: data.firstName,
            LastName: data.lastName,
            Image: image,
            Post: data.post,
            Birthday: new Date(data.birthday)
        })
        const result = await newUser.save()
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        const result = await mongoUser.findById(req.params.id).exec()
        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})

router.get('/login/:login', async (req, res) => {
    try {
        const result = await mongoUser.findOne({'Login._login': req.params.login}).exec()
        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})

router.post('/name', async (req, res) => {
    try {
        const data = req.body
        let result

        if (data.firstName && data.lastName) {
            result = await mongoUser.findOne({'FirstName': data.FirstName, 'LastName': data.lastName})
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

router.post('/autorization', async (req, res) => {
    try {
        const data = req.body
        const user = await mongoUser.findOne({'Login._login': data.login}).exec()
        const result = Password.passwordVerify(data.password)
        if (!result) res.sendStatus(500)
        res.status(200).send(user)
    }
    catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('datesOfBirths', async (req, res) => {
    let users = await mongoUser.find().exec()
    const currentDate = new Date.now()
    users.forEach(user => {
        user.Birthday = new Date(user.Birthday)
    })

    users.forEach(user => {
        user.Birthday = new Date(currentDate.getFullYear, user.Birthday.getMonth, user.Birthday.getDate)
        console.log(user.Birthday)
    })
})

function delBadFile(fileName) {
    fs.unlinkSync(tmpDir + '/' + fileName)
}

module.exports = router