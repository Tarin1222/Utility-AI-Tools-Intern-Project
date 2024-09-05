import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Basic validation for email and password fields
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    
    // You can add more complex validation, such as regex for email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage(''); // Clear error message on valid input
    navigate('/addPayment'); // Navigate to Add Payment after successful sign-in
  };

  const handleSubscribe = () => {
    navigate('/subscribeNow'); // Navigate to /subscribeNow on button click
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img 
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" 
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSignIn}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input 
                  type="email" 
                  id="form1Example13" 
                  className="form-control form-control-lg" 
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  id="form1Example23" 
                  className="form-control form-control-lg" 
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="form1Example3" 
                    defaultChecked 
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              {/* Sign in button */}
              <button 
                type="submit" 
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>

              {/* Subscribe Now button */}
              <button 
                type="button" 
                className="btn btn-secondary btn-lg btn-block mt-4 "
                onClick={handleSubscribe}
              >
                Subscribe Now
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a 
                className="btn btn-primary btn-lg btn-block" 
                style={{ backgroundColor: '#3b5998' }} 
                href="#!"
                role="button"
              >
                <FaFacebook className="me-2" />
                Continue with Facebook
              </a>
              <a 
                className="btn btn-primary btn-lg btn-block" 
                style={{ backgroundColor: '#0e76a8' }} 
                href="#!"
                role="button"
              >
                <FaLinkedin className="me-2" />
                Continue with LinkedIn
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
