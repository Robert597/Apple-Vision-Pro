
import MobileNav from "./Mobile-Nav";
import Logo from "/vision pro 2/logo.png";

const Navbar = () => {

  return (
    <div className='NavbarContainer'>
        <div className="NavbarLogo">
            <img src={Logo} alt="apple-Logo"/>
        </div>
        <MobileNav/>
        <ul className="Navbar-Link-Content">
            <li><a href="#" data-replace="Home">Home</a></li>
            <li><a href="#" data-replace="Design">Design</a></li>
            <li><a href="#" data-replace="Technology">Technology</a></li>
            <li><a href="#" data-replace="Security">Security</a></li>
        </ul>
        <button className='navbarButton'>Notify Me</button>
    </div>
  )
}

export default Navbar