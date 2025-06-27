import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

router.get('/freelancer/:id', async (req, res) => {
  try {
    const apps = await Application.find({ freelancerId: req.params.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/myapps/:id', async (req, res) => {
  try {
    const apps = await Application.find({ freelancerId: req.params.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
