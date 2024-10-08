import React, { useState } from 'react';
import axios from 'axios';
import Robot from '../Assets/robot.avif'; // Adjust the path as necessary

const SubscribeNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, repeatPassword, agreeTerms } = formData;

    if (!fullName || !email || !password || !repeatPassword || !agreeTerms) {
      alert('Please fill in all fields and agree to terms.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/submitForm", {
        fullName,
        email,
        password,
        repeatPassword
      });
      console.log(response.data);
      alert(response.data.message);  // Show success message
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="vh-100 subscribe-section">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black subscribe-card" style={{ backgroundImage: `url(${Robot})`, backgroundSize: 'contain', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8">
                    <p className="text-center ">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <div className="col">
                          <label htmlFor="fullName" className="form-label">Full Name</label>
                          <input type="text" id="fullName" className="form-control subscribe-input" onChange={handleChange} />
                        </div>
                        <div className="col">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" id="email" className="form-control subscribe-input" onChange={handleChange} />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" id="password" className="form-control subscribe-input" onChange={handleChange} />
                        </div>
                        <div className="col">
                          <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
                          <input type="password" id="repeatPassword" className="form-control subscribe-input" onChange={handleChange} />
                        </div>
                      </div>

                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="agreeTerms" checked={formData.agreeTerms} onChange={() => setFormData(prevState => ({ ...prevState, agreeTerms: !formData.agreeTerms }))} />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          I agree all statements in <a href="/Terms of service.pdf" target="_blank" rel="noopener noreferrer">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="secondary-button">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNow;
