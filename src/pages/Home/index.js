import React from 'react'
import AdminLayout from '../../layouts/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Home() {
   

    return (
        <AdminLayout>
            <>
			{/* Header Start */}
    <div className="container-fluid bg-light justify-content-center my-6 mt-0" id="home">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                    <h3 className="text-primary mb-3">I'm</h3>
                    <h1 className="display-3 mb-3">Julfiqur Haidar Raja</h1>
					<h2>Full Stack Web Developer</h2>
                    <h2 className="typed-text-output d-inline"></h2>
                    {/* <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                    {/* <div className="d-flex align-items-center pt-5">
                        <a href="" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div> */}
                </div>
                <div className="col-lg-5">
                    <img className="img-fluid float-right rounded-circle"src="assets/img/profile.png" alt="" width="60%"/>
                </div>
            </div>
        </div>
    </div>
    {/* Header End */}


    {/* Video Modal Start */}
    <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* 16:9 aspect ratio */}
                    <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item"src="assets/" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Video Modal End */}


    {/* About Start */}
    <div className="container-xxl py-6" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0">01</h1>
                            <h5 className="mb-0">Year</h5>
                        </div>
                        <h3 className="lh-base mb-0">of working experience as a web designer & developer</h3>
                    </div>
                    <p className="mb-4 text-justify">I have been building my skills in web design and development for the past year. During this time, I've worked on creating simple and responsive websites while improving my knowledge in tools like HTML, CSS, JavaScript, WordPress, and Laravel. I'm passionate about learning and exploring new technologies to create better user experiences.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                    {/* <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a> */}
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <img className="img-fluid rounded"src="assets/img/about-1.jpg" alt=""/>
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid rounded"src="assets/img/about-2.jpg" alt=""/>
                        </div>
                    </div>
                    {/* <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                    </div> */}
                    {/* <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p> */}
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">5+</h2>
                    </div>
                    <p className="mb-0">Over the past year, I've completed more than 5 projects, focusing on designing and developing user-friendly websites. These projects helped me gain hands-on experience with tools like HTML, CSS, JavaScript, WordPress, and Laravel, and strengthened my problem-solving skills as a beginner web developer.</p>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    {/* Expertise Start */}
    <div className="container-xxl py-6 pb-5" id="skill">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-5 mb-5">Skills & Experience</h1>
                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                    <h3 className="mb-4">My Skills</h3>
                    <div className="row align-items-center">
                        <div className="col-md-6">
							<div className="skill mb-4">
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
											<h6 className="font-weight-bold mb-0">HTML</h6>
									</div>
									<h6 className="font-weight-bold">95%</h6>
								</div>
								<div className="progress mt-2">
									<div 
										className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
									</div>
								</div>
							</div>

                            
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14bw95iKQcPL9po-c_tAC6un8F4uZnMjNmg&s" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">CSS</h6>
									</div>
									
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">PHP</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>
                            </div>
							 <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    
									<div className="d-flex align-items-center">
										<img 
											src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">Javascript</h6>
									</div>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
							 <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">React</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">94%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{ width: "94%" }}></div>
                                </div>
                            </div>
							 <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">Vue</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">91%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" style={{ width: "91%" }}></div>
                                </div>
                            </div>
							 <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">Laravel</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://w7.pngwing.com/pngs/16/634/png-transparent-wordpress-com-computer-icons-wordpress-blue-text-trademark-thumbnail.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">Wordpress</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Skill Icon" className="rounded-circle mr-3" style={{ width: "40px", height: "40px" }}/>
                                    <h6 className="font-weight-bold">Github</h6>
									</div>
                                    
                                    <h6 className="font-weight-bold">96%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" style={{ width: "96%" }}></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                        </li>
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-12 text-center">
                                    <h5>Web Application Development with Laravel, React, Vue.js & WordPress</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2024</p>
                                    <h6 className="mb-0">IsDB-BISEW IT SCHOLARSHIP PROGRAMME</h6>
                                </div>
                                {/* <div className="col-sm-6">
                                    <h5>Product Designer</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2000 - 2045</p>
                                    <h6 className="mb-0">Apex Software Inc</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Web Designer</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2000 - 2045</p>
                                    <h6 className="mb-0">Apex Software Inc</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Apps Designer</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2000 - 2045</p>
                                    <h6 className="mb-0">Apex Software Inc</h6>
                                </div> */}
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-12 text-center">
                                    <h5>M.S.S (Economics)</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2024</p>
                                    <h6 className="mb-0">National University</h6>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <h5>Bachelor of Arts (B.A)</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2016</p>
                                    <h6 className="mb-0">National University</h6>
                                </div>
                                {/* <div className="col-sm-6">
                                    <h5>Web Design</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2000 - 2045</p>
                                    <h6 className="mb-0">Cambridge University</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Apps Design</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2000 - 2045</p>
                                    <h6 className="mb-0">Cambridge University</h6>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Expertise End */}


    {/* Service Start */}
    <div className="container-fluid bg-light my-5 py-6" id="service">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Services</h1>
                </div>
                {/* <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="">Hire Me</a>
                </div> */}
            </div>
            <div className="row g-4">
				<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Web Design</h4>
                            {/* <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6> */}
                            <span>Skilled in crafting modern web designs with tools like HTML, CSS, JavaScript, React, and Vue.js for seamless and engaging user experiences.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-crop-alt fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Web Development</h4>
                            {/* <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6> */}
                            <span>Proficient in building dynamic web applications using modern technologies like HTML, CSS, JavaScript, React, Vue.js, and Laravel to deliver robust and user-friendly solutions.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Responsive Website</h4>
                            {/* <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6> */}
                            <span>Experienced in creating responsive websites using HTML, CSS, JavaScript, and frameworks like React and Vue.js to ensure seamless functionality across all devices.</span>
                        </div>
                    </div>
                </div>
        
                {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">UI/UX Design</h4>
                            <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                            <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    {/* Service End */}


    {/* Projects Start */}
    <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                        <li className="mx-3 active" data-filter="*">All Projects</li>
                        {/* <li className="mx-3" data-filter=".first">UI/UX Design</li>
                        <li className="mx-3" data-filter=".second">Graphic Design</li> */}
                    </ul>
                </div>
            </div>
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-1.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://eshop-vue-mu.vercel.app/"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-2.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://eshop-sandy.vercel.app/"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-3.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://weeblecode.com/pharmacy"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-4.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-5.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid"src="assets/img/project-6.jpg" alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="assets/img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    {/* Projects End */}


    {/* Team Start */}
    {/* <div className="container-xxl py-6 pb-5" id="team">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">Team Members</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="">Contact Us</a>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded"src="assets/img/team-1.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded"src="assets/img/team-2.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded"src="assets/img/team-3.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Team End */}


    {/* Testimonial Start */}
    {/* <div className="container-fluid bg-light py-5 my-5" id="testimonial">
        <div className="container-fluid py-5">
            <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-left h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s"src="assets/img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s"src="assets/img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s"src="assets/img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto"src="assets/img/testimonial-1.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto"src="assets/img/testimonial-2.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto"src="assets/img/testimonial-3.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-right h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s"src="assets/img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s"src="assets/img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s"src="assets/img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Testimonial End */}


    {/* Contact Start */}
    <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Contact</h1>
                </div>
                {/* <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="">Say Hello</a>
                </div> */}
            </div>
            <div className="row g-12">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-2">My Address:</p>
                    <h3 className="fw-bold">Bordighir Phar, Hathazari Road, Chattogram, Bangladesh</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Call me:</p>
                    <h3 className="fw-bold">+880 1572 378254</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Mail me:</p>
                    <h3 className="fw-bold">julfiqurhaidar@gmail.com</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Follow me:</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-primary me-2" href="https://github.com/jhraj963"><i className="fab fa-github"></i></a>
                        {/* <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-youtube"></i></a> */}
                        <a className="btn btn-square btn-primary me-2" href="https://www.linkedin.com/in/jhraj963/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                {/* <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    </div>
    {/* Contact End */}


    {/* Map Start */}
    {/* <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-xxl pt-5 px-0">
            <div className="bg-dark">
                <iframe
               src="assets/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0" style={{width: "100%; height: 450px; border:0;" allowfullscreen="" ariaHidden="false"
                tabindex="0"}}></iframe>
            </div>
        </div>
    </div> */}
   
    
              
            </>
        </AdminLayout>
    )
}

export default Home