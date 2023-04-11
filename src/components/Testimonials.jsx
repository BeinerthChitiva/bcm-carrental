import Img2 from "../images/testimonials/kdotpfp1.jpg";
import Img3 from "../images/testimonials/colepfp2.jpg";

function Testimonials(){
    return(
        <>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content__title">
                            <h4>Reviewed By People</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                Discover the positive impact we've made on the our clients by
                                reading through their testimonials. Our clients have experienced
                                our service and results, and they're eager to share their
                                positive experiences with you.
                            </p>
                        </div>

                        <div className="all-testimonials">
                            <div className="all-testimonials__box">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "We rented a car from this website and had an amazing
                                    experience! The booking was easy and the rental rates were
                                    very affordable."
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img2} alt="userm_img" />
                                        <span>
                                            <h4>Kendrick Lamar</h4>
                                            <p>Bogota</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="all-testimonials__box box-2">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "The car was in great condition and made our trip even better.
                                    Highly recommend for this car rental website!"
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img3} alt="user_img" />
                                        <span>
                                            <h4>Jermaine Cole</h4>
                                            <p>Cartagena</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Testimonials;