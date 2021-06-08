import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './counter/Counter';

type StateType={
    minValue:number
    maxValue:number
}
function App() {

    function saveState<StateType>(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<StateType>(key: string, defaultState: StateType) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as StateType;
        return defaultState;
    }
    const state: StateType = restoreState<StateType>('savedValues', {maxValue: 10, minValue: 0});

    let [minValue, setMinValue] = useState<number>(state.minValue)
    let [maxValue, setMaxValue] = useState<number>(state.maxValue)
    let [counter, setCounter] = useState<number>(state.minValue)
    let [error, setError] = useState<string>('work')

    const resetCount = () => {
        setCounter(state.minValue)
    }
    const increaseCount = () => {
        setCounter(+counter + 1)
    }
    function settingValues(state: StateType) {
        setMaxValue(state.maxValue)
        setCounter(state.minValue)
        setMinValue(state.minValue)
    }
  return (
   <div style={{backgroundColor:'black',height:1000}}>
     <Counter
         minValue={minValue}
         maxValue={maxValue}
         counter={counter}
         add={increaseCount}
         reset={resetCount}
         error={error}/>
   </div>
  );
}

export default App;
