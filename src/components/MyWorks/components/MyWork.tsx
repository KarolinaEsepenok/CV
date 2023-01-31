import React from 'react';
import s from "./MyWork.module.scss";
export type MyWorkPropsTYpe = {
    title: string
    description: string
    style:{
        backgroundImg:string
    }
    href: string
}
const MyWork = (props: MyWorkPropsTYpe) => {
    return (
        <div className={s.myWorkItem}>
            <div className={s.myWorkItemImg} style={{backgroundImage: props.style.backgroundImg}} >
                <a className={s.myWorkBtn} href={props.href} target={'_blank'}>See</a>
            </div>
            <div className={s.myWorkNameDesrc}>
                <h6 className={s.myWorkName}>{props.title}</h6>
                <span className={s.description}>{props.description}</span></div>

        </div>
    );
};

export default MyWork;