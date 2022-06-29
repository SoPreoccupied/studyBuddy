import { Link } from "react-router-dom";

const Home = (props) => {

    return (
            <div className="rightColumn">
                <h1>Welcome to Study Buddy!</h1>
                    <p>Our quiz is catered to analyzing how YOU best learn.</p>
                    <p>Naviagting through the learning styles of visual, auditory, and kinesthetic we handpick optimal resources to aid you in your educational journey.</p>
                    <p>Once you submit your quiz, you'll see your personalized resources for the learning style that fits you best.</p>
                {/* <Link to="/Quiz"><button className="button" type="button">Quiz</button></Link> */}
                    <Link to="/Quiz"><button className="button" type="button">Quiz</button></Link>
            </div>

    )
}

export default Home;