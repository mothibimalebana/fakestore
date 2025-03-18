import styles from '../../css/navbar.module.css';

const NavButton = ({label}) =>{
    return(
        <>
            <div className="nav-btn">
                <button className={styles.navbuttons}><a className={styles.navbuttons} href={label}>{label}</a></button>
            </div>
        </>
    )
}

export default NavButton