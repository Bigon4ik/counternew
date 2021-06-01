
type ButtonTypeProps={
    title:string
    disabled:boolean
    onChange:()=>void

}

export const Button=(props:ButtonTypeProps)=>{
    return(
        <div>
            <button className={'buttonClass'} onClick={props.onChange} disabled={props.disabled}>{props.title}</button>
        </div>
    )
}