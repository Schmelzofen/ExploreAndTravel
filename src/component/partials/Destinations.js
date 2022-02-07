import destinations from "../data/destinations"

const Destinations = () => {
    return (
        <div className="destinationContainer">
            <div className="featuredDestinations">
                <h2>Featured destinations</h2>
                <a href="http:www.google.de">View all</a>
            </div>
            <div className="destinationGrid">
                {destinations.map(elt => (
                    <div className="destination">
                        <img src={elt.image} alt={elt.city} />
                        <div className="destinationText">
                            <p>{elt.city}</p>
                            <p>{elt.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destinations;