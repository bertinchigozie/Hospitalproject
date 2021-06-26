import React from 'react'

function PreMarital() {
    return (
        <div>
             <form action="" className="col-6-md container py-2">
                                      <div className="h2 text-center">Pre Marital</div>
                                     <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Last Name" />
                            <input type="email" className="form-control border-0 border-bottom m-3" placeholder="Email" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Date Of Birth" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Nationality" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Religion" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Residential Address" />
                            <input type="number" className=" form-control border-0 border-bottom m-3" placeholder="Phone number" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Doctor's Name" />
                           
                            <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                </form>
        </div>
    )
}

export default PreMarital
