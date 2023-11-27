import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import perritoImage from '../assets/images/perrito-removebg-preview.png';
import desplegable from '../assets/images/desplegable.png';
import Logo from '../assets/images/logo192-removebg-preview.png';
import pitbull from '../assets/images/pitbull.png';
const Principal = () => {
  return (
    <div>
   
    <div id="mySidepanel" className="sidepanel">
      <Link to="index.html">Home </Link>
      <Link to="#about">About</Link>
      <Link to="#service">Services</Link>
      <Link to="#vehicles">Our Vehicles</Link>
      <Link to="#testimonial">Testimonial</Link>
      <Link to="#contact">Contact</Link>
    </div>
    {/* header */}
    <header>
      {/* header inner */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="logo">
                <Link to="index.html"><img src={Logo} alt="#" /></Link>
              </div>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="right_bottun">
                <ul className="conat_info d_none ">
                  <li><Link to="/Login"><i className="fa fa-user" aria-hidden="true" /></Link></li>
                  <li><Link to="#"><i className="fa fa-search" aria-hidden="true" /></Link></li>
                </ul>
                <button className="openbtn" onclick="openNav()"><img src={desplegable} alt="#" /> </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* end header inner */}
    {/* end header */}
    {/* banner */}
    <section className="banner_main">
      <div id="banner1" className="carousel slide banner_slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#banner1" data-slide-to={0} className="active" />
          <li data-target="#banner1" data-slide-to={1} />
          <li data-target="#banner1" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-7 col-lg-5">
                    <div className="text-bg">
                      <h1>OmegaPetShop</h1>
                      <span>Los mejores productos para tu mascota</span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-7">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="ban_track">
                          <figure><img src={perritoImage} alt="#" /></figure>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                      <div class="btn_main">
                              <div class="more_bt"><Link to={"/crear-cuenta"}>Register Client</Link></div>
                              <div class="contact_bt"><Link to={"/crear-tienda"}>Register Shop</Link></div>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-7 col-lg-5">
                    <div className="text-bg">
                      <h1>OmegaPetShop</h1>
                      <span>Puedes registrarte como Tienda para comercial productos</span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-7">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="ban_track">
                          <figure><img src={pitbull} alt="#" /></figure>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div class="btn_main">
                              <div class="more_bt"><Link to={"/crear-cuenta"}>Register Client</Link></div>
                              <div class="contact_bt"><Link to={"/crear-tienda"}>Register Shop</Link></div>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
      </div>
    </section>
    {/* end banner */}
    {/* about section */}
    <div id="about" className="about ">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-6">
            <div className="about_right">
              <figure><img src="images/about.png" alt="#" /></figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="titlepage">
              <h2>About Us</h2>
              <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There 
              </p>
              <Link className="read_more" to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about section */}
    {/* service section */}
    <div id="service" className="service">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="titlepage">
              <h2>Our Services</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="service_main">
              <div className="service_box blu_colo">
                <i><img src="images/ser1.png" alt="#" /></i>
                <h4>FLY ANYWHERE</h4>
              </div>
              <div className="service_box yelldark_colo">
                <i><img src="images/ser2.png" alt="#" /></i>
                <h4>Cargo service</h4>
              </div>
              <div className="service_box yell_colo">
                <i><img src="images/ser3.png" alt="#" /></i>
                <h4> COURIER SERVICES</h4>
              </div>
              <div className="service_box yelldark_colo">
                <i><img src="images/ser4.png" alt="#" /></i>
                <h4>BOX STORAGE</h4>
              </div>
              <div className="service_box yell_colo">
                <i><img src="images/ser5.png" alt="#" /></i>
                <h4>100% safe</h4>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <Link className="read_more"  to="#">Read More</Link>
          </div>
        </div>
      </div>
    </div>
    {/* end service section */}
    {/* vehicles section */}
    <section id="vehicles" className="vehicles">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Our Vehicles</h2>
              <p>nternet. It uses a dictionary of over 200 Latin words, combined with .</p>
            </div>
          </div>
        </div>
      </div>
      <div id="veh" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#veh" data-slide-to={0} className="active" />
          <li data-target="#veh" data-slide-to={1} />
          <li data-target="#veh" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc1.png" alt="#" /></figure>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc2.png" alt="#" /></figure>
                    </div>
                    <h3 className="blac_co">Truck</h3>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc3.png" alt="#" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc1.png" alt="#" /></figure>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc2.png" alt="#" /></figure>
                    </div>
                    <h3 className="blac_co">Truck</h3>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc3.png" alt="#" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc1.png" alt="#" /></figure>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc2.png" alt="#" /></figure>
                    </div>
                    <h3 className="blac_co">Truck</h3>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src="images/truc3.png" alt="#" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#veh" role="button" data-slide="prev">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#veh" role="button" data-slide="next">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link className="read_more" to="#">Read More</Link>
          </div>
        </div>
      </div>
    </section>
    {/* end vehicles section */}
    {/* testimonial section */}
    <div id="testimonial" className="testimonial bottom_cross bottom_cross2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Testimonials</h2>
              <p>nternet. It uses a dictionary of over 200 Latin words, combined with .</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="myCarousel" className="carousel slide testimonial_Carousel " data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption ">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="testimonial_box">
                            <figure><img src="images/our.png" alt="#" /></figure>
                            <h3>Luda Johnson <br /><span className="kisu">( Ceo)</span></h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="testimonial_box">
                            <figure><img src="images/our.png" alt="#" /></figure>
                            <h3>Luda Johnson <br /><span className="kisu">( Ceo)</span></h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="full cross_layout">
                            <div className="testimonial_box">
                              <figure><img src="images/our.png" alt="#" /></figure>
                              <h3>Luda Johnson <br /><span className="kisu">( Ceo)</span></h3>
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <i className="fa fa-caret-left" aria-hidden="true" />
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <i className="fa fa-caret-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link className="read_more" to="#">Read More</Link>
          </div>
        </div>
      </div>
    </div>
    {/* end testimonial section */}
    {/* choose section */}
    <div className="choose">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Why Choose Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="choose_box">
              <i><img src="images/why1.png" alt="#" /></i>
              <h3>Our Vission</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              <Link className="read_more" to="#">Read More</Link>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="choose_box">
              <i><img src="images/why2.png" alt="#" /></i>
              <h3>Estimate Shipping</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              <Link className="read_more" to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end choose section */}
    {/* contact section */}
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Requst A call  for You</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="con_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />                          
                  </div>
                  <div className="col-md-12">
                    <input className="contactusmess" placeholder="Message" type="type" message="Name" />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-7">
              <div className="co_tru">
                <figure><img src="images/truc4.png" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end contact section */}
    {/*  footer */}
    <footer>
      <div className="footer bottom_cross1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="location_icon">
                <li><Link to="#"><i className="fa fa-map-marker" aria-hidden="true" /></Link> Address : Lorem Ipsum <br /> is simply dummy 
                </li>
                <li><Link to="#"><i className="fa fa-phone" aria-hidden="true" /></Link>Phone :  +(1234) 567 890</li>
                <li><Link to="#"><i className="fa fa-envelope" aria-hidden="true" /></Link>Email : demo@gmail.com</li>
              </ul>
              <form className="bottom_form">
                <h3>Newsletter</h3>
                <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                <button className="sub_btn">subscribe</button>
              </form>
            </div>
            <div className="col-md-8">
              <div className="map">
                <figure><img src="images/map.png" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* end footer */}
    {/* Javascript files*/}
    {/* sidebar */}
  </div>
  




    /*<div className="container-fluid" style={{ backgroundImage: 'url("/background-image.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <div className="row">
        <div className="col-lg-12 mt-5">
          <h1 className="text-center text-light">Bienvenido a Mi Tienda en Línea</h1>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="text-center">
            <Link to={"/crear-cuenta"} className="btn btn-success mx-2">
              Crear Usuario
            </Link>
            <Link to="/crear-tienda" className="btn btn-warning mx-2">
              Crear Tienda
            </Link>
          </div>
        </div>
      </div>
    </div>*/
  );
};

export default Principal;
