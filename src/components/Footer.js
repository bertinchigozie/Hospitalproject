import React from 'react'

function Footer() {
    return (
        <div>
            {/* Footer Section  */}
            <section className="bg-dark my-4">
                <footer className="p-5 bg-dark text-white text-center position-relative">
                    <div className="container">
                        <div>
                        <p className="lead fw-bold">Copyright &copy; 2021 Premus Hospital</p>
                        <a href="#" className="position-absolute bottom-0 end-0 p-5">
                            <i className="bi bi-arrow-up-circle h1"></i>
                        </a>
                        </div>
                        <div>
                            <a href="#">
                                <i className="bi bi-facebook mx-1 h3"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-twitter mx-1 h3"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-instagram mx-1 h3"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-linkedin mx-1 h3"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer
