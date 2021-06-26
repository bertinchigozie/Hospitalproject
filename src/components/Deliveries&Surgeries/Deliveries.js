import React from 'react'
import Pharmacy from '../Pharmacy/Pharmacy'

function Deliveries() {
    return (
        <div>
            <section className="bg-light my-4">
                <div className="container-fluid">
                    <h1>Deliveries & Surgeries</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi sit architecto doloribus? Nihil ipsam, esse repellat repellendus non facere voluptates laborum, quis explicabo iusto obcaecati. Ut repudiandae exercitationem amet beatae neque repellat necessitatibus facilis.</p>
                </div>
                <div className=" row g-3">
                <div className="col-md-6 col-lg-4">
                         <img src="https://images.pexels.com/photos/3470032/pexels-photo-3470032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." />
                </div>
                 <div className="col-md-6 col-lg-4">       
                         <img src="https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." /> 
                 </div>
                 <div className="col-md-6 col-lg-4">       
                         <img src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="..." /> 
                 </div>
                 <div className="col-md-6-col-lg-4 my-2">
                    <div className="card">
                                <div className="card-body">
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Last Name" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Receipt Number" />
                                <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Phone Number" />
                                <input type="Email" className=" form-control border-0 border-bottom m-3" placeholder="Email" />
                                <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                                </div>
                            </div>
                    </div>
                 
                </div>
            </section>
            <Pharmacy />
        </div>
    )
}

export default Deliveries
