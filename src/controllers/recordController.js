import Record from '../models/record';

export async function store(req, res) {
	try {
		const record = new Record({...req.body});
		await record.save();
		res.status(201).send(record);
	} catch (error) {
		const messages = [];
		for (const field in error.errors)
			messages.push(error.errors[field].message);
		res.status(400).send(messages.length === 0 ? error : {messages});
	}
}

export async function list(req, res) {
	try {
		const records = await Record.find();
		res.send(records);
	} catch (error) {
		res.status(500).send(error);
	}
}

export async function show(req, res) {
	try {
		const {id} = req.params;
		if (id.match(/^[0-9a-fA-F]{24}$/)) {
			const record = await Record.findById(id);
			if (record)
				res.send(record);
			else
				res.status(404).send({
					error: `Record with ${id} was not found.`,
				});
		}
		else
			res.status(422).send({error: `${id} is not a valid mongoDB ID.`});
	} catch (error) {
		res.status(500).send(error);
	}
}