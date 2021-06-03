import React, {ChangeEvent} from 'react';

type InputProps={
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    label: string
}
export const Input=(props:InputProps)=>{
    // const onChange = (e:any) => {
    //     props.onChange(e.target.value)
    // }
    return (
        <div className={'inputContainer'}>
            <label className={'inputText'}>{props.label}:</label>
            <input type="number" className={'inputValue'} value={props.value} onChange={props.onChange}/>
        </div>
    )

}