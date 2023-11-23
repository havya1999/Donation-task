import React from "react";
import "./dashboard.css";
function Donatecart() {
  return (
    // <section id="instructions" class="bg-primary">
    //   <div class="container">
    //     <div class="row g-4">
    //       <div class="col-md-5 col-lg-3">
    //         <div className="card ">
    //           <h3>Donation</h3>
    //           <label className="donate1">
    //             <img src="./asstes/donate1.png" alt="" />
    //           </label>
    //         </div>
    //       </div>

    //       <div class="col-md-5 col-lg-3">
    //         <div class="card bg-light">
    //           <div class="card-body text-center">
    //             <img
    //               src="https://randomuser.me/api/portraits/women/11.jpg"
    //               class="rounded-circle mb-3"
    //               alt=""
    //             />
    //             <h2 class="card-title">Jenny christ</h2>
    //             <p class="card-text">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Suscipit maxime ipsum libero officia quae deleniti.
    //             </p>
    //             <a href="">
    //               <i class="bi bi-twitter text-dark mx-1"></i>
    //             </a>
    //             <a href="">
    //               <i class="bi bi-instagram text-dark mx-1"></i>
    //             </a>
    //             <a href="">
    //               <i class="bi bi-facebook text-dark mx-1"></i>
    //             </a>
    //             <a href="">
    //               <i class="bi bi-linkedin text-dark mx-1"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="bg-primary pb-5">
      <div class="container ">
        <div class="row text-center  g-4">
          <div class="col-md">
            <div class="card ">
              <div class="card-body">
                <h3>Donation</h3>
                <label className="donate1">
                  <img src="./asstes/donate1.png" alt="" />
                </label>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <div class="card-body">
                <h3>Volunteer</h3>
                <label className="donate1">
                  <img src="./asstes/donate1.png" alt="" />
                </label>
              </div>
            </div>
          </div>
        <div class="col-md">
            <div class="card">
              <div class="card-body">
                <h3>Community Events</h3>
                <label className="donate1">
                  <img src="./asstes/donate1.png" alt="" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donatecart;
