// CAnswer Oneit to Artemij Fedosejev http://react.tips/radio-buttons-in-react-16/

// http://www.educationplanner.org/students/self-assessments/learning-styles-quiz.shtml
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Quiz = () => {
    const navigate = useNavigate()
    const [answersObject, setAnswersObject] = useState({})
    const [submitHidden, setSubmitHidden] = useState(true)

    useEffect(() => {
        setSubmitHidden(!(Object.keys(answersObject).length === 10))
    }, [answersObject])

    const handleOptionChange =  changeEvent => {
        setAnswersObject({...answersObject, [changeEvent.target.name]: changeEvent.target.value})
    };

    const handleFormSubmit = clickEvent => {
        let aCount = 0;
        let kCount = 0;
        let vCount = 0;

        for (const key of Object.keys(answersObject)) {
            console.log(key)
            if (key == "qOne") {
                if (answersObject[key] == 1) {
                    vCount++
                } else if (answersObject[key] == 2) {
                    aCount++
                } else {
                    kCount++
                }
            } else if (key == "qTwo") {
                if (answersObject[key] == 1) {
                    aCount++
                } else if (answersObject[key] == 2) {
                    kCount++
                } else {
                    vCount++
                }
            }  else if (key == "qThree") {
                if (answersObject[key] == 1) {
                    aCount++
                } else if (answersObject[key] == 2) {
                    vCount++
                } else {
                    kCount++
                }
            } else if (key == "qFour") {
                if (answersObject[key] == 1) {
                    vCount++
                } else if (answersObject[key] == 2) {
                    aCount++
                } else {
                    kCount++
                }
            } else if (key == "qFive") {
                if (answersObject[key] == 1) {
                    vCount++
                } else if (answersObject[key] == 2) {
                    kCount++
                } else {
                    aCount++
                }
            } else if (key == "qSix") {
                if (answersObject[key] == 1) {
                    aCount++
                } else if (answersObject[key] == 2) {
                    vCount++
                } else {
                    kCount++
                }
            } else if (key == "qSeven") {
                if (answersObject[key] == 1) {
                    kCount++
                } else if (answersObject[key] == 2) {
                    vCount++
                } else {
                    aCount++
                }
            } else if (key == "qEight") {
                if (answersObject[key] == 1) {
                    vCount++
                } else if (answersObject[key] == 2) {
                    aCount++
                } else {
                    kCount++
                }
            } else if (key == "qNine") {
                if (answersObject[key] == 1) {
                    kCount++
                } else if (answersObject[key] == 2) {
                    aCount++
                } else {
                    vCount++
                }
            } else if (key == "qTen") {
                if (answersObject[key] == 1) {
                    vCount++
                } else if (answersObject[key] == 2) {
                    aCount++
                } else {
                    kCount++
                }
            }
        }
        console.log(`v is ${vCount}\nk is ${kCount}\na is ${aCount}`)
        if (vCount >= kCount && vCount >= aCount) {
            navigate("/VisualLearner")
        } else if (kCount >= aCount && kCount >= vCount) {
            navigate("/KinestheticLearner")
        } else {
            navigate("/AuditoryLearner")
        }
  };

    return (
        <div className="gridDiv">
            <div className="leftColumn">
                <img className="yellowRobot" src={require("../../assets/yellowrobot.png")} />
            </div>
            <div className="rightColumn">
                <div className="wholeQuiz">
                    <form>
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
                        <Question groupName="qTen" handleOnChange={handleOptionChange} question="10. What would you most like to do to relax?" optionOne="Read a book." optionTwo="Listen to music." optionThree="Exercise (walk, run, play sports, etc.)"/>
                        <br/>
                    </form>
                    <button className={submitHidden? "button hidden": "button"} type="button" onClick={handleFormSubmit}>View my Learning Style!</button>
            </div>
        </div>
    </div>
    );
}

export default Quiz;