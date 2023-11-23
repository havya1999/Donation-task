import React from "react";
import "./dashboard.css";
import Donate1 from "./Donate1";
import Donatecart from "./Donatecart";
import Paymentsector from "./Paymentsector";
import Payment from "./Payment";
function Dashboard() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary fixed-top">
        <div class="container">
        <img src="./asstes/Vector.png" width="30px" class='pe-2' alt="" />
          <h3 class="navbar-brand me-auto text-white" href="#">
            Logoipsum
          </h3>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Logo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-start flex-grow-1 ps-5">
                <li class="nav-item">
                  <a
                    class="nav-link text-white  mx-lg-2 active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  mx-lg-2" href="#">
                    Starting Help
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  mx-lg-2" href="#">
                    About Us
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <button type="button" class="btn btn-warning text-white">
            Contact Us
          </button>
          <button
            class="navbar-toggler  pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <Donate1 />
      <Donatecart />
      <Payment/>
      <Paymentsector/>
    </div>
  );
}

export default Dashboard;
