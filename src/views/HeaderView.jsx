import { Link, NavLink } from "react-router-dom"

const HeaderView =()=>{
    return (
    <header className="d-flex justify-content-between p-3 align-items-center">
        <Link className="d-flex gap-3 align-items-center" to={"/home"}>
        <img src="/public/pngcoin.png"
        height={60}
        className='rounded'/>
        <h3 className="text-light">Coin Money Box</h3>
        </Link>
        <nav className="d-flex gap-3">
            <NavLink to={"/"}>Giriş Yap</NavLink>
            <NavLink to={"/home"}>Anasayfa</NavLink>
        </nav>
    </header>
    )
}
export default HeaderView