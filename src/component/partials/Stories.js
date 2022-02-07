import stories from "../data/stories"

const Stories = () => {
    return (
        <>
            <div className="trendingStories">
                <h2>Trending stories</h2>
                <a href="http://www.google.de">View all</a>
            </div>
            <div className="storiesContainer">

                {stories.map(elt => (
                    <div className="stories">
                        <div className="storiesImage">
                            <img src={elt.img} alt={elt.title} />
                        </div>
                        <div className="storiesText">
                            <p>{elt.title}</p>
                            <p>{elt.description}</p>
                            <a href={elt.link}>Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Stories;