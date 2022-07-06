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
                        <li><a href={'https://apps.apple.com/us/app/scratchjr/id895485086?ign-mpt=uo%3D4'} target="_blank">ScratchJr</a></li>
                        <p>With ScratchJr, you can learn important new skills as you program your own interactive stories and games.</p>
                        <li><a href={'classvr.com/virtual-reality-in-education/virtual-augmented-reality-in-elementary-education-age-7-to-11-years/'} target="_blank">Class VR</a></li>
                        <p>Curriculums brought to life using virtual and augmented reality experinces to aid in your hands on learning experience.</p>
                        <li><a href={'http://www.tomatotimers.com/'} target="_blank">Tomato Timers</a></li>
                        <p>TomatoTimers is a customizable and easy to use looping pomodoro timer to keep you energized while you study.</p>
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