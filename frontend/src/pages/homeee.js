import React from "react";
import { Link } from 'react-router-dom';


class Homeee extends React.Component {
    render() {
        return (
            <div>
                {/*  <!---- NavigationBar ----> */}
                <section id="nav-bar">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src="assets/img/logo.jpg" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#top">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">ABOUT US</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#services">SERVICES</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#team">OUR TEAM</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#ourmission">OUR MISSION</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contact">CONTACT</a>
                                    </li>
                                    <li>
                                    <Link to="/login" className='btn btn-default border w-100 bg-green rounded-0 text-decoration-none'>Log in</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
                {/* <!----Slidder----> */}
                <div id="slider">
                    <div id="headerSlider" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#headerSlider" data-slide-to="0" class="active"></li>
                            <li data-target="#headerSlider" data-slide-to="1" ></li>
                            <li data-target="#headerSlider" data-slide-to="2" ></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block img-fluid" src="assets/img/photo5.jpg" />
                                <div class="overlay"></div>
                                <div class="carousel-caption">
                                    <h5><b>Milittary Supply chain Management</b></h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block img-fluid" src="assets/img/photo2.jpg" />
                                <div class="overlay"></div>
                                <div class="carousel-caption">
                                    <h5>Milittary Supply chain Management</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block img-fluid" src="assets/img/photo3.jpg" />
                                <div class="overlay"></div>
                                <div class="carousel-caption">
                                    <h5>Milittary Supply chain Management</h5>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>
                </div>

                {/* <!---About---> */}
                <section id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h1><b>About us</b></h1>
                                <div class="about-content">
                                    Welcome, We are a leading solution in military supply chain management dedicated to ensuring the seamless acquisition, deployment, and sustainment of cutting-edge military vehicles. With a rich history and unwavering commitment to excellence, we proudly contribute to the operational success of defense forces around the world.
                                </div>
                                <button type="button" class="btn btn-primary">Read More</button>
                            </div>
                            <div class="col-md-6 skills-bar">
                                <p>Armored Personnel Carrier</p>
                                <div class="progress-bar" style={{ width: '60%' }}>
                                    60%
                                </div>
                                <p>Infanatry Fighting Vechicle</p>
                                <div class="progress-bar" style={{ width: '55%' }}>
                                    55%
                                </div>
                                <p>Logistics and Support Vehicles</p>
                                <div class="progress-bar" style={{ width: '75%' }}>
                                    75%
                                </div>
                                <p>Multi Battle Tanks</p>
                                <div class="progress-bar" style={{ width: '50%' }}>
                                    50%
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!----- Service ----> */}
                <section id="services">
                    <div class="container">
                        <h1><b>Our Services</b></h1>
                        <div class="row services">
                            <div class="col-md-3 text-center">
                                <div class="icon">
                                    <i class="fa fa-desktop"></i>
                                </div>
                                <h3>Effective Wise Mangement</h3>
                                <p>We have elevate the style of the millitary supply chain management using the blockchain technology.</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="icon">
                                    <i class="fa fa-tablet"></i>
                                </div>
                                <h3>Efficient Operation</h3>
                                <p>The project help in efficient operation between the various trader, individuals and army personle.</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="icon">
                                    <i class="fa fa-line-chart"></i>
                                </div>
                                <h3>Immutable Record Keeping</h3>
                                <p>This project helps in the effective record keeping through the help of blockchain in immutable manner.</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="icon">
                                    <i class="fa fa-paint-brush"></i>
                                </div>
                                <h3>Enhanced Visibility</h3>
                                <p>Real-time fast tracking and traceability ensure unprecedented visibility across the entire supply chain.</p>
                            </div>

                        </div>
                    </div>

                </section>

                {/* <!----team Member---> */}
                <section id="team">
                    <div class="container">
                        <h1><b>Our Team</b></h1>
                        <div class="row">
                            <div class="col-md-4 profile-pic text-center">
                                <div class="img-box">
                                    <img src="assets/img/2022CSM1021.jpg" class="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                                    </ul>
                                </div>
                                <h2>Ankeshwor Kumar Mishra</h2>
                                <h3>M.Tech Student</h3>
                                <p>M.Tech Student at Indian Institute of Technology, Ropar in the depatrment of Computer Science and Engineering.</p>
                            </div>
                            <div class="col-md-4 profile-pic text-center">
                                <div class="img-box">
                                    <img src="assets/img/teacher.jpg" class="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                                    </ul>
                                </div>
                                <h2>Dr. Sujata Pal</h2>
                                <h3>Supervisior</h3>
                                <p>Professor at Indian Institute of Technology, Ropar in the depatrment of Computer Science and Engineering.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!----promo---> */}
                <section id="promo">
                    <div class="container">
                        <p><blockquote><b>For Any Kind of Question Related to Supply Chain Management</b></blockquote></p>
                        <a href="#contact" class="btn btn-primary">contact us</a>
                    </div>
                </section>


