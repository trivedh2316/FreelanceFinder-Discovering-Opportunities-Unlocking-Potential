import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/WorkingProject.css';

const WorkingProject = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [notes, setNotes] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert('Please select a file to upload.');

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('notes', notes);

    try {
      await axios.post('http://localhost:6001/api/projects/submit-work', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      setUploadStatus('File upload failed. Try again.');
    }
  };

  return (
    <div className="working-project container mt-5">
      <h2>Submit Project Work</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload Final File:</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>

        <div className="form-group mt-3">
          <label>Additional Notes (optional):</label>
          <textarea
            className="form-control"
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Submit Work
        </button>
      </form>

      {uploadStatus && <p className="status-msg mt-3">{uploadStatus}</p>}
    </div>
  );
};

export default WorkingProject;
