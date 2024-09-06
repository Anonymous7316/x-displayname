import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData,setFormData] = useState({firstName:'',lastName:''});
  const [isSubmited, setSubmited] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData(Object.fromEntries(new FormData(e.target).entries()));
    setSubmited(true);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form action='' onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', width:'300px'}}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type='text' name="firstName" required id="firstName"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type='text' name="lastName" required id="lastName"/>
        </div>
        <button type="submit" style={{width:'60px'}}>Submit</button>
     </form>
     <br/>
     {isSubmited && <p>Full Name: {formData.firstName} {formData.lastName}</p>}
    </div>
  );
}

export default App;
