import React, {useState} from 'react';
// import {Button} from './Button';
// import {Display} from './Display';
// import {Input} from './Input';
//
// export type CounterType = {
//     counter: number
//     add: () => void
//     reset: () => void
//     disabled?: boolean
//     minValue: number
//     maxValue: number
//     error: string
// }
// export const Counter = (props:CounterType) => {
//     const [count, setCount] = useState<number>(0)
//     const [maxValue, setMaxValue] = useState<number>(5)
//     const [startValue, setStartValue] = useState<number>(0)
//     const [settingMaxValue, setSettingMaxValue] = useState<number>(5)
//     // let [error, setError]=useState(false)
//     let error = 'red'
//
//     // const maxValue = 5
//
//     // const resetCount = () => {
//     //     setCount(startValue)
//     // }
//     // const increaseCount = () => {
//     //     setCount(+count + 1)
//     // }
//     // const settingsMaxValue=(value:number)=>{
//     //     setSettingMaxValue(value)
//     // }
//     // const settingsStartValue=(value:number)=>{
//     //     setStartValue(value)
//     //
//     // }
//     // const setSetting=()=>{
//     //     setMaxValue(settingMaxValue)
//     //     setCount(startValue)
//     // }
//
//     // const erroring=()={
//     //
//     // }
//     // const isValuesChanged = () => (starPropertiesValue !== startValue || settingMaxValue !== maxValue)
//     //
//     // const isDisabledButtonInc = () => (maxPropertiesValue === +count) && isValuesChanged()
//     //
//     // const isDisabledButtonReset = () => isValuesChanged()
//
//     return (
//         <div>
//             <div className={'settingsClass'}>
//                 <div className={'values'}>
//                     <div> <Input label={'Max Value'} value={settingMaxValue} onChange={settingsMaxValue}/></div>
//                     <div> <Input label={'Start Value'} value={startValue} onChange={settingsStartValue}/></div>
//
//                 </div>
//                 <div className={'setClass'}>
//                     <Button title={'set'} disabled={false} onChange={setSetting}/>
//
//                 </div>
//             </div>
//             <div className={'counterClass'}>
//                 <Display children={count} error={count === maxValue ? error : ''}/>
//                 <div className={'buttons'}>
//                     <Button
//                         title={'inc'}
//                         disabled={count === maxValue ? true : false}
//                         onChange={increaseCount}
//                     />
//                     <Button title={'reset'}
//                             disabled={count === startValue ? true : false}
//                             onChange={resetCount}
//                     />
//                 </div>
//
//             </div>
//         </div>
//     )
// }