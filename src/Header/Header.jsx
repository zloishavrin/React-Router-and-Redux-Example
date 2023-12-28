import { HeaderButton } from "./HeaderButton"
import styles from './Header.module.css'
import { useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className={styles.header}>

            <img src="./vite.svg" />

            <div>
                <HeaderButton 
                    path={'/passport'} 
                    title={'Паспорт'}
                    currentPath={currentPath}/>
                <HeaderButton 
                    path={'/adress'} 
                    title={'Адрес'}
                    currentPath={currentPath}/>
                <HeaderButton 
                    path={'/bio'} 
                    title={'Био'}
                    currentPath={currentPath}/>
            </div>

            <div className={styles.info}>
                <img src="./vite.svg" />
                <p>User Name</p>
            </div>

        </header>
    )

}