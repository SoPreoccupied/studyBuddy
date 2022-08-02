const AuditoryLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="auditoryLearner" src={require("../../assets/auditorylearner.png")} />
            </div>
            <div className="rightColumn">
                <h1>You are an Auditory Learner!</h1>
                <p>You are likely to retain information best when you hear it explained to you.</p>
                <h2>Here are some online resources to set you up for success:</h2>
                    <ul id="learnerLinks">
                        <p>Speechify: A text to speech tool where you can upload text and documents or convert to mp3 to listen to anywhere anytime.</p>
                        <li><a href={'https://speechify.com/?gclid=CjwKCAjwquWVBhBrEiwAt1Kmwm-zPMCSe3zUzjhd6RrMKOS0-TXURR-CwntZG_YhRXiEV70XCKItXRoC894QAvD_BwE'} target="_blank" className="resources" id="aResource">Speechify</a></li>
                        <p>Sora: Reading app for students put together by your local library or school.</p>
                        <li><a href={'https://www.overdrive.com/apps/sora/'} target="_blank" className="resources" id="aResource">Sora</a></li>
                        <p>Story Online: Books read to you by notable speakers. Including a supplemental curriculum developed by a credentialed elementary educator.</p>
                        <li><a href={'https://storylineonline.net/'} target="_blank" className="resources" id="aResource">Story Online</a></li>
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

export default AuditoryLearner;