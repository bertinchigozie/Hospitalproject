import React from 'react'

function Lab() {
    return (
        <div>
            
            <section className="bg-light">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                         <button className="accordion-button collapsed h1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                         <h1 className="text-center">Laboratory</h1>
                        </button>
                        </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minima aut ex libero corporis distinctio quibusdam illo beatae, voluptatem eligendi.os minima aut ex libero corporis distinctio quibusdam illo beatae, voluptatem eligendios minima aut ex libero corporis distinctio quibusdam illo beatae, voluptatem eligendi</p>
           <div className="row g-4">
           <div className="col-md-6 col-lg-4">
            <img src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 col-lg-4">
                <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 col-lg-4">
                <img src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="" />
                </div>
                <div className="py-2">
                <form action="" className="col-6-md container py-2">
                                      <div className="h2 text-center">Lab Form</div>
                                     <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Last Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Doctor's Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Receipt Number" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Patient's Age" />
                            <textarea type="text" className="form-control border-0 border-bottom m-3" placeholder="Test to Perform" />
                            <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                </form>
                </div>
               
           </div>
           </div>
           </div>
           </div>
           </div>
            </section>
        </div>
    )
}

export default Lab
