import React from 'react';

function Header(props) {
    return (
        <header className="theam-color">
            <div className="container">
                <div className="navbar navbar-expand-lg">
                    <div className="navbar-brand">
                        <a href="index.html">
                            <img src="image/logo-light-1.png" alt />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                        <i className="fa-solid fa-grip-lines fs-3 text-white" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between w-100 align-items-center" id="menu">
                        <ul className="navbar-nav ms-5 text-center">
                            <li className="text-uppercase"><a className="nav-link active text-white" href="index.html">Home<i className="fa-solid fa-angle-down text-white ms-2" /></a></li>
                            <li className="text-uppercase"><a className="nav-link text-white" href="About.html">About<i className="fa-solid fa-angle-down text-white ms-2" /></a></li>
                            <li className="text-uppercase"><a className="nav-link text-white" href="services.html">Services<i className="fa-solid fa-angle-down text-white ms-2" /></a>
                            </li>
                            <li className="text-uppercase"><a className="nav-link text-white" href="#">Blocks<i className="fa-solid fa-angle-down text-white ms-2" /></a></li>
                            <li className="text-uppercase"><a className="nav-link text-white" href="blog.html">Blog<i className="fa-solid fa-angle-down text-white ms-2" /></a></li>
                            <li className="text-uppercase"><a className="nav-link text-white" href="contact-us.html">Contact us<i className="fa-solid fa-angle-down text-white ms-2" /></a></li>
                        </ul>
                        <div className="social-icon text-white">
                            <i className="fa-brands fa-facebook-f ms-3" />
                            <i className="fa-brands fa-twitter ms-3" />
                            <i className="fa-brands fa-behance ms-3" />
                            <i className="fa-brands fa-pinterest ms-3" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;