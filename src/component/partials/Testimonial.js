const Testimonial = () => {
    return (
        <div className="testimonial">
            <h2>Testimonials</h2>
            <div className="testimonialGrid">
                <div className="testimonialleft">
                    <img src="./img/stars.png" alt="stars" />
                    <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                    <h3>Edward Newgate</h3>
                    <span>Founder Circle</span>
                </div>
                <div className="testimonialright">
                    <img src="./img/photo.png" alt="guyWithCamera" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial;