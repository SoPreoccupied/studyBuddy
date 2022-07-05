const KinestheticLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="kinestheticLearner" src={require("../../assets/kinestheticlearner.png")} />
            </div>
            <div className="rightColumn">
                <h1>You are a Kinesthetic Learner!</h1>
                <p>You retain information best when you are able to physically interact with your environment.</p>
                <h2>Click on a few of these online resources to help set you up for success:</h2>
                    <ul id="learnerLinks">
                        <li><a href={''} target="_blank"></a></li>
                        <p></p>
                        <li><a href={''} target="_blank"></a></li>
                        <p></p>
                        <li><a></a></li>
                        <p></p>
                    </ul>
                <h2>Here are a few tips to help you actively study offline:</h2>
                <ul>
                    <li>Stand up and act out the material you're learning to friends, in front of a mirror, or even to rubber ducks!</li>
                    <li>Schedule yourself plenty of short but frequent breaks where you get up and do something active.</li>
                    <li>Write out your notes by hand.</li>
                    <li>Use a sensory or fidget toy to help you have a physical outlet while studying or test taking.</li>
                    <li>Listen to recorded lessons while out for a walk.</li>
                </ul>
            </div>
        </div>
    )
}

export default KinestheticLearner;