import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name} - {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_UP', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_DOWN', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK_AGE', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>
            {finalPeople}

            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={checkAge}>check 18</SuperButton>

            <hr/>
        </div>
    )
}

export default HW8
