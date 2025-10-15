import logo from "../assets/superfd-logo.png";

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="flex items-center justify-between px-6 py-4 navbar-container">
                    <a href="https://www.superfd.in/">
                        <img id="navbar-logo" src={logo} alt="SuperFD Logo" />
                    </a>
                    <a href="https://www.superfd.in/auth">
                        <button id="sign-up">Sign Up</button>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
