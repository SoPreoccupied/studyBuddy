const VisualLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="visualLearner" src={require("../../assets/visuallearner.png")} />
            </div>
            <div className="rightColumn">
                <h1>You are an Auditory Learner!</h1>
                <p>You are likely to retain information best when you hear it explained to you.</p>
                <h2>Here are some online resources to set you up for success:</h2>
                    <ul id="learnerLinks">
                        <li><a href={'https://www.beelinereader.com/'} target="_blank">BeeLine Reader</a></li>
                        <p></p>
                        <li><a href={'https://speechify.com/?gclid=CjwKCAjwquWVBhBrEiwAt1Kmwm-zPMCSe3zUzjhd6RrMKOS0-TXURR-CwntZG_YhRXiEV70XCKItXRoC894QAvD_BwE'} target="_blank">Speechify</a></li>
                        <p>A text to speech tool where you can upload text and documents or convert to mp3 to listen to anywhere anytime.</p>
                            
                    </ul>
                <h2>These are some tips to help you offline:</h2>
                <ul>
                    <li>Listen and replay recorded lectures, books, or videos.</li>
                    <li>Read directions and text out loud.</li>
                    <li>Teach the material you're learning to friends or even rubber ducks!</li>
                    <li>Use mnemonice devices to memorise facts or sing them to a tune.</li>
                    <li>Use noise cancelling headphones for tests and studing as well as remove auditory distractions.</li>
                </ul>
            </div>
        </div>
    )
}

export default VisualLearner;