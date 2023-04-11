import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download(){
    return(
        <>
            <section className="download-section">
                <div className="container">
                    <div className="download-text">
                        <h2>Download our App to get the most out of it.</h2>
                        <p>
                            Be sure to Download Our App to get the most of it.
                            See exclusive discounts and promotions only available through
                            our Official App!
                        </p>
                        <div className="download-text__btns">
                            <img alt="download_img" src={Img2} />
                            <img alt="download_img" src={Img1} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Download;