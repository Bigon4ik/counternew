import React, {useState} from 'react';
import {Button} from './Button';
import {Display} from './Display';
import {Input} from './Input';


export const Counter = () => {
    let [count, setCount] = useState(0)
    // let [error, setError]=useState(false)
    let error = 'red'

    const maxValue = 5

    const resetCount = () => {
        setCount(0)
    }
    const increaseCount = () => {
        setCount(count + 1)
    }
    // const erroring=()={
    //
    // }

    return (
        <div className={'counterClass'}>
            <Display children={count} error={count === maxValue ? error : ''}/>
            {/*<Input/>*/}
            {/*<Input/>*/}
            {/*<Input/>*/}
            <Button
                title={'inc'}
                disabled={count === maxValue ? true : false}
                onChange={increaseCount}
            />
            <Button title={'reset'}
                    disabled={count === 0 ? true : false}
                    onChange={resetCount}
            />

        </div>
    )
}