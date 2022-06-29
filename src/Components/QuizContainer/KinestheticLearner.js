const KinestheticLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="kinestheticLearner" src={require("../../assets/kinestheticlearner.png")} />
            </div>
            <div className="rightColumn">
                <div>
                    <h1>You are a Kinesthetic Learner!</h1>
                    <p>You learn best when you can physically sense what you're studying.</p>
                </div>
            </div>
        </div>
    )
}

export default KinestheticLearner;