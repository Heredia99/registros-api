// import {router} from 'express/lib/application';
import express from 'express';
import {store} from '../controllers/recordController';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Todos los records.');
});

router.post('/', store);

// router.post('/', (req, res) => {
// 	res.send('Se creó un nuevo record.');
// });

export default router;