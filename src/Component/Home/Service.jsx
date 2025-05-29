import React from 'react'
import short_img from "../../assets/images/title-img.png"
import icon1 from "../../assets/images/icon/step-1.png"
import icon2 from "../../assets/images/icon/step-2.png"
import icon3 from "../../assets/images/icon/step-3.png"
import icon4 from "../../assets/images/icon/step-4.png"

const Service = () => {
  return (
    <>
        <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
            <div className='container'>
                       <div className="short_head">
                       <img src={short_img} className="img-fluid service_img" />
                       <p className="bd-step__title">and pure products</p>
                       </div>
                        <ul className="services-list">
                            <li>
                                <div className="service-inner">
                                    <span className="biolife-icon">
                                        <img src={icon1} className="img-fluid service_img" />
                                    </span>
                                    <h3 className="srv-name">Planning</h3>
                                    <p className="third-line text-center pt-3">Consider how some search engines autocorrect for spen.</p>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner">
                                    <span className="biolife-icon">
                                        <img src={icon2} className="img-fluid service_img" />
                                    </span>
                                    <h3 className="srv-name">Seeding</h3>
                                    <p className="third-line text-center pt-3">Consider how some search engines autocorrect for spen.</p>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner">
                                    <span className="biolife-icon">
                                        <img src={icon3} className="img-fluid service_img" />
                                    </span>
                                    <h3 className="srv-name">Quality Assure</h3>
                                    <p className="third-line text-center pt-3">Consider how some search engines autocorrect for spen.</p>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner">
                                    <span className="biolife-icon">
                                        <img src={icon4} className="img-fluid service_img" />
                                    </span>
                                    <h3 className="srv-name">Marketing</h3>
                                    <p className="third-line text-center pt-3">Consider how some search engines autocorrect for spen.</p>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
    </>
  )
}

export default Service
