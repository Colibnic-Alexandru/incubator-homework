import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeInputRangeHandle = (nums: number) => {
        if (nums >= value2) return
        setValue1(nums)
    }

    const onChangeDoubleInputRangeHandle = (nums: Array<number>) => {
        if (nums[0] >= nums[1]) return
        setValue2(nums[1])
        setValue1(nums[0])
    }

    return (
            <div>
                <hr/>
                homeworks 11
                <hr/>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        min={0}
                        max={100}
                        bgColor={'#0f5706'}
                        onChangeRange={onChangeInputRangeHandle}
                    />
                </div>
                <br/>
                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        min={0}
                        max={100}
                        onChangeRange={onChangeDoubleInputRangeHandle}
                        setValue1={setValue1}
                        setValue2={setValue2}
                    />
                    <span>{value2}</span>
                </div>
                <hr/>
            </div>
    )
}

export default HW11