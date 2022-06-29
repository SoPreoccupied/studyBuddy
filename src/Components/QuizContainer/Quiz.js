// CAnswer Oneit to Artemij Fedosejev http://react.tips/radio-buttons-in-react-16/
// For now aim for 10 Questions
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
                <img className="yellowRobot" src={require("../../assets/Buddy.png")} />
            </div>
            <div className="rightColumn">
                <div className="wholeQuiz">
                    <form onSubmit={handleFormSubmit}>
                        <Question groupName="qOne" handleOnChange={handleOptionChange} question="1. Whats your favorite color?" optionOne="Red" optionTwo="Blue" optionThree="Yellow"/>
                        <br/>
                        <Question groupName="qTwo" handleOnChange={handleOptionChange} question="2. Question Two" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qThree" handleOnChange={handleOptionChange} question="3. Question Three" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qFour" handleOnChange={handleOptionChange} question="4. Question Four" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qFive" handleOnChange={handleOptionChange} question="5. Question Five" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qSix" handleOnChange={handleOptionChange} question="6. Question Six" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qSeven" handleOnChange={handleOptionChange} question="7. Question Seven" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qEight" handleOnChange={handleOptionChange} question="8. Question Eight" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                        <br/>
                        <Question groupName="qNine" handleOnChange={handleOptionChange} question="9. Question Nine" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
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