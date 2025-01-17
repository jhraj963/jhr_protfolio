import React from 'react'

function Footer() {
   return (
    <>
       
    <div className="container-fluid bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom text-secondary" href="#"></a> All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a className="border-bottom text-secondary">Julfiqur Haidar Raja</a>
                        {/* <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
                    </div>
                </div>
            </div>
    </div>

   


    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
   )
}

export default Footer