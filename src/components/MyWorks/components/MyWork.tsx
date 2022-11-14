import React from 'react';
import s from "./MyWork.module.css";


export type MyWorkPropsTYpe={
  title:string
  description: string
}
const MyWork = (props:MyWorkPropsTYpe) => {
    return (

            <div className={s.myWorkItem}>
                <div className={s.myWorkItemImg}><a className={s.myWorkBtn} href={''}> Смотреть</a></div>
                <h6 className={s.myWorkName}>Название проекта</h6>
                    <span className={s.description}>Краткое Описание</span>

        </div>
    );
};

export default MyWork;