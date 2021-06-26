import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
import Services from '../Services/Services'
import Emergency from '../Emergency/Emergency'
import Footer from '../Footer'
import Eye from '../EyeClinic/Eye'
import Registration from '../Registration/Registration'
import '../DeskOfficer/DeskOfficer.css'
import Consultation from '../Consultation/Consultation'
import PreMarital from '../PreMarital/PreMarital'
import { Link } from 'react-router-dom'

function DeskOfficer() {
    return (
        <Router>
        <div className="">

            {/* Navbar Section  */}
             <nav className="navbar navbar-expand-sm navbar-light text-light bg-secondary">
          <div className="container d-flex justify-content-space-between align-items-center">
            <Link to='/' className="navbar-brand text-light"><i className="h4 bi bi-plus"></i> Premus Hospital</Link>
            <button className="navbar-toggler d-sm-none " type="button" data-bs-toggle="collapse" data-bs-target="#links">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse ml-5" id="links">
                <ul className="navbar-nav ml-5">
                    <li className="nav-item">
                        <Link to='/Deskofficer' className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Registration' className="nav-link">Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Emergency' className="nav-link">Emergency</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Services' className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/PreMarital' className="nav-link">PreMarital</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Eye' className="nav-link">Eye</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Consultation' className="nav-link">Consultation</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Logout' className="nav-link">Log Out</Link>
                    </li>
                </ul>
              </div>
          
            
            </div>
            </nav>

            {/* Welcome Text */}
    <section className="bg-light text-center p-3">
        <div className="container">
            <div className="d-flex justify-content-space-between align-items-center">
                <div>
                    <h3>Welcome To Premus Hospital.</h3>
                    <p className="lead">Lorem ipsum dolor, obcaecati repellat accusantium, soluta assumenda, praesentium et cumque labore esse? Adipisciobcaecati repellat accusantium, soluta assumenda, praesentium et cumque labore esse? Adipiscisit amet consectetur adipisicing elit. Vero blanditiis consequuntur cupiditate natus minus nulla tempore ullam dignissimos saepe, distinctio illum ipsam hic dolor?</p>

                </div>
            </div>
        </div>
    </section>
             <div className="bg-light home">
               <div className="container d-md-flex justify-content-space-between align-items-center">
               <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Molestias, iusto voluptatibus.  Incidunt magnam repellendus unde quia eum perspiciatis Incidunt magnam repellendus unde quia eum perspiciatis?</p>

               <img src="../img2.jpg" alt="" className="d-md-6 img-fluid height: auto width:100% rounded btn" style={{ height:"500px"}} />
               </div>
             </div>
             <div>
            <Switch>
                <Route exact path='/Registration' component={Registration} />
                <Route exact path='/Emergency' component={Emergency} />
                 <Route exact path='/Services' component={Services} /> 
                 <Route exact path='/PreMarital' component={PreMarital} />
                 <Route exact path='/Eye' component={Eye} />
                <Route exact path='/Consultation' component={Consultation} />
            </Switch>
            </div>
            <Footer />
        </div>
        </Router>
    )  
}

export default DeskOfficer
