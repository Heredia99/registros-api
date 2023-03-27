import Record from '../models/record';

export async function store(req, res) {
	// const {reference, location, comments, pressure, timestamp} = req.body;
	try {
		const record = new Record({...req.body});
		const error = record.validateSync();
		console.log(error);
		// await record.save();
		res.status(201).send(record);
	} catch (error) {
		res.status(400).send(error);
	}
}