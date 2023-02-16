import { useContext } from "react"
import { BsToggleOn, BsToggleOff } from "react-icons/bs"
import { Dark } from "../context/Dark"


const Header = () => {

    const { toggleDarkMode, darkMode } = useContext(Dark)

    const handleDark = () => {
        toggleDarkMode()
    }

    return (
        <header
            className="header"
            style={
                {
                    background: !darkMode && "#202020"
                }
            }>
            <img src="react.png" alt="" />
            <h2>ReactFacts</h2>
            {darkMode ?
                <p>
                    Dark
                    <BsToggleOn
                        onClick={handleDark} />
                    Light
                </p> :
                <p style={{
                    color: !darkMode && "white"
                }}>
                    Dark<BsToggleOff
                        onClick={handleDark} />
                    Light
                </p>
            }
        </header>
    )
}

export default Header