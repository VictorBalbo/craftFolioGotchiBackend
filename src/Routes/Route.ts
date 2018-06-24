import { Express } from 'express'
import { Login, CreateUser, ListUsers, SetWorld, GetWorld } from '../Controllers/UserController'

export const Route = (app: Express) => {
	app.route('/users').get(ListUsers)
	app.route('/user/:login/:password').get(Login)
	app.route('/user/:userId').get(GetWorld)
	app.route('/user/').post(CreateUser)
	app.route('/user/:userId').post(SetWorld)

	app.route('/').get((request, response) => {
		response.send('Hello world!')
	})

	app.use(function(req, res) {
		res.status(404).send({ url: req.originalUrl + ' not found' })
	})
}
