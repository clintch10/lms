import React from 'react'

const Navbar = () => {
    return (
        <div className="page-navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id="page_navbar">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <a className="navbar-brand" href="./">
                        <img src="./assets/img/dummy-logo.png" name="branding" alt="" />
                            <span></span>
                    </a>

                </div>

                <div className="user-action">
                    <a className="btn-default btn-login" href="login"><span className="btn-login--text">Log in</span><span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span></a>
                    <a className="btn-default btn-signup" href="signup">Sign up</a>
                </div>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link" href="">Features</a>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Contact Us</a>
                            </li>
                    </ul>
                </div>


            </nav>
        </div>
    )
}

export default Navbar