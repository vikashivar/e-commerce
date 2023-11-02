import "./Newsletter.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import react from 'react'
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accordence with our privacy policy</div>
        <div className="social-icons">
            <div className="icon">
                <FaFacebookF size={14}></FaFacebookF>
            </div>
            <div className="icon">
                <FaTwitter size={14}></FaTwitter>
            </div>
            <div className="icon">
                <FaInstagram size={14}></FaInstagram>
            </div>
            <div className="icon">
                <FaLinkedinIn size={14}></FaLinkedinIn>
            </div>
        </div>
        </div>
    </div>;
};

export default Newsletter;
