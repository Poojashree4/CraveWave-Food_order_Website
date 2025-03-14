import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" style={{width:"120px",height:"80px",marginLeft:"5px"}} />
                <p>At CRAVEWAVE, we’re dedicated to bringing delicious meals from your favorite local restaurants right to your doorstep.
                     Whether you're craving a hearty breakfast, a quick lunch, or a cozy dinner. With a user-friendly platform and seamless delivery service, we make food ordering 
                     simple, convenient, and fast. Your next meal is just a few clicks away!</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Private Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-2345-454749</li>
                    <li>contact@cravewave.com</li>
                </ul>

</div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright  2025 @ CraveWave.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer