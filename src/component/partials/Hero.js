import Forms from "./Forms"

const Hero = () => {
    return (  
        <div className="heroSection">
            <div className="heroLeft">
                <h1>Explore and Travel</h1>
                <p>Holiday finder</p>
                <div className="blackLine"></div>
                <Forms/>
            </div>
            <div className="heroRight">
                <img src="./img/heroimg.png" alt="heroimage" />
            </div>
        </div>
    );
}

export default Hero;