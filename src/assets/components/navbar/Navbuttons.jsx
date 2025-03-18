import { Link } from 'react-router-dom';
import styles from '../../css/navbar.module.css';

const NavButton = ({label}) =>{
    return(
        <>
            <div className="nav-btn">
                <button className={styles.navbuttons}><Link to={label} className={styles.navbuttons} href={label}>{label}</Link></button>
            </div>
        </>
    )
}

export default NavButton