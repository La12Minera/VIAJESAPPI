const { Router } = require('express')

const router = new Router()

router.get('/api/helloworld', (req, res) => {
    res.json({ msj: 'Hello World'})
})

module.exports = router

