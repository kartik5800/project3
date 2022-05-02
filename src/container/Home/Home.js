import React from 'react';

function Home(props) {
    return (
        <main>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <div className="row">
                            <div className="col-lg-4 p-0">
                                <div className="banner-imges">
                                    <img src="image/banner-patern.png" className="vh-100 w-100" alt="..." />
                                    <div className="banner-text">
                                        <h5>Elegant &amp;</h5>
                                        <h1 className="text-white">INTERIOR DESIGN</h1>
                                        <p className="text-white">Right design and right ideas matter a lot of in interior
                                            design
                                            business a style that makes a statement.</p>
                                        <span className="btn text-white mt-3">Discover Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 p-0">
                                <div className="banner-img">
                                    <img src="image/port4.jpg" alt style={{ backgroundSize: 'cover' }} className="vh-100 w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <div className="row">
                            <div className="col-lg-4 p-0">
                                <div className="banner-imges">
                                    <img src="image/banner-patern.png" className="vh-100 w-100" alt="..." />
                                    <div className="banner-text">
                                        <h5>Innovative</h5>
                                        <h1 className="text-white">INTERIOR DESIGN</h1>
                                        <p className="text-white">Right design and right ideas matter a lot of in interior
                                            design
                                            business a style that makes a statement.</p>
                                        <span className="btn text-white mt-3">Discover Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 p-0">
                                <div className="banner-img">
                                    <img src="image/pp1.jpg" alt className="vh-100 w-100" style={{ backgroundSize: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-4 p-0">
                                <div className="banner-imges">
                                    <img src="image/banner-patern.png" className="vh-100 w-100" alt="..." />
                                    <div className="banner-text">
                                        <h5>interior</h5>
                                        <h1 className="text-white">INTERIOR DESIGN</h1>
                                        <p className="text-white">Right design and right ideas matter a lot of in interior
                                            design
                                            business a style that makes a statement.</p>
                                        <span className="btn text-white mt-3">Discover Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 p-0">
                                <div className="banner-img">
                                    <img src="image/2-3.jpg" alt className="vh-100 w-100" style={{ backgroundSize: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*------ aboutus -------*/}
            <section className="about-us m-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 about-us-text">
                            <div className="about-us" style={{ marginLeft: '10%' }}>
                                <h6 className="mx-5">ABOUT US</h6>
                                <h2 className="text-white mt-3 mx-5">OUR COMAPNY</h2>
                                <div className="about-box my-5 mx-2">
                                    <h2 className="text-white">25 years of Experience</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-img">
                                <img src="image/2-3.jpg" alt className="img-fluid" />
                                <div className="about-img-text mt-2 mx-5">
                                    <h5>01</h5>
                                    <p className="text-white">Architecture</p>
                                </div>
                                <div className="about-img-text mt-2 mx-5">
                                    <h5>01</h5>
                                    <p className="text-white">Interior Design</p>
                                </div>
                                <div className="about-img-text mt-2 mx-5">
                                    <h5>01</h5>
                                    <p className="text-white">3D Modeling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--- services--- */}
            <section className="services m-100">
                <div className="container">
                    <div className="row services-padding">
                        <div className="services-texts mb-5">
                            <h2 className="text-white">SERVICES</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-icon">
                                <i className="fa-solid fa-music" />
                                <div className="services-text mt-5">
                                    <h6 className="text-white">Design &amp; Planning</h6>
                                    <p>At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti
                                        um voluptatum deleniti</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-icon">
                                <i className="fa-solid fa-cloud-arrow-up" />
                                <div className="services-text mt-5">
                                    <h6 className="text-white">Design &amp; Planning</h6>
                                    <p>At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti
                                        um voluptatum deleniti</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-icon">
                                <i className="fa-solid fa-rotate-right" />
                                <div className="services-text mt-5">
                                    <h6 className="text-white">Design &amp; Planning</h6>
                                    <p>At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti
                                        um voluptatum deleniti</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------works-------- */}
            <section className="works py-100">
                <div className="container">
                    <div className="services-texts mb-5">
                        <h2 className="text-white">WORKS</h2>
                    </div>
                    <div className="row">
                        <div className="column-count">
                            <div className="position-relative works-img">
                                <img src="image/pp04.jpg" alt className="img-fluid" />
                                <div className="works-text">
                                    <h5 className="text-white">Modern Townhouse</h5>
                                    <p>Architecture, Modern</p>
                                </div>
                            </div>
                            <div className="position-relative works-img">
                                <img src="image/23.jpg" alt className="img-fluid" />
                                <div className="works-text">
                                    <h5 className="text-white">Modern Townhouse</h5>
                                    <p>Architecture, Modern</p>
                                </div>
                            </div>
                            <div className="position-relative works-img">
                                <img src="image/S5-1.jpg" alt className="img-fluid" />
                                <div className="works-text">
                                    <h5 className="text-white">Modern Townhouse</h5>
                                    <p>Architecture, Modern</p>
                                </div>
                            </div>
                            <div className="position-relative works-img">
                                <img src="image/2-2-1.jpg" alt className="img-fluid" />
                                <div className="works-text">
                                    <h5 className="text-white">Modern Townhouse</h5>
                                    <p>Architecture, Modern</p>
                                </div>
                            </div>
                            <div className="position-relative works-img">
                                <img src="image/S7-2.jpg" alt className="img-fluid" />
                                <div className="works-text">
                                    <h5 className="text-white">Modern Townhouse</h5>
                                    <p>Architecture, Modern</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------video---------- */}
            <section className="video d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="video-text text-center">
                            <h2 className="text-white mb-0">+3K</h2>
                            <p className="text-white">HAPPY CLIENTS</p>
                        </div>
                        <div className="video-text text-center">
                            <h2 className="text-dark mb-0">+14K</h2>
                            <p className="text-dark">SUCCESS PROJECTS</p>
                        </div>
                        <div className="video-btn d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-play" />
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------team-----------------*/}
            <section className="team py-100">
                {/* <div class="container"> */}
                <div className="services-texts mb-5 mx-4">
                    <h2 className="text-white mx-5">TEAM</h2>
                </div>
                <div className="row m-0">
                    <div className="col-lg-3 px-4">
                        <div className="team-img">
                            <img src="image/4-3.jpg" alt className="img-fluid" />
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                </defs>
                                <circle cx={150} cy={100} r={75} fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#c5a47e">
                                        <textPath xlinkHref="#circlePath">Client Manager Client Manager Client Manager
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                            <div className="team-text px-3 mb-4">
                                <h6 className="text-white">Ryan Hicks</h6>
                                <span className="bg-text">Client Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 px-4">
                        <div className="team-img">
                            <img src="image/2-4-1.jpg" alt className="img-fluid" />
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                </defs>
                                <circle cx={150} cy={100} r={75} fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#c5a47e">
                                        <textPath xlinkHref="#circlePath">Client Manager Client Manager Client Manager
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                            <div className="team-text px-3 mb-4">
                                <h6 className="text-white">Ryan Hicks</h6>
                                <span className="bg-text">Client Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 px-4">
                        <div className="team-img">
                            <img src="image/1-4.jpg" alt className="img-fluid" />
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                </defs>
                                <circle cx={150} cy={100} r={75} fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#c5a47e">
                                        <textPath xlinkHref="#circlePath">Client Manager Client Manager Client Manager
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                            <div className="team-text px-3 mb-4">
                                <h6 className="text-white">Ryan Hicks</h6>
                                <span className="bg-text">Client Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 px-4">
                        <div className="team-img">
                            <img src="image/5-2.jpg" alt className="img-fluid" />
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                </defs>
                                <circle cx={150} cy={100} r={75} fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#c5a47e">
                                        <textPath xlinkHref="#circlePath">Client Manager Client Manager Client Manager
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                            <div className="team-text px-3 mb-4">
                                <h6 className="text-white">Ryan Hicks</h6>
                                <span className="bg-text">Client Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------------slides----------- */}
            <section className="team-dots py-100">
                <div className="container">
                    <div className="responsive row">
                        <div className="col-lg-6">
                            <div className="card bg-transparent mx-3">
                                <img src="image/quote.svg" alt />
                                <p className="text-white">"I just love their design for all stunning details. You must know what
                                    can you do for a project before taking it, but with Archo, the sky is the limit."</p>
                            </div>
                            <div className="team-info positive-relative d-flex">
                                <img src="image/2-4.jpg" alt className="rounded-circle" />
                                <div className="team-h6 px-4 py-3">
                                    <h6 className="text-white text-uppercase mb-0">Jane Smith</h6>
                                    <span className="text-white text-uppercase">Envato Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-transparent mx-3">
                                <img src="image/quote.svg" alt />
                                <p className="text-white">"I just love their design for all stunning details. You must know what
                                    can you do for a project before taking it, but with Archo, the sky is the limit."</p>
                            </div>
                            <div className="team-info d-flex positive-relative">
                                <img src="image/5-2.jpg" alt className="rounded-circle" />
                                <div className="team-h6 px-4 py-3">
                                    <h6 className="text-white text-uppercase mb-0">Jane Smith</h6>
                                    <span className="text-white text-uppercase">Envato Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-transparent mx-3">
                                <img src="image/quote.svg" alt />
                                <p className="text-white">"I just love their design for all stunning details. You must know what
                                    can you do for a project before taking it, but with Archo, the sky is the limit."</p>
                            </div>
                            <div className="team-info d-flex positive-relative">
                                <img src="image/1-4.jpg" alt className="rounded-circle" />
                                <div className="team-h6 px-4 py-3">
                                    <h6 className="text-white text-uppercase mb-0">Jane Smith</h6>
                                    <span className="text-white text-uppercase">Envato Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-transparent mx-3">
                                <img src="image/quote.svg" alt />
                                <p className="text-white">"I just love their design for all stunning details. You must know what
                                    can you do for a project before taking it, but with Archo, the sky is the limit."</p>
                            </div>
                            <div className="team-info d-flex positive-relative">
                                <img src="image/2-4.jpg" alt className="rounded-circle" />
                                <div className="team-h6 px-4 py-3">
                                    <h6 className="text-white text-uppercase mb-0">Jane Smith</h6>
                                    <span className="text-white text-uppercase">Envato Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*------------------ News ---------------------*/}
            <section className="news">
                <div className="container">
                    <div className="row">
                        <div className="services-texts mb-5 mx-4">
                            <h2 className="text-white">NEWS</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="news-img position-relative mb-4" style={{ backgroundSize: 'cover' }}>
                                <img src="image/port2-3.jpg" alt style={{ height: 382 }} />
                                <div className="news-count position-absolute mt-4 mb-4">
                                    <a href="#">
                                        <p className="mb-0 d-inline-block text-white mb-5">02 July</p>
                                    </a>
                                    <div className="news-span mb-4">
                                        <span className="text-white fw-normal" style={{ marginRight: 15 }}>admin</span>
                                        <span className="text-white fw-normal">Furniture</span>
                                    </div>
                                    <h6 className="news-text text-white text-uppercase">What it’s like to be an interior
                                        innovative designer?</h6>
                                    <button className="btn text-uppercase mt-5 text-white position-relative">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="news-img position-relative mb-4">
                                <img src="image/port5-1.jpg" alt style={{ height: 382 }} />
                                <div className="news-count position-absolute mt-4 mb-4">
                                    <a href="#">
                                        <p className="mb-0 d-inline-block text-white mb-5">02 July</p>
                                    </a>
                                    <div className="news-span mb-4">
                                        <span className="text-white fw-normal" style={{ marginRight: 15 }}>admin</span>
                                        <span className="text-white fw-normal">Furniture</span>
                                    </div>
                                    <h6 className="news-text text-white text-uppercase">What it’s like to be an interior
                                        innovative designer?</h6>
                                    <button className="btn text-uppercase mt-5 text-white position-relative">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="news-img position-relative mb-4">
                                <img src="image/port6-3.jpg" alt style={{ height: 382 }} />
                                <div className="news-count position-absolute mt-4 mb-4">
                                    <a href="#">
                                        <p className="mb-0 d-inline-block text-white mb-5">02 July</p>
                                    </a>
                                    <div className="news-span mb-4">
                                        <span className="text-white fw-normal" style={{ marginRight: 15 }}>admin</span>
                                        <span className="text-white fw-normal">Furniture</span>
                                    </div>
                                    <h6 className="news-text text-white text-uppercase">What it’s like to be an interior
                                        innovative designer?</h6>
                                    <button className="btn text-uppercase mt-5 text-white position-relative">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Home;