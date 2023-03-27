import express from 'express';
import {store, list, show} from '../controllers/recordController';

const router = express.Router();

router.post('/', store);
router.get('/', list);
router.get('/:id', show);

export default router;