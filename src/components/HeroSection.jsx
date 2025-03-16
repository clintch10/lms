import React from 'react'


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container-fluid d-flex flex-row">
                <div className="d-flex flex-column hero-section__left-panel" data-aos="fade-right">
                    <span className="hero-badge">#Learning Management System</span>
                    <h1 className="animation animate__fadeInLeft">Achieve More with Online Learning</h1>
                    <span className="animation animate__fadeInUp">With our innovative solutions, we ensure a seamless educational experience tailored to your unique needs.</span>
                    <button className="btn-default apply-now">Get Started</button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-end hero-section__right-panel" data-aos="fade-left">
                    <img className="section--img" src="./assets/img/dummy-hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection