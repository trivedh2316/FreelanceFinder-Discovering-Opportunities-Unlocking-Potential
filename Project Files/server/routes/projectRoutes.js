import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get('/freelancer/:id', async (req, res) => {
  const projects = await Project.find({ freelancerId: req.params.id });
  res.json(projects);
});

router.get('/working/:id', async (req, res) => {
  const projects = await Project.find({ freelancerId: req.params.id, status: 'working' });
  res.json(projects);
});

router.get('/myprojects/:id', async (req, res) => {
  try {
    const projects = await Project.find({ 'applications.freelancerId': req.params.id });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/apply/:id', async (req, res) => {
  const { freelancerId, proposal, bidAmount } = req.body;
  const project = await Project.findById(req.params.id);
  project.applications.push({ freelancerId, proposal, bidAmount, isAccepted: false });
  await project.save();
  res.json(project);
});

router.post('/submit/:id', async (req, res) => {
  const { freelancerId, fileUrl } = req.body;
  const project = await Project.findById(req.params.id);
  project.submissions.push({ freelancerId, fileUrl, submittedAt: new Date() });
  project.status = 'submitted';
  await project.save();
  res.json(project);
});

export default router;
