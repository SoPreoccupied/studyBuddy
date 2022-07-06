import { Link } from "react-router-dom";

const Home = (props) => {

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="yellowRobot" src={require("../assets/yellowrobot.png")} />
            </div>
            <div className="rightColumn">
                <h1>Welcome to Study Buddy!</h1>
                    <p>We created this quiz to help you gain insight into how you personally learn best.</p>
                    <br></br>
                    <p>As you navigate through our assesment, you will be matched as a visual, auditory, or kinesthetic learner.</p>
                    <br></br>
                    <p>Once you answer all our questions, you'll be directed to helpful resources and study tips to make the most out of your learning style.</p>
                    <br></br> <br></br>
                    <Link to="/Quiz"><button className="button" type="button">Let's go!</button></Link>
            </div>
        </div>

    )
}

export default Home;