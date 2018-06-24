import { Document, Schema, model } from 'mongoose'
import { IWidget, WidgetSchema } from './Widget'

export interface IWorld extends Document {
	Sky: string
	Ground: string
	Widgets: IWidget[]
}

export const WorldSchema = new Schema({
	Sky: String,
	Ground: String,
	Widgets: [WidgetSchema],
})

export const World = model<IWorld>('World', WorldSchema)
