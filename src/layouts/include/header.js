import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div
                        className="spinner-border text-primary"
                        style={{ width: '3rem', height: '3rem' }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}

            {!loading && (
                <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5">
                    <Link to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="text-primary fw-bold m-0">Julfiqur Haidar Raja</h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="#home" className="nav-item nav-link active">Home</a>
                            <a href="#about" className="nav-item nav-link">About</a>
                            <a href="#skill" className="nav-item nav-link">Skills</a>
                        </div>
                        <Link to="/" className="navbar-brand bg-success py-3 px-4 mx-3 d-none d-lg-block">
                            <h1 className="text-white fw-bold m-0">JHR</h1>
                             
                        </Link>
                        <div className="navbar-nav me-auto py-0">
                             <a href="#service" className="nav-item nav-link">Services</a>
                            <a href="#project" className="nav-item nav-link">Projects</a>
                            {/* <a href="#team" className="nav-item nav-link">Team</a>
                            <a href="#testimonial" className="nav-item nav-link">Testimonial</a> */}
                            <a href="#contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Header;
