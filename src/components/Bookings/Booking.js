import React from 'react'

function Booking() {
    return (
        <div>
            <section className="py-2">
                <h1 className="lead text-center text-dark h1">Book Appointment</h1>

                <div className="py-1 row container-fluid">
                    <div class="col-md-6 col-lg-6 my-1">
                            <div className="card">
                                    <div className="card-body">
                                            <h5 className="card-tile">See A Specialist</h5>
                                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus modi facilis pariatur temporibus. Dolore, expedita!</p>
                                            <a href="#" className="btn btn-primary">Read More...</a>
                                    </div>
                            </div>
                            
                    </div>
                    <div class="col-md-6 col-lg-6 my-1">
                            <div className="card">
                                    <div className="card-body">
                                            <h5 className="card-tile">See A Consultant</h5>
                                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus modi facilis pariatur temporibus. Dolore, expedita!</p>
                                            <a href="#" className="btn btn-primary">Read More...</a>
                                    </div>
                            </div>
                            
                    </div>
                    <div className="col-md-6-col-lg-4 my-1">
                    <div className="card">
                                <div className="card-body">
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Last Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Phone Number" />
                                <input type="Email" className=" form-control border-0 border-bottom m-3" placeholder="Email" />
                                <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                                </div>
                            </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Booking
