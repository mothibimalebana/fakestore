const NavButton = ({label}) =>{
    return(
        <>
            <div className="nav-btn">
                <button><a href={label}>{label}</a></button>
            </div>
        </>
    )
}

export default NavButton