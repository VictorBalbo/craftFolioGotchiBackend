import { Request, Response } from 'express'
import { User } from '../Models/User'
import { v4 } from 'uuid'
import { World } from '../Models/World'
import { CONSTANTS } from '../Constants'

export const ListUsers = async (request: Request, response: Response) => {
	try {
		const users = await User.find()
		response.json(users)
	} catch (error) {
		response.send(error)
	}
}

export const Login = async (request: Request, response: Response) => {
	try {
		const user = await User.findOne({
			Login: request.body.Login,
			Password: request.body.Password,
		})
		response.json(user)
	} catch (error) {
		response.send(error)
	}
}

export const GetWorld = async (request: Request, response: Response) => {
	try {
		console.log(request.params.userId)
		const user = await User.findById(request.params.userId)
		console.log(user)
		if (user) {
			response.json(user.World)
		} else {
			response.send(null)
		}
	} catch (error) {
		response.send(error)
	}
}

export const CreateUser = async (request: Request, response: Response) => {
	try {
		let user = await User.findOne({
			Login: request.body.Login,
		})
		if (user) {
			response.status(400).send('Usuario ja cadastrado')
			return
		}
		user = new User(request.body)
		user.Password = Buffer.from(user.Password).toString(CONSTANTS.ENCODING)
		user._id = v4()
		await user.save()
		response.send(user)
	} catch (error) {
		response.send(error)
	}
}

export const SetWorld = async (request: Request, response: Response) => {
	try {
		const user = await User.findById(request.params.userId)
		const world = new World(request.body)
		user.World = world
		await user.save()
		response.sendStatus(200)
	} catch (error) {
		response.send(error)
	}
}
