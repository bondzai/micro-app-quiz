import {useContext} from "react"
import { DataContext } from "../App";

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return (
        <div className = "menu">
            <h1> MENU </h1>
            <button onClick={() => setAppState("quiz")}> START </button>
        </div>
    )
}

export default Menu;