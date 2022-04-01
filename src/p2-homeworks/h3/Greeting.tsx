import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greetingClass}>
            <div>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
                <div className={s.error}>{error}</div>
            </div>
            <SuperButton className={s.button} onClick={addUser} disabled={!name}>{'Add'}</SuperButton>
            <div className={s.total}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
