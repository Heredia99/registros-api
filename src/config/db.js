import mongoose from 'mongoose';
import {ServerApiVersion} from 'mongodb';

export async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Error while trying to connect.', error);
	}
}