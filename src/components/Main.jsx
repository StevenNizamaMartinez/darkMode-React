import { useState, useEffect , useContext} from "react"
import { Dark } from "../context/Dark"
import facts from "../data/facts"

const Main = () => {

    const {darkMode} = useContext(Dark)

    useEffect(
        () => {
            setData(facts)
        }, []
    )

    const [data, setData] = useState([])

    const list = data.map((p, i) => {
        return (
            <li key={i}>{p.title}</li>
        )
    })

    return (
        <div className="container" style={{
            background: !darkMode && "#303030",
            color: !darkMode && "white"
        }} >
            <main >
                <h1>Fun facts about React</h1>
                <ul>
                    {list}
                </ul>
            </main>
        </div>

    )
}

export default Main