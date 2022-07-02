// CAnswer Oneit to Artemij Fedosejev http://react.tips/radio-buttons-in-react-16/

// http://www.educationplanner.org/students/self-assessments/learning-styles-quiz.shtml
import Question from "./Question";
import { Link } from "react-router-dom";

const Quiz = () => {

const answersObject = {
    
}

 const handleOptionChange = changeEvent => {
    // console.log(`Input: ${changeEvent.target.name} is now ${changeEvent.target.value}`)
    answersObject[changeEvent.target.name] = changeEvent.target.value;

  };

 const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const key in answersObject.keys()) {
        console.log(key)
    }
  };

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="yellowRobot" src={require("../../assets/yellowrobot.png")} />
            </div>
            <div className="rightColumn">
                <div className="wholeQuiz">
                    <form onSubmit={handleFormSubmit}>
                        <Question groupName="qOne" handleOnChange={handleOptionChange} question="1. What kind of book would you like to read for fun?" optionOne="A book with lots of pictures in it." optionTwo="A book with new words in it." optionThree="A do it yourself book."/>
                        <br/>
                        <Question groupName="qTwo" handleOnChange={handleOptionChange} question="2. Imagine you are standing in line for recess, what are you most likely to do while waiting?" optionOne="Talk with your friends." optionTwo="Fidget or move back and forth." optionThree="Look around and study your surroundings."/>
                        <br/>
                        <Question groupName="qThree" handleOnChange={handleOptionChange} question='3. When you see the word "dog", what comes to mind first?' optionOne='You say the word "dog" to yourself.' optionTwo="Envision a picture of a dog." optionThree="Think about interacting with a dog."/>
                        <br/>
                        <Question groupName="qFour" handleOnChange={handleOptionChange} question="4. What is the best way for you to learn how a game works?" optionOne="Have someone show you." optionTwo="Read the directions." optionThree="Learn as you play."/>
                        <br/>
                        <Question groupName="qFive" handleOnChange={handleOptionChange} question="5. When in class, what do you find to be the most distracting?" optionOne="Lights being to bright or too dim." optionTwo="The temperature being too hot or too cold." optionThree="Noises from the hallway or outside the building."/>
                        <br/>
                        <Question groupName="qSix" handleOnChange={handleOptionChange} question="6. How do you like to find your way around a new place?" optionOne="Ask someone for directions." optionTwo="Look at a map or directory that shows you where everything is." optionThree="Start to walk around until you find what it is you are looking for."/>
                        <br/>
                        <Question groupName="qSeven" handleOnChange={handleOptionChange} question="7. Which of these classes are your favorite?" optionOne="Gym class." optionTwo="Art class." optionThree="Music class."/>
                        <br/>
                        <Question groupName="qEight" handleOnChange={handleOptionChange} question="8. When you are not sure how to spell a word, what are you most likely to do?" optionOne="Write it down to see if it looks right." optionTwo="Spell it out loud to see if it sounds right" optionThree="Trace the letters in the air with your finger."/>
                        <br/>
                        <Question groupName="qNine" handleOnChange={handleOptionChange} question="9. Where would you rather go to hangout with your friends?" optionOne="An amusement park." optionTwo="A concert." optionThree="A movie."/>
                        <br/>
                        <Question groupName="qTen" handleOnChange={handleOptionChange} question="10. Question Ten" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <input type="submit" value="submit"/>
                            <div className="submitButton">
                                <Link to="/AuditoryLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                                <Link to="/KinestheticLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                                <Link to="/VisualLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                            </div>
                    </form>
            </div>
        </div>
    </div>
    );
}

export default Quiz;