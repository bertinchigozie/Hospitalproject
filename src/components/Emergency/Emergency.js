import React from 'react'

function Emergency() {
    return (
        <div> 

           {/* About Section */}
           <section className="bg light my-3">
               <div className="container">
                   <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sequi velit ut tempora facilis obcaecati repellat accusantium, soluta assumenda, praesentium et cumque labore esse? Adipisci?</p>
               </div>
           </section>
           
        {/* Carousel Section */}
    <section className="bg-light my-4"> 
    <div className="container py-3">
        <h1>Reliable Ambulance Services</h1>
        <p className="lead" ><span className="fw-bold">Emergency numbers:  911,  01-234-563,  555-564-232</span></p>
    </div>  
    <div id="carouselExampleSlidesOnly" className="carousel slide card w-50 container-fluid bg-light" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/6520047/pexels-photo-6520047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
                <img src="https://images.pexels.com/photos/6520084/pexels-photo-6520084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
                <img src="https://images.pexels.com/photos/6520213/pexels-photo-6520213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="" />
            </div>
        </div>
    </div>
    </section> 
    <div className="container">
    <form action="" className="col-6-md container py-2">
                                      <div className="h2 text-center">Identification Form</div>
                                     <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="First Name" />
                            <input type="text" className="form-control border-0 border-bottom m-3" placeholder="Last Name" />
                            <input type="email" className="form-control border-0 border-bottom m-3" placeholder="Email" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Date Of Birth" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Nationality" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Religion" />
                            <input type="text" className=" form-control border-0 border-bottom m-3" placeholder="Residential Address" />
                            <input type="number" className=" form-control border-0 border-bottom m-3" placeholder="Phone number" />
                            <input type="Text" className=" form-control border-0 border-bottom m-3" placeholder="Next Of Kin" />
                            <input class="d-grid col-12 m-2 btn btn-primary" type="submit" value="Submit" /> 
                </form>
    </div>

    
           
    </div>
    )
}

export default Emergency
