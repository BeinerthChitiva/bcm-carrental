import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team(){

    const teamPp1 = [
        { img: Person1, name: "Jim Halpert", job: "Salesman" },
        { img: Person2, name: "Omar Diaz", job: "Business Owner" },
        { img: Person3, name: "Daniella Ross", job: "Photographer" },
        { img: Person4, name: "Lauren Benitez", job: "Car Detailist" },
        { img: Person5, name: "William Rizz", job: "Mechanic" },
        { img: Person6, name: "Maddy Hunt", job: "Menager" },
    ]

    return(
        <>
            <section className="team-page">
                <HeroPages name="Our Team"/>
                <div className="container">
                    <div className="team-container">
                        {teamPp1.map((ppl, id) => (
                            <div key={id} className="team-container__box">
                                <div className="team-container__box__img-div">
                                    <img src={ppl.img} alt="team_img"/>
                                </div>
                                <div className="team-container__box__descr">
                                    <h3>{ppl.name}</h3>
                                    <p>{ppl.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>(123)456-7869</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Team;