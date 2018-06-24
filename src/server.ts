import * as bodyParser from 'body-parser'
import * as express from 'express'
import { CONSTANTS } from './Constants'
import { Route } from './Routes/Route'

const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT || 8081

export class Server {
	constructor() {
		mongoose.Promise = global.Promise
		mongoose.connect(CONSTANTS.DATABASE_URL)

		app.use(bodyParser.urlencoded({ extended: true }))
		app.use(bodyParser.json())

		app.use(function(req, res, next) {
			res.header('Access-Control-Allow-Origin', '*')
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept',
			)
			next()
		})
	}

	start() {
		Route(app)

		app.listen(port, () => {
			console.log('API server started on: ' + port)
		})
	}
}
