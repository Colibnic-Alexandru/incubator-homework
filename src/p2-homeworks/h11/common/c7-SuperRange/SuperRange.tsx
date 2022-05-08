import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
    max: number
    min: number
    bgColor?: string
    st?: React.CSSProperties
    po?: React.CSSProperties
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value, max, min,
        bgColor, st, po,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    let pointPosition = (value - min) / (max - min) * 200

    let progressBGColor = bgColor ? bgColor : '#0f5706'

    let selfPointPosition = (value * 26) / 100

    return (
        <div className={s.range} style={st ? st : undefined}>
            <span className={s.valueCoords} style={{left: `calc(${pointPosition}px - ${selfPointPosition}px)`}}>{value}</span>
            <div className={s.progressOverlay} style={po}>
                <div className={s.progress} style={{
                    background: `${progressBGColor}`, width: `${pointPosition}px`
                }}/>
            </div>
            <input
                step={1}
                max={max}
                value={value}
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperRange
