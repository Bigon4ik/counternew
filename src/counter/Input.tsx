import React from 'react';

type InputProps={
    children:number
    error?:string
}
export const Input=(props:InputProps)=>{
    return(
        <div style={{
            //padding: props.padding,
            display:'flex',
            justifyContent:'center',
            color:props.error,
            backgroundColor:'rosybrown',
            padding:30,
            border: '5px solid green',
            borderRadius: 15,
            textAlign: 'center',
            blockSize:30,
            // marginLeft:500,
            // marginTop:10,
            width:100
            //margin: props.margin ? props.margin : 0
        }}>

            {props.children}
        </div>
    )
}