import styles from './ActionButton.module.css'

export const ActionButton = ({ title, handler }) => {

    return (
        <button className={styles.button} onClick={handler}>{title}</button>
    )

}