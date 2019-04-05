import express from 'express';
import { read } from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('posts');
})

router.get('/read/:id', (req, res) => {
    res.send('You ar reading post ' + read.params.id);
})

export default router;