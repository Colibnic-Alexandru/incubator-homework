import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        dispatch(loadingAC(true))
    };
    return (
        <div>
            <hr/>
            homeworks 10
            <hr/>
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
        </div>
    )
}

export default HW10
