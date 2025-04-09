import React from 'react'


const HeroSection = () => {
    return (
        <section className="d-flex hero-section">
            <div className="container d-flex flex-row">
                <div className="d-flex flex-column justify-content-center hero-section__left-panel" data-aos="fade-right">
                    <span className="mb-3 hero-badge">#Learning Management System</span>
                    <h1 className="animation animate__fadeInLeft hero-header">Achieve More with Online Learning</h1>
                    <span className="mb-3 animation animate__fadeInUp hero-subheader">With our innovative solutions, we ensure a seamless educational experience tailored to your unique needs.</span>
                    <button className="mt-4 btn-default btn-opaque">Get Started</button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-end hero-section__right-panel" data-aos="fade-left">
                    <img className="section--img" src="./img/dummy-hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection