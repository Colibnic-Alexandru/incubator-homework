import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data:  Array<AffairType>
    setFilter: (type: FilterType)=> void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={setAll} className={s.button}>{'All'}</SuperButton>
            <SuperButton onClick={setHigh} className={s.button}>{'High'}</SuperButton>
            <SuperButton onClick={setMiddle} className={s.button}>{'Middle'}</SuperButton>
            <SuperButton onClick={setLow} className={s.button}>{'Low'}</SuperButton>
        </div>
    )
}

export default Affairs
