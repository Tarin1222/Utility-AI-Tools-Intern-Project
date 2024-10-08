import React from 'react';

const Bkash = () => {
  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style: none;
              font-family: 'Montserrat', sans-serif;
          }

          body {
              background-color: #050832   ;
          }

          .container {
              margin: 20px auto;
              width: 800px;
              padding: 30px;
          }

          .card.box1 {
              width: 350px;
              height: 500px;
              background-color:#212226 ;
              color: #baf0c3;
              border-radius: 0;
          }

          .card.box2 {
              width: 450px;
              height: 580px;
              background-color: #ffffff;
              border-radius: 0;
          }

          .text {
              font-size: 13px;
          }

          .box2 .btn.btn-primary.bar {
              width: 20px;
              background-color: transparent;
              border: none;
              color: #5b5f97 ;
          }

          .box2 .btn.btn-primary.bar:hover {
              color: #baf0c3;
          }

          .box1 .btn.btn-primary {
              background-color:#5b5f97;
              width: 45px;
              height: 45px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid #ddd;
          }

          .box1 .btn.btn-primary:hover {
              background-color: #f6f8f7;
              color: #57c97d;
          }

          .btn.btn-success {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background-color: #ddd;
              color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
          }

          .nav.nav-tabs {
              border: none;
              border-bottom: 2px solid #ddd;
          }

          .nav.nav-tabs .nav-item .nav-link {
              border: none;
              color: black;
              border-bottom: 2px solid transparent;
              font-size: 14px;
          }

          .nav.nav-tabs .nav-item .nav-link:hover {
              border-bottom: 2px solid #3ecc6d;
              color: #05cf48;
          }

          .nav.nav-tabs .nav-item .nav-link.active {
              border: none;
              border-bottom: 2px solid #3ecc6d;
          }

          .form-control {
              border: none;
              border-bottom: 1px solid #ddd;
              box-shadow: none;
              height: 20px;
              font-weight: 600;
              font-size: 14px;
              padding: 15px 0px;
              letter-spacing: 1.5px;
              border-radius: 0;
          }

          .inputWithIcon {
              position: relative;
          }

          img {
              width: 50px;
              height: 20px;
              object-fit: cover;
          }

          .inputWithIcon span {
              position: absolute;
              right: 0px;
              bottom: 9px;
              color: #57c97d;
              cursor: pointer;
              transition: 0.3s;
              font-size: 14px;
          }

          .form-control:focus {
              box-shadow: none;
              border-bottom: 1px solid #ddd;
          }

          .btn-outline-primary {
              color: black;
              background-color: #ddd;
              border: 1px solid #ddd;
          }

          .btn-outline-primary:hover {
              background-color: #05cf48;
              border: 1px solid #ddd;
          }

          .btn-check:active+.btn-outline-primary,
          .btn-check:checked+.btn-outline-primary,
          .btn-outline-primary.active,
          .btn-outline-primary.dropdown-toggle.show,
          .btn-outline-primary:active {
              color: #baf0c3;
              background-color: #3ecc6d;
              box-shadow: none;
              border: 1px solid #ddd;
          }

          .btn-group>.btn-group:not(:last-child)>.btn,
          .btn-group>.btn:not(:last-child):not(.dropdown-toggle),
          .btn-group>.btn-group:not(:first-child)>.btn,
          .btn-group>.btn:nth-child(n+3),
          .btn-group>:not(.btn-check)+.btn {
              border-radius: 50px;
              margin-right: 20px;
          }

          form {
              font-size: 14px;
          }

          form .btn.btn-primary {
              width: 100%;
              height: 45px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #3ecc6d;
              border: 1px solid #ddd;
          }

          form .btn.btn-primary:hover {
              background-color: #05cf48;
          }

          @media (max-width:750px) {
              .container {
                  padding: 10px;
                  width: 100%;
              }

              .text-green {
                  font-size: 14px;
              }

              .card.box1,
              .card.box2 {
                  width: 100%;
              }

              .nav.nav-tabs .nav-item .nav-link {
                  font-size: 12px;
              }
          }
        `}
      </style>

      {/* Payment Form */}
      <div className="container bg-light d-md-flex align-items-center">
        <div className="card box1 shadow-sm p-md-5 p-4">
          <div className="fw-bolder mb-4">
            <span className="fas fa-dollar-sign"></span>
            <span className="ps-1">599,00</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between text">
              <span>Commission</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">1.99</span>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mb-4">
              <span>Total</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">600.99</span>
              </span>
            </div>
            <div className="border-bottom mb-4"></div>
            <div className="d-flex flex-column mb-4">
              <span className="far fa-file-alt text">
                <span className="ps-2">Invoice ID:</span>
              </span>
              <span className="ps-3">SN8478042099</span>
            </div>
            <div className="d-flex flex-column mb-5">
              <span className="far fa-calendar-alt text">
                <span className="ps-2">Next payment:</span>
              </span>
              <span className="ps-3">22 December, 2025</span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mt-5">
              <div className="d-flex flex-column text">
                <span>Customer Support:</span>
                <span>online chat 24/7</span>
              </div>
              <div className="btn btn-primary rounded-circle">
                <span className="fas fa-comment-alt"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="card box2 shadow-sm">
          <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
            <span className="h5 fw-bold m-0">Payment methods</span>
            <div className="btn btn-primary bar">
              <span className="fas fa-bars"></span>
            </div>
          </div>
          <ul className="nav nav-tabs mb-3 px-md-4 px-2">
            <li className="nav-item">
              <a className="nav-link px-2 active" aria-current="page" href="#">
                Credit Card
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="#">
                Mobile Payment
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link px-2" href="#">
                + More
              </a>
            </li>
          </ul>

          <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
            <div className="btn btn-success me-4">
              <span className="fas fa-plus"></span>
            </div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                <span className="pe-1">+</span>5949
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                <span className="lpe-1">+</span>3894
              </label>
            </div>
          </div>

          <form action="">
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Credit Card</span>
                  <div className="inputWithIcon">
                    <input className="form-control" type="text" value="5136 1845 5468 3894" />
                    <span>
                      <img
                        src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                  <span>
                    Expiration<span className="ps-1">Date</span>
                  </span>
                  <div className="inputWithIcon">
                    <input type="text" className="form-control" value="05/20" />
                    <span className="fas fa-calendar-alt"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span>Code CVV</span>
                  <div className="inputWithIcon">
                    <input type="password" className="form-control" value="123" />
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Name</span>
                  <div className="inputWithIcon">
                    <input
                      className="form-control text-uppercase"
                      type="text"
                      value="Farzana Islam"
                    />
                    <span className="far fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 px-md-5 px-4 mt-3">
                <div className="btn btn-primary w-100">Pay $599.00</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bkash;
