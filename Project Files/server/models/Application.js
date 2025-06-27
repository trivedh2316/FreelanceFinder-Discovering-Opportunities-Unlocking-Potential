import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  projectId: String,
  freelancerId: String,
  clientId: String,
  status: { type: String, default: 'applied' },
  bidAmount: Number,
  coverLetter: String,
  submittedWork: String,
});

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;
