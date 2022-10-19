import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
    const {score, setAppState,setScore} = useContext(DataContext)
    const reTest = () => {
        setAppState("menu")
        setScore(0)
    }

    return (
        <div className = "score">
            <h1> YOUR SCORE IS </h1>
            <h2> {score} / {QuestionsData.length} </h2>
            <button onClick = {reTest}> START THE TEST AGAIN </button>
        </div>
    )
}

export default Score;