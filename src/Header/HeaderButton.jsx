import { Link } from 'react-router-dom';
import styles from './HeaderButton.module.css'

export const HeaderButton = ({ path, title, currentPath }) => {

    const HeaderButtonStyles = [styles.button];

    if(path === currentPath) HeaderButtonStyles.push(styles.active);

    return (
        <Link className={HeaderButtonStyles.join(' ')} to={ path }>{ title }</Link>
    )

}