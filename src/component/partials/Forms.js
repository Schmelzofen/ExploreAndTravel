const Forms = () => {
    return (
        <div className="formsContainer">
            <div className="formsTop">
                <select name="Location" id="">
                    <option value="default">Location</option>
                </select>
                <select name="Activity" id="">
                    <option value="default">Activity</option>
                </select>
            </div>
            <div className="formsBottom">
            <select name="Grade" id="">
                    <option value="default">Grade</option>
                </select>
                <select name="Date" id="">
                    <option value="default">Date</option>
                </select>
            </div>
            <button>Explore</button>
        </div>
    );
}

export default Forms;