import { Document, Schema, model } from 'mongoose'
import { IWorld, WorldSchema } from './World'
import { CONSTANTS } from '../Constants'

export interface IUser extends Document {
	_id: String
	Login: String
	Password: String
	World: IWorld
}

const UserSchema = new Schema({
	_id: String,
	Login: String,
	Password: String,
	World: WorldSchema,
})

UserSchema.pre('save', function (this: any, next) {
	this.Password = Buffer.from(this.Password).toString(
		CONSTANTS.ENCODING,
	)
	next()
})

export const User = model<IUser>('User', UserSchema)
