import { footerArray } from "../data/footer"

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="footer">
                    <div className="footerBlockOne">
                        <img src="./img/logo.png" alt="logo" />
                        <p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                        <p>&copy; 2020 Thousand Sunny. All rights reserved</p>
                    </div>
                    <div className="footerBlockTwo">
                        <ul>
                            {footerArray.Destinations.map(elt => (
                                <li>{elt}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="footerBlockThree">
                        <ul>
                            {footerArray.Shop.map(elt => (
                                <li>{elt}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="footerBlockFour">
                        <ul>
                            {footerArray.Interest.map(elt => (
                                <li>{elt}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="socialMedia">
                    <a href="twitter.com"><img src="./img/twitter.png" alt="twitter" /></a>
                    <a href="facebook.com"><img src="./img/facebook.png" alt="facebook" /></a>
                    <a href="instagram.com"><img src="./img/instagram.png" alt="instagram" /></a>
                    <a href="linkedin.com"><img src="./img/linkedin.png" alt="linkedin" /></a>
                    <a href="youtube.com"><img src="./img/youtube.png" alt="youtube" /></a>
                </div>
            </div>
        </>
    );
}

export default Footer;