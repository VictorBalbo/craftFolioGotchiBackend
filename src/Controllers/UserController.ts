import { Request, Response } from 'express'
import { User } from '../Models/User'
import { v4 } from 'uuid'
import { World } from '../Models/World'

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
			Login: request.params.login,
			Password: request.params.password,
		})
		if (user) {
			response.json(user)
		} else {
			response.sendStatus(404)
		}
	} catch (error) {
		response.send(error)
	}
}

export const GetWorld = async (request: Request, response: Response) => {
	try {
		const user = await User.findById(request.params.userId)
		if (user) {
			response.json(user.World)
		} else {
			response.sendStatus(404)
		}
	} catch (error) {
		response.send(error)
	}
}

export const CreateUser = async (request: Request, response: Response) => {
	try {
		const user = new User(request.body)
		user._id = v4()
		await user.save()
		response.sendStatus(200)
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
