import React from 'react'
import '../Admission/Admission.css'
import Deliveries from '../Deliveries&Surgeries/Deliveries'


function Admission() {
    return (
        <div>
            <div className="py-3 bg-secondary">
                <h1>Admissions</h1>
                <p className="lead text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium laboriosam eum sunt, et quia sequi qui sapiente est similique cupiditate ea itaque voluptate accusantium, impedit cumque aspernatur earum adipisicing elit. Ipsa laudantium laboriosam eum sunt, et quia sequi qui sapiente est similique cupiditate ea itaque voluptate accusantium, impedit cumque aspernatur earu quod.</p>
                <p className="lead text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium laboriosam eum sunt, et quia sequi qui sapiente est similique cupiditate ea itaque voluptate accusantium, impedit cumque aspernatur earum adipisicing elit. Ipsa laudantium laboriosam eum sunt, et quia sequi qui sapiente est similique cupiditate ea itaque voluptate accusantium, impedit cumque aspernatur earu quod.</p>
                
            </div>
            <div className="card">
                                <div className="card-body">
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Last Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Phone Number" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Age" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Date Admitted" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Spouse's Name" />
                                <input type="Text" className=" form-control border-0 border-bottom m-3" placeholder="Next Of Kin" />
                                <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                                </div>
                            </div>

            <Deliveries />
        </div>
    )
}

export default Admission
