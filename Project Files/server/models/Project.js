import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  clientId: String,
  freelancerId: String,
  status: String,
  applications: [
    {
      freelancerId: String,
      proposal: String,
      bidAmount: Number,
      isAccepted: Boolean,
    },
  ],
  submissions: [
    {
      freelancerId: String,
      fileUrl: String,
      submittedAt: Date,
    },
  ],
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;
