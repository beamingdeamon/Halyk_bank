const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')

const mongoArticles = require('../models/Article.js').mongoArticles

const tmpDir = __dirname + '/tmp/'
const uploadDir = __dirname + '/tmp/'
const upload = multer({dest: './endPoints/tmp/'})

//begin request all articles
router.get('/', async (req, res) => {
    const result = await mongoArticles.find().exec()
    res.status(200).send( JSON.stringify(result) )
})
// end reuest all articles


router.get('/load/:aid', async (req, res) => {
    const resArticle = await mongoArticles.findById(req.params.aid)
    res.sendFile(resArticle.imageSystemPath)
})


// begin create article
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const data = req.body

        const image = req.file

        tmpParagraphs = data.paragraphs.split(',')

        const newArticle = new mongoArticles({
            title: data.title,
            paragraphs: tmpParagraphs
        })
        const result = await newArticle.save()

        fs.renameSync(tmpDir + image.filename, uploadDir + 'image' + result._id + image.originalname)
        imageString = uploadDir + 'image' + result._id + image.originalname

        const imagePath = 'http://localhost:3000/articles/load/' + result._id
        await mongoArticles.updateOne({ _id: result._id }, { imagePath: imagePath, imageSystemPath: imageString })
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})
// end create article


router.get('/find/:id', async (req, res) => {
    const result = await mongoArticles.findById(req.params.id).exec()
    if (!result) res.sendStatus(500)
    res.status(200).send(result)
})

module.exports = router