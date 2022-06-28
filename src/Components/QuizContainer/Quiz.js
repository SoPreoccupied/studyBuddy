// CAnswer Oneit to Artemij Fedosejev http://react.tips/radio-buttons-in-react-16/
// For now aim for 10 Questions
import Question from "./Question";
import { Link } from "react-router-dom";

const Quiz = () => {

 const handleOptionChange = changeEvent => {
  };

 const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:");
  };

    return (
        <div className="wholeQuiz">
            <form onSubmit={handleFormSubmit}>
                <Question groupName="qOne" question="Whats your favorite color?" optionOne="Red" optionTwo="Blue" optionThree="Yellow"/>
                <br/>
                <Question groupName="qTwo" question="Question Two" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qThree" question="Question Three" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qFour" question="Question Four" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qFive" question="Question Five" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qSix" question="Question Six" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qSeven" question="Question Seven" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qEight" question="Question Eight" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qNine" question="Question Nine" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                <Question groupName="qTen" question="Question Ten" optionOne="Answer One" optionTwo="Answer Two" optionThree="Answer Three"/>
                <br/>
                    <div className="submitButton">
                        <Link to="/AuditoryLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                        <Link to="/KinestheticLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                        <Link to="/VisualLearner"><button className="button" type="button">View my Learning Style!</button></Link>
                    </div>
            </form>
      </div>
    );
}

export default Quiz;