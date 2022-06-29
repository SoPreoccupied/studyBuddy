const VisualLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="visualLearner" src={require("../../assets/visuallearner.png")} />
            </div>
            <div className="rightColumn">
                <div>
                    <h1>You are a Visual Learner!</h1>
                    <p>You understand information best when you are able to see it through pictures or images.</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default VisualLearner;