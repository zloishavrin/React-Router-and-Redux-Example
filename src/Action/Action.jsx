import { ActionButton } from "./ActionButton"
import styles from './Action.module.css'
import { useDispatch } from "react-redux"
import { minusWeight, addWeight, clearAdress } from "../store/userSlice"

export const Action = () => {

    const dispath = useDispatch();

    return (
        <div className={styles.actions}>
            <ActionButton title={'Похудел'} handler={() => dispath(minusWeight())} />
            <ActionButton title={'Потолстел'} handler={() => dispath(addWeight())} />
            <ActionButton title={'Удалить адрес'} handler={() => dispath(clearAdress())} />
        </div>
    )

}