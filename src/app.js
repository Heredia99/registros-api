import express from 'express';
import path from 'path';
import recordRoutes from './routes/recordRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use('/records', recordRoutes);

export default app;