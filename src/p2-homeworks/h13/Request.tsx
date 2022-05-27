import React, {useState} from "react";
import {requestAPI} from "./RequestsAPI";


export const Request = () => {

    const [checkboxStatus, setCheckboxStatus] = useState(false)
    const [requestRes, setRequestRes] = useState('Делай запрос')

    function sendRequestRes(checkboxStatus: boolean) {
        requestAPI.post(checkboxStatus).then(data => {
                setRequestRes(data)
            }
        )
    }

    return (
        <div>
            <input type="checkbox" onClick={() => setCheckboxStatus(!checkboxStatus)}/> Меняй статус!<br/>
            <button onClick={() => sendRequestRes(checkboxStatus)}>Запрос на сервер</button>
            <br/>
            {requestRes}
        </div>
    )
}
