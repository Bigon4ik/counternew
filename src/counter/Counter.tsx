import React, {useState} from 'react';
import {Button} from './Button';
import {Display} from './Display';
import {Input} from './Input';



export const Counter = () => {
    let [count, setCount] = useState(0)
    // let [error, setError]=useState(false)
    let error = 'red'

    const maxValue = 5

    const resetCount = () => {setCount( 0)
    }
    const increaseCount = () => {setCount(count + 1)}
    // const erroring=()={
    //
    // }

    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            backgroundColor: 'gold',
            // padding: 30,
            // display: 'block',
            border: '5px solid green',
            borderRadius: 15,
            width:400,


        }}>
            <Display children={count} error={count === maxValue ? error : ''}/>
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