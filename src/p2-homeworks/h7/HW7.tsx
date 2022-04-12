import React, {useState} from 'react'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";

const arr = ['Alex', 'Dima', 'Vlad']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7
           <hr/>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW7
