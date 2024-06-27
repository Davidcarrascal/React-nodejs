import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [pqrs, setPqrs] = useState([]);
  const [newPqrs, setNewPqrs] = useState({ type: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPqrs({ ...newPqrs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPqrs([...pqrs, newPqrs]);
    setNewPqrs({ type: '', description: '' });
  };

  return (
    <>
    
      <div className="pqrs-form">
        <h2>Submit a PQRS</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Type:
            <select name="type" value={newPqrs.type} onChange={handleInputChange} required>
              <option value="">Select type</option>
              <option value="Petition">Petition</option>
              <option value="Complaint">Complaint</option>
              <option value="Request">Request</option>
              <option value="Suggestion">Suggestion</option>
            </select>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={newPqrs.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="pqrs-list">
        <h2>Submitted PQRS</h2>
        <ul>
          {pqrs.map((item, index) => (
            <li key={index}>
              <strong>{item.type}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Su solicitud sera resuelta en los siguientes 5 dias habiles 
      </p>
    </>
  );
}

export default App;