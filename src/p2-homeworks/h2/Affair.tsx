import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div className={s.affairs}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <SuperButton onClick={deleteCallback} className={s.button}>{'X'}</SuperButton>
        </div>
    )
}

export default Affair
