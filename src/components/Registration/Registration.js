import React from 'react'
import Booking from '../Bookings/Booking'

function Registration() {
    return (
        <div>

           
                     {/* Registration Section */}
            <div className="container-fluid py-3">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                         <button className="accordion-button collapsed h1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                         <h1 className="text-center">Register</h1>
                        </button>
                        </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                                 <form action="" className="col-6-md container py-2">
                                      <div className="h2 text-center">Registration Form</div>
                                     <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Last Name" />
                            <input type="email" className="form-control border-0 border-bottom m-3" placeholder="Email" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Date Of Birth" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Nationality" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Religion" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Residential Address" />
                            <input type="number" className=" form-control border-0 border-bottom m-3" placeholder="Phone number" />
                            <input type="password" className="form-control border-0 border-bottom m-3" placeholder="Password" />
                            <input type="password" className="form-control border-0 border-bottom m-3" placeholder="Confirm Password" />
                            <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                </form>
                <div className="text-dark">
                <Booking />
                </div>
                         </div>
                    </div>
                </div>
               
              </div>  
            </div>

           
        </div>
    )
}

export default Registration
