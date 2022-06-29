const Question = (props) => {


    return ( 
        <div className="wholeQuiz">
            <div className="question1">
                {props.question}
                <div className="option1">
                    <label>
                        <input
                            type="radio"
                            name={props.groupName}
                            onChange={props.handleOnChange}
                            value="1"
                        />
                    {props.optionOne}
                    </label>
                </div>
                <div className="option2">
                    <label>
                    <input
                        type="radio"
                        name={props.groupName}
                        onChange={props.handleOnChange}
                        value="2"
                    />
                        {props.optionTwo}
                    </label>
                </div>
                <div className="option3">
                    <label>
                    <input
                        type="radio"
                        name={props.groupName}
                        onChange={props.handleOnChange}
                        value="3"
                    />
                        {props.optionThree}
                    </label>
                </div>
            </div>
        </div>
)
}

export default Question;