// Credit to Artemij Fedosejev http://react.tips/radio-buttons-in-react-16/
// For now aim for 10 Questions
import Question from "./Question";

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
                <Question groupName="qOne" question="Whats ur fav color" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qTwo" question="questionTwo" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qThree" question="questionThree" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qFour" question="questionFour" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qFive" question="questionFive" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qSix" question="questionSix" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qSeven" question="questionSeven" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qEight" question="questionEight" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qNine" question="questionNine" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                <Question groupName="qTen" question="questionTen" optionOne="red" optionTwo="blue" optionThree="yellow"/>
                    <div className="submitButton">
                        <button className="button" type="submit">
                            View my Learning Style!
                        </button>
                    </div>
            </form>
      </div>
    );
}

export default Quiz;