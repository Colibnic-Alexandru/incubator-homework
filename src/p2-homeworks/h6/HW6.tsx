import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }

    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value) || '')
    }

    return (
        <div>
            <hr/>
            homeworks 6


            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton className={styles.btn} onClick={save}>save</SuperButton>
            <SuperButton className={styles.btn} onClick={restore}>restore</SuperButton>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW6
