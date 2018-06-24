import { Express } from 'express'
import { Login, CreateUser, ListUsers, SetWorld, GetWorld } from '../Controllers/UserController'

export const Route = (app: Express) => {
	app.route('/users').get(ListUsers)
	app.route('/user/:userId').get(GetWorld)
	app.route('/user/').post(CreateUser).options(CreateUser)
	app.route('/user/:userId').post(SetWorld).options(SetWorld)
	
	app.route('/login').post(Login).options(Login)
	
	app.route('/').get((request, response) => {
		response.send('Hello world!')
	})

	app.use(function(req, res) {
		res.status(404).send({ url: req.originalUrl + ' not found' })
	})
}
