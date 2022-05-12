import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch();
    const currentTheme = useSelector<AppStoreType, string>(state => state.theme.themes);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeThemeC(e.currentTarget.value));
    }


    return (
        <div className={s[currentTheme]}>
            <hr/>
            <span className={s[currentTheme + '-text']}>
                homeworks 12
            </span>
            <hr/>
            <SuperRadio
                value={currentTheme}
                type={'radio'}
                options={themes}
                onChange={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
