import Header from "./components/Header"
import "./App.css"
import Main from "./components/Main"
import { DarkProvider } from "./context/Dark"

const App = () => {

  return (
    <DarkProvider>
      <div className="app">
        <Header />
        <Main />
      </div>
    </DarkProvider>
  )
}

export default App