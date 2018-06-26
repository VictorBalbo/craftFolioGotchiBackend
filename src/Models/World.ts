import { Document, Schema, model } from 'mongoose'

export interface IWorld extends Document {
	Sky: string
	Ground: string
	Widgets: {}
}

export const WorldSchema = new Schema({
	Sky: String,
	Ground: String,
	Widgets: {},
})

export const World = model<IWorld>('World', WorldSchema)
