import React from 'react'
import SuperRange from '../c7-SuperRange/SuperRange';
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    setValue1: (n: number) => void
    setValue2: (n: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        ...props
        // min, max, step, disable, ...
    }
) => {

    const condition1 = (num: number) => {
        if (value[1] <= num) return
        props.setValue1(num)
    }
    const condition2 = (num: number) => {
        if (value[0] >= num) return
        props.setValue2(num)
    }

    const st: React.CSSProperties = {
        position: 'absolute',
        width: '200px',
    }

    return (
        <div className={s.double}>
            <SuperRange value={value[0]} min={min} max={max}
                        bgColor={'#eee'}
                        onChangeRange={condition1}
                        st={st}
                        po={{position: 'relative'}}
            />

            <SuperRange value={value[1]} min={min} max={max}
                        onChangeRange={condition2}
            />
        </div>
    )
}

export default SuperDoubleRange
