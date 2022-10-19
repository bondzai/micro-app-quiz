import {useContext, useEffect, useState} from "react"
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
    const [current,setCurrent] = useState(0)
    const [selectedChoice,setSelectedChoice] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(() => {
        checkAnswer()
        // eslint-disable-next-line
    },[selectedChoice])
    
    const checkAnswer = () => {
        if (selectedChoice != "") {
            if (selectedChoice === QuestionsData[current].answer) {
                setScore(score + 1)
                goNextQuestion()
            } else {
                goNextQuestion()
            }
        }
    }

    const goNextQuestion = () => {
        setSelectedChoice("")
        if (current === QuestionsData.length - 1) {
            setAppState("score")
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className = "quiz">
            <h1> {QuestionsData[current].question} </h1>
            <div className="choices">
                <button onClick = {()=> setSelectedChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick = {()=> setSelectedChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick = {()=> setSelectedChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick = {()=> setSelectedChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;