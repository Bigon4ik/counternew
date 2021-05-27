
type ButtonTypeProps={
    title:string
    disabled:boolean
    onChange:()=>void

}

export const Button=(props:ButtonTypeProps)=>{
    return(
        <div style={{
            //padding: props.padding,
            display:'flex',
            justifyContent:'center',
            backgroundColor:'rosybrown',
            padding:10,
            //display: 'block',
            border: '5px solid green',
            borderRadius: 15,
            textAlign: 'center',
            blockSize:10,
            marginLeft:520,
            marginTop:10,
            width:100,
            //margin: props.margin ? props.margin : 0
        }}>
            <button onClick={props.onChange} disabled={props.disabled}>{props.title}</button>

        </div>
    )
}