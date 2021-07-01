const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('./documentation.json');
const express = require('express')
const app = express()
const service = require('./src/services')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Running')
})

router.get('/v1/public/characters/:id/comics', service.getComics)
router.get('/v1/public/characters/:id/events', service.getEvent)
router.get('/v1/public/characters/:id/series', service.getSerie)
router.get('/v1/public/characters/:id/stories', service.getStory)
router.get('/v1/public/characters', service.getAll)
router.get('/v1/public/characters/:id', service.getId)

app.use(express.json());
app.use('/', router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})