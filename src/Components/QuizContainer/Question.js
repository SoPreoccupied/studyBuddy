import { useState } from "react"

const Question = (props) => {

    // this.setState({
    //     selectedOption: changeEvent.target.value
    //   });

    // const handleOptionChange = (changeEvent) => {
    //     setSelectedOption(Number(changeEvent.target.value))
    // }

    // const [selectedOption, setSelectedOption] = useState(-1)

    return ( 
    <div className="question1">
    {props.question}
        <div className="option1">
            <label>
                <input
                    type="radio"
                    name={props.groupName}
                    value="0"
                    className="option1"
                />
               {props.optionOne}
            </label>
        </div>
        <div className="option2">
            <label>
            <input
                type="radio"
                name={props.groupName}
                value="1"
            />
                {props.optionTwo}
            </label>
        </div>
        <div className="option3">
            <label>
            <input
                type="radio"
                name={props.groupName}
                value="2"
            />
                {props.optionThree}
            </label>
        </div>
</div>
)
}

export default Question;