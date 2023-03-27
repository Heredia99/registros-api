import {Schema, model} from 'mongoose';

const locationSchema = new Schema({
	latitude: String,
	longitude: String,
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