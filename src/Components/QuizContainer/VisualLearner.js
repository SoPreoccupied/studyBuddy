const VisualLearner = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="visualLearner" src={require("../../assets/visuallearner.png")} />
            </div>
            <div className="rightColumn">
                <h1>You are a Visual Learner!</h1>
                <p>You retain information best when you are able to see things as they are taught to you.</p>
                <h2>Here are some online resources to set you up for success:</h2>
                    <ul id="learnerLinks">
                        <p>BeeLine Reader: Makes reading on-screen easier by using an eye-guiding color gradient to read more effectively and maintain better focus.</p>
                        <li><a href={'https://www.beelinereader.com/'} target="_blank" className="resources" id="vResource">BeeLine Reader</a></li>
                        <p>Brainpop: Boost achievement for grades K-8 in math, language arts, science, social studies and more by watching videos.</p>
                        <li><a href={'https://www.brainpop.com/'} target="_blank" className="resources" id="vResource">Brainpop</a></li>
                        <p>Bubbl: Create a mind-map to organize your ideas visually as you take notes, brainstorm new ideas, collaborate, and present more effectively.</p>
                        <li><a href={'https://bubbl.us/'} target='_blank' className="resources" id="vResource">Bubbl</a></li>
                    </ul>
                <h2>These are some tips to help you offline:</h2>
                <ul>
                    <li>Sit in the front of the room away from doors or windows where action takes place.</li>
                    <li>Use underlining, highlighting in different colors, symbols, or pictures in your notes.</li>
                    <li>When using flashcards, limit how much you put on the card so you can form a mental picture of the information.</li>
                    <li>Watch videos about topics you are studying in class.</li>
                    <li>When solving math problems that involve many steps, draw a series of boxes, each containing the appropriate piece of information in sequence.</li>
                </ul>
            </div>
        </div>
    )
}

export default VisualLearner;