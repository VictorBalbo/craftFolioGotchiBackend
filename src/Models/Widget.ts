import { Schema, model, Document } from 'mongoose'

export interface IWidget extends Document {
	X: number
	Y: number
}

export const WidgetSchema = new Schema({
	X: String,
	Y: String,
})

export const Widget = model<IWidget>('Widget', WidgetSchema)
