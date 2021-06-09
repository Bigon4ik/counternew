import React from 'react';
import {Paper} from '@material-ui/core';
import s from './Counter.module.css';
import {Button} from '../Button';


export type CounterType = {
    counter: number
    add: () => void
    reset: () => void
    disabled?: boolean
    minValue: number
    maxValue: number
    error: string
}


function Counter(props: CounterType) {


    return (
        <div className={s.counter}>
            <Paper elevation={24}
                   square={false}
                   style={{
                       backgroundColor: '#dceef7'
                   }}
            >
                <div className={`${props.counter == props.maxValue ? s.maximum : s.usual} ${s.screen}`}>
                    {props.error === 'work' ? props.counter : props.error}
                </div>
                <div className={s.buttons}>
                    <Button
                        title="add"
                        onChange={props.add}
                        disabled={props.error !== 'work' || props.counter == props.maxValue}
                    />
                    <Button
                        title="reset"
                        onChange={props.reset}
                        disabled={props.error !== 'work'}
                    />
                </div>
            </Paper>
        </div>
    );
}

export default Counter;
