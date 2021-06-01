import React from 'react';

type DisplayProps={
    children:number
    error?:string
}
export const Display=(props:DisplayProps)=>{
    return(
        <div className={'displayClass'} style={{color:props.error}}>

            {props.children}
        </div>
    )
}