const router = require('express').Router()

router.get('/', (request, response, next) => {
    response.send({ response: 'worked!' })
})

router.get('/:name', (request, response, next) => {
    response.send({ response: request.params.name })
})

export function route(app) {
    app.use('/api/users', router)
}
