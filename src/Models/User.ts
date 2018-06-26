import { Document, Schema, model } from 'mongoose'
import { IWorld, WorldSchema } from './World'

export interface IUser extends Document {
	_id: string
	Login: string
	Password: string
	World: IWorld
}

const UserSchema = new Schema({
	_id: String,
	Login: String,
	Password: String,
	World: WorldSchema,
})

export const User = model<IUser>('User', UserSchema)
