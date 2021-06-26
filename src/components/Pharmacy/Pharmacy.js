import React from 'react'

function Pharmacy() {
    return (
        <div>
            <section className="bg-light">
                <div className="py-0">
                    <h1>Pharmacy Department</h1>
                </div>
                <div className="row">
                <div className="col-md-6-col-lg-4 my-2">
                    <div className="card">
                                <div className="card-body">
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Last Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Receipt Number" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Phone Number" />
                                <input type="Text" className=" form-control border-0 border-bottom m-3" placeholder="Doctor's Name" />
                                <textarea type="Text" className=" form-control border-0 border-bottom m-3" placeholder="Drug Prescription" />
                                <input className="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                                </div>
                            </div>
                    </div>
                    <div className="col-md-6 col-lg-4">       
                         <img src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." /> 
                 </div>
                 <div className="col-md-6 col-lg-4">       
                         <img src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." /> 
                 </div>
                 <div className="col-md-6 col-lg-4">       
                         <img src="https://images.pexels.com/photos/4210617/pexels-photo-4210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." /> 
                 </div>
                </div>
                <div className="py-2">
                    <h1 className="text-center">SAY NO TO DRUG ABUSE!</h1>
                </div>
            </section>
        </div>
    )
}

export default Pharmacy
