import { ScreenRow } from "./ScreenRow"
import styles from './Screen.module.css'
import { useSelector } from "react-redux"

export const Screen = ({ title }) => {

    const info = useSelector((state) => state.user[title]);

    const rows = [];
    for(let key in info) {
        rows.push(<ScreenRow title={ key } value={ info[key] }/>)
    }

    return (
        <div className={styles.table}>
            
            <h1>{title}:</h1>

            {rows}

        </div>
    )

}