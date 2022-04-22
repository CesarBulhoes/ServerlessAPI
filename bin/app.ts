import * as dotenv from 'dotenv'
import * as express from 'express'
import * as serverless from 'serverless-http'

import { route as UserRoute } from '../api/routes/UserRoute'

dotenv.config()

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

UserRoute(app)

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
module.exports.handler = serverless(app)
