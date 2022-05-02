import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-logo">
                            <img src="image/logo-light-1.png" alt style={{ width: 140 }} className="mb-4" />
                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <ul className="p-0">
                                <i className="fa-brands fa-facebook-f text-white ms-3" />
                                <i className="fa-brands fa-twitter text-white ms-3" />
                                <i className="fa-brands fa-behance text-white ms-3" />
                                <i className="fa-brands fa-pinterest text-white ms-3" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-text">
                            <h6 className="text-uppercase fs-6">Useful Links</h6>
                            <ul className="p-0 my-4">
                                <li><a href="#"><i className="fa-solid fa-angle-right py-3" style={{ paddingRight: 15 }} />Interior Design</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right py-3" style={{ paddingRight: 15 }} />Mattress Shop</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right py-3" style={{ paddingRight: 15 }} />Design Agency</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right py-3" style={{ paddingRight: 15 }} />Contact Us </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-text">
                            <h6 className="text-uppercase fs-6">WRITE</h6>
                            <ul className="p-0 my-4">
                                <li className="py-2"><i className="fas fa-mobile-alt" style={{ paddingRight: 15 }} /><a href="#">contact@Archo.com</a></li>
                                <li className="py-2"><i className="fa-solid fa-phone" style={{ paddingRight: 15 }} /><a href="#">+1(000)987654321</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-text">
                            <h6 className="text-uppercase fs-6">VISIT</h6>
                            <ul className="p-0 my-4">
                                <li className="py-2"><a href="#">contact@Archo.com</a></li>
                                <li className="py-2"><a href="#">+1(000)987654321</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-text">
                            <h6 className="text-uppercase fs-6">VISIT</h6>
                            <p>B17 Princess Road,
                                London, Greater London
                                NW18JR, United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;