                {/* <!---OurMisson---> */}
                <section id="ourmission">
                    <div class="container">
                        <div class="row">
                            <h1><b>Mission</b></h1>
                            <div class="about-content">
                                Our mission is clear: to optimize and streamline the supply chain for military vehicles, ensuring they are equipped with the latest technologies and maintained at peak operational efficiency. We are driven by the understanding that reliable and strategically deployed vehicles are fundamental to the success of military missions.
                                <br />
                                Our mission is to meticulously and effectively manage the supply chain of military vehicles, fostering seamless communication and collaboration among key stakeholders, including individuals, manufacturers, raw material suppliers, distributors, and military personnel. This project is dedicated to ensuring the efficient flow of resources, enhancing operational readiness, and supporting the mission success of our armed forces.
                            </div>
                            <button type="button" class="btn btn-primary">Read More</button>

                        </div>
                    </div>
                </section>

                {/* <!----Testimonials----> */}
                <section id="testimonials">
                    <div class="container">
                        <h1><b>Testimnials</b></h1>
                        <p class="text-center">Contact to Us for any Supply chain Management Work.</p>
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="profile">
                                    <img src="assets/img/icon1.jpg" class="user" />
                                    <blockquote>Implementing the advanced supply chain management solutions provided by us(manufacturer) has been a game-changer for our operations. </blockquote>
                                    <h3>Ram Kumar, <span>Manufacturer, XYZ company </span></h3>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="profile">
                                    <img src="assets/img/icon1.jpg" class="user" />
                                    <blockquote>As a key player in the defense industry, maintaining a streamlined supply chain is paramount. [Your Company Name] has been our trusted partner in achieving this. </blockquote>
                                    <h3>Sarah Smith, <span>Logistics Officer, XYZ Company </span></h3>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="profile">
                                    <img src="assets/img/icon1.jpg" class="user" />
                                    <blockquote>We chose [Your Company Name] for their expertise in military supply chain management, and they exceeded our expectations. </blockquote>
                                    <h3>Ganesh Kumar, <span>Army Service Corps </span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-----Get in touch----> */}
                <section id="contact">
                    <div class="container">
                        <h1><b>Get in Touch</b></h1>
                        <div class="row">
                            <div class="col-md-6">
                                <form class="contact-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Your-Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email id" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="4" placeholder="Your Message"> </textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">SEND MESSAGE</button>

                                </form>
                            </div>
                            <div class="col-md-6 contact-info">
                                <div class="follow">
                                    <b>Address:</b><i class="fa fa-map-marker"></i>XYZ Road, Bangole,IN
                                </div>

                                <div class="follow">
                                    <b>Phone:</b><i class="fa fa-phone"></i> +1 12345690

                                </div>

                                <div class="follow">
                                    <b>Email:</b><i class="fa fa-envelope"></i> example@website.com
                                </div>
                                <div class="follow">
                                    <label><b>Get Social:</b></label>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--- Footer ---> */}
                <section id="footer">
                    <div class="container text-center">
                        <p>Made With by <i class="fa fa-heart-o"></i>Ankeshwor Kumar Mishra</p>
                    </div>
                </section>
                {/* <!----Footer End -----> */}
                <script src="js/smooth-scroll.js"></script>
                <script>
                    var scroll = new SmoothScroll('a[href*="#"]');
                </script>
            </div>
        );
    }
}

export default Homeee;