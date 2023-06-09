import {Schema, model} from 'mongoose';

const locationSchema = new Schema({
	latitude: {
		type: Number,
		required: true,
	},
	longitude: {
		type: Number,
		required: true,
	},
});

const recordSchema = new Schema({
	reference: {
		type: String,
		required: true,
		index: true,
	},
	location: {
		type: locationSchema,
		required: true,
	},
	comments: [String],
	pressure: {
		type: Number,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

export default model('Record', recordSchema);