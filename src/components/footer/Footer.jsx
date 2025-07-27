import React, { useEffect, useState } from 'react'
import "./footer.scss"
import { useDispatch } from 'react-redux'
import { SiteSetting } from '../../apis/SiteSettingThunk'
import { NavLink } from 'react-router-dom'
import whatsapp from '../../assets/whatsapp.png'
import { CategoriesThunk } from '../../apis/ServiceThunk'



const Footer = () => {
    const dispatch = useDispatch()
    const [siteSetting, setSiteSetting] = useState({})
    const [temporaryResidence, setTemporaryResidence] = useState([])

    useEffect(() => {
        (async () => {
            const [sitesettingdata, servicedata] = await Promise.all([
                dispatch(SiteSetting()).unwrap(),
                dispatch(CategoriesThunk()).unwrap(),

            ]);
            setSiteSetting(sitesettingdata);
            setTemporaryResidence(servicedata["Temporary Residence"][0]["Temporary Residence"])
        })();
    }, []);
    return (
        <>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <NavLink to='/temporary-residence' style={{ textDecoration: 'none' }}><h3>Temporary Residence</h3></NavLink>
                                <ul className="links mb-4 mb-md-0">
                                    {/* <li><NavLink to="/study-permit">Study Permit</NavLink>
                                    </li>
                                    <li><a href="#">Study Permit
                                        Extension</a></li>
                                    <li><a href="#">Visitor Visa</a>
                                    </li>
                                    <li><a href="#">Super Visa</a></li> */}
                                    {temporaryResidence?.map((item) => (
                                        <li key={item._id}>
                                            <NavLink to={`/temporary-residence/${item.slug}/`}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                    <li><NavLink to='/work-permit'>Work Permit</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <NavLink style={{ textDecoration: 'none' }} to='/permanent-residence'><h3>Permanent Residence</h3></NavLink>
                                <ul className="links mb-4 mb-md-0">
                                    <li><NavLink to='/express-entry'>Express Entry</NavLink>
                                    </li>
                                    <li><NavLink to='/provincial-nominee-program'>Provincial Nominee
                                        Program</NavLink></li>
                                    <li><NavLink to='/family-sponsorship'>Family
                                        Sponsorship</NavLink></li>
                                    <li><NavLink to='business-immigration'>Business
                                        Immigration</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <NavLink to='/other-services' style={{ textDecoration: 'none' }}><h3>Other Services</h3></NavLink>
                                <h3>Quick Links</h3>
                                <ul className="links mb-4 mb-md-0">
                                    <li><NavLink to='/news'>Latest News</NavLink></li>
                                    <li><NavLink to='/blog'>Blog</NavLink></li>
                                    <li><NavLink to='/events'>Events</NavLink></li>
                                    <li><NavLink to=''>Careers</NavLink></li>
                                    <li><NavLink to='/faq'>FAQs</NavLink></li>
                                    <li><NavLink to='/contact'>Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Get in Touch</h3>
                                <ul className="address">
                                    <li><i
                                        className="fa-solid fa-location-dot"></i>
                                        {/* Suite 910, 405 The West Mall, Etobicoke, ON,
                                        M9C 5J1 Canada  */}
                                        {siteSetting?.address}
                                    </li>
                                    <li><i
                                        className="fa-solid fa-phone"></i><a
                                            href="tel:919645037373">
                                            {/* +91-964-503-7373 */}
                                            {siteSetting?.contact_first}
                                        </a></li>
                                    <li><i
                                        className="fa-regular fa-envelope"></i><a
                                            href="mailto:info@canamerica.ca">
                                            {/* info@canamerica.ca */}
                                            {siteSetting?.email_first}
                                        </a></li>
                                </ul>
                                {/* <ul className="social-media mt-3">
                                    <li className="elementor-repeater-item-48d80c3"><a

                                        href="https://www.facebook.com/Can.America.Canadaimmigration" target="_blank"><i
                                            className="fa-brands fa-facebook-f"></i></a></li>
                                    <li className="elementor-repeater-item-48d80c3"><a

                                        href="https://www.linkedin.com/company/can-america-immigration-inc/"
                                        target="_blank"><i
                                            className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li className="elementor-repeater-item-48d80c3"><a
                                        href="https://www.instagram.com/canamerica_immigration/"
                                        target="_blank"><i
                                            className="fa-brands fa-instagram"></i></a></li>
                                    <li className="elementor-repeater-item-48d80c3"><a
                                        href="https://twitter.com/immigraiton"
                                        target="_blank"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="elementor-repeater-item-48d80c3"><a
                                        href="https://www.youtube.com/@canamericaimmigration"
                                        target="_blank"><i className="fa-brands fa-youtube"></i></a>
                                    </li>
                                </ul> */}
                                <ul className="social-media mt-3">
                                    {siteSetting?.social_media?.slice(0, 5).map((item) => (
                                        <li key={item._id}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.class ? (
                                                    <i className={item.class}></i>
                                                ) : (
                                                    <img src={item.icon} alt="social" />
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 text-center text-md-start">
                                {/* © 2023 CAN-AMERICA
                                Immigration Consulting Services Inc. All Rights Reserved. */}
                                {siteSetting?.copyright}
                            </div>
                            <div className="col-md-5">
                                <ul className="mt-4 mt-md-0 justify-content-md-end">
                                    <li>
                                        <NavLink to="/disclaimer" state={{ type: 'disclaimer' }}>Disclaimer</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privacy-policy" state={{ type: 'privacy policy' }}>Privacy Policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/terms-and-conditions" state={{ type: 'terms and conditions' }}>Terms of Service</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='whatsapp-chat'>
                    <img src={whatsapp} alt='' />
                </div>
            </footer>
        </>
    )
}

export default Footer
