import mongoose from 'mongoose';
import {ServerApiVersion} from 'mongodb';

export async function connect() {
	try {
		await mongoose.connect('mongodb+srv://heredia:Cx0iRz4mDZ4SQhh8@recordcluster.flarhao.mongodb.net/?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Error while trying to connect.', error);
	}
}