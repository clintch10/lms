import React from 'react'

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container d-flex flex-column align-items-center">
                <div className="section-heading" data-aos="fade-up">
                    <h2>Discover simplicity and mastery with advanced learning features</h2>
                    <span>Effortless, advanced learning makes mastery a seamless and enjoyable journey.</span>
                </div>

                <div className="d-flex justify-content-center features-list">
                    <div className="d-flex flex-column align-items-center features-list__item" data-aos="zoom-in" data-aos-delay="100">
                        <img src="./img/features-1.png" alt="" className="item--icon" />
                            <h4 className="item--title">Fully Online Teaching</h4>
                            <span className="item--desc">A dynamic and adaptable platform tailored to your evolving needs</span>
                    </div>
                    <div className="d-flex flex-column align-items-center features-list__item" data-aos="zoom-in" data-aos-delay="200">
                        <img src="./img/features-2.png" alt="" className="item--icon" />
                            <h4 className="item--title">Effortless Learning</h4>
                            <span className="item--desc">Clear language learning makes understanding and engagement effortless</span>
                    </div>
                    <div className="d-flex flex-column align-items-center features-list__item" data-aos="zoom-in" data-aos-delay="300">
                        <img src="./img/features-3.png" alt="" className="item--icon" />
                            <h4 className="item--title">Plan and Achieve</h4>
                            <span className="item--desc">Effective scheduling keeps you organized and on track with deadlines</span>
                    </div>
                    <div className="d-flex flex-column align-items-center features-list__item" data-aos="zoom-in" data-aos-delay="100">
                        <img src="./img/features-4.png" alt="" className="item--icon" />
                            <h4 className="item--title">Customer Care</h4>
                            <span className="item--desc">Expert training, guidance, and ongoing support</span>
                    </div>
                    <div className="d-flex flex-column align-items-center features-list__item" data-aos="zoom-in" data-aos-delay="200">
                        <img src="./img/features-5.png" alt="" className="item--icon" />
                            <h4 className="item--title">Safe Space</h4>
                            <span className="item--desc">A secure and safeguarded online learning space for all LMS users</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturesSection