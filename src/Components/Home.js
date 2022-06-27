// Not currently appearing somehow
import { Link } from "react-router-dom";

const Home = (props) => {

    return (
        <div className="homeAboutSection">
            {/* Mini About section */}
            <h1>Welcome to Study Buddy!</h1>
                <p>
                  Our quiz is catered to analyzing how YOU best learn.
                  <br /><br />
                  Once you submit your quiz, you'll see your personalized results for the learning style that fits you best.
                  <br /><br />
                  Naviagting through the learning styles of visual, auditory, or kinesthetic we handpick the best resources to aid you in your educational journey.
              </p>
              <Link to="/Quiz"><button className="button" type="button">Quiz</button></Link>
        </div>
    )
}

export default Home;