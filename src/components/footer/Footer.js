//Icons social media for footer
import codepen from '../../img/icons/codepen.svg'
import instagram from '../../img/icons/instagram.svg'
import gitHub from '../../img/icons/gitHub.svg'
import linkedIn from '../../img/icons/linkedIn.svg'
import './style.css'

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="https://codepen.io/aaidarov">
                            <img src={codepen} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/aaidarov-triplea">
                            <img src={gitHub} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.instagram.com/akzhol_55">
                            <img src={instagram} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.linkedin.com/in/akzhol-aidarov-19098910a">
                            <img src={linkedIn} alt="Link"/>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2023 by aaidarov</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;