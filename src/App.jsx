import './App.css'
import { Parent } from './components/useContext/Parent'
import UseEffectHook from './components/useEffect/UseEffectHook';
import UseStateHook from "./components/useState/UseStateHook";
import UseReducerHook from "./components/useReducer/UseReducerHook";

const App = () => {
  return (
    <>
    <UseStateHook />
    <Parent />
    <UseEffectHook />
    <UseReducerHook />
    </>
  )
}

export default App


