import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import validation from "./rejexvalidaotrs";

function Paymentsector() {
  const initialvalues = {
    fullname: "",
    email: "",
    postalcode: "",
    Taxrecepient: "",
    taxfullname: "",
    uninumb: "",
    remark: "",
    Address: "",
    Donate:""
  };
  const [values, SetFormvalues] = useState(initialvalues);
  const [errors, setErrors] = useState({});
  
  const Navigate  =useNavigate()
  const handlechange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    SetFormvalues(newObj);
  };


  const  validation = () => {
    const errors = {};
  
    const email_pattern =/^[^\s@]+@[^\s@]+$/;
  
    if (!values.fullname.trim()) {
      errors.fullname = "Name is Requires";
    }
   
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (values.postalcode === "") {
      errors.postalcode = "Postal code is Requires";
    }
    if (values.Taxrecepient === "") {
      errors.Taxrecepient = "Tax Recepient is Requires";
    }
    if (values.taxfullname === "") {
      errors.taxfullname = "Tax Full Name is Requires";
    }
    if (values.uninumb === "") {
      errors.uninumb = "Unit Number is Requires";
    }
    if (values.remark === "") {
      errors.remark = "Remark is Requires";
    }
    if (values.Address === "") {
      errors.Address = "Address is Requires";
    }
    if (values.Donate === "") {
      errors.Donate = "Donate is Requires";
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
   
  }
  
  function handleSubit(e) {
    e.preventDefault();

   
    if (validation()) {
      // Simulate registration logic (replace with actual logic)
      // If successful, redirect to another page
      // For demonstration, I'll use a timeout to simulate an asynchronous operation
      setTimeout(() => {
        alert('Registration successful! Redirecting...');
        Navigate('/Success'); // Redirect to another page
      }, 1000);
    }
    else {  
      alert('Please fill in the required fields correctly');
      
    }
   
  }

  return (
    <div>
      <section class="bg-light   text-center text-sm-start">
        <div class="container p-5">
          <div class="d-sm-flex align-items-center justify-content-center">
            <div>
              <h5 class="text-black">Let us know about you</h5>
              <div class="row ">
                <div class="col-sm-4">
                  <div class="card border-warning mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Donate as an Individuals Provide my personal data
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card border-warning mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Donate as an Organization
                          <br />
                          Provide organization data
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card border-warning mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Donate Anonymously
                          <br />
                          Optionally provide data
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form */}
              <div>
                <h5 class="text-black">
                  Let’s complete your information details
                </h5>
                <form class="validate-form" onSubmit={handleSubit}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      I wish to have tax deduction
                      <br />
                      You are entitled to a tax-deduction of 2.5 times of your
                      donation amount
                    </label>
                  </div>

                  <div class="col-lg-12 mt-4">
                    <div class="row">
                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Full Name"
                          class="form-control"
                          value={values.fullname}
                          onChange={handlechange}
                        />
                        {errors.fullname && 
                          <p style={{ color: "red" }}>{errors.fullname}</p>
                        }
                      </div>

                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                          class="form-control"
                          value={values.email}
                          onChange={handlechange}
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email}</p>
                        )}
                      </div>

                      <div class="col-2  mt-3 form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>NRIC</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="col-2  mt-3">
                        <input
                          type="text"
                          name="Taxrecepient"
                          placeholder="Tax Recpient ID"
                          class="form-control"
                          value={values.Taxrecepient}
                          onChange={handlechange}
                        />
                          {errors.Taxrecepient && 
                          <p style={{ color: "red" }}>{errors.Taxrecepient}</p>
                        }
                      </div>

                      <div class="col-8  mt-3">
                        <input
                          type="text"
                          name="taxfullname"
                          placeholder="Tax Recipient full name"
                          class="form-control"
                          value={values.taxfullname}
                          onChange={handlechange}
                        />
                          {errors.taxfullname && 
                          <p style={{ color: "red" }}>{errors.taxfullname}</p>
                        }
                      </div>

                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="postalcode"
                          placeholder="Postal Code"
                          class="form-control"
                          value={values.postalcode}
                          onChange={handlechange}
                        />
                         {errors.Address && 
                          <p style={{ color: "red" }}>{errors.postalcode}</p>
                        }
                      </div>

                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="Address"
                          placeholder="Address"
                          class="form-control"
                          value={values.Address}
                          onChange={handlechange}
                        />
                          {errors.Address && 
                          <p style={{ color: "red" }}>{errors.Address}</p>
                        }
                      </div>

                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="uninumb"
                          placeholder="Unit Number"
                          class="form-control"
                          value={values.uninumb}
                          onChange={handlechange}
                        />
                          {errors.uninumb && 
                          <p style={{ color: "red" }}>{errors.uninumb}</p>
                        }
                      </div>

                      <div class="col-6  mt-3">
                        <input
                          type="text"
                          name="remark"
                          placeholder="Remarks"
                          class="form-control"
                          value={values.remark}
                          onChange={handlechange}
                        />
                          {errors.remark && 
                          <p style={{ color: "red" }}>{errors.remark}</p>
                        }
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center mt-3">
                    <h5>How much would you like to done</h5>
                    <div class="col-md-5">
                      <input
                        type="text"
                        name="Donate"
                        placeholder="Donation Amount"
                        class="form-control"
                        value={values.Donate}
                          onChange={handlechange}
                      />
                        {errors.Donate && 
                          <p style={{ color: "red" }}>{errors.Donate}</p>
                        }
                    </div>
                  </div>
                  <div class="container  mt-5">
                    <div class="row  justify-content-center">
                      <div class="card  col-2 me-2">
                        <div class="card-body d-flex">
                          <div class="logo-container">
                            <img
                              src="./asstes/Mastercard.png"
                              alt="Logo"
                              class="logo img-fluid pe-2"
                            />
                          </div>

                          <div class="content-container mt-1">
                            <h6 class="card-title">Credit Card</h6>
                          </div>
                        </div>
                      </div>
                      <div class="card  col-2">
                        <div class="card-body d-flex">
                          <div class="logo-container">
                            <img
                              src="./asstes/Paynow.png"
                              alt="Logo"
                              class="logo img-fluid pe-2 "
                            />
                          </div>

                          <div class="content-container mt-1">
                            <h6 class="card-title">PayNow</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row d-flex align-items-center justify-content-center">
                    <div class="form-check col-md-3 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        I agree with the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div class="row justify-content-center mt-4">
                    {/* <Link to="/Success" className="col-sm-2  btn btn-primary">
                      Donate
                      <img src="" alt="" />
                    </Link> */}

                    <button class="col-sm-2 btn btn-primary">Donate</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paymentsector;
