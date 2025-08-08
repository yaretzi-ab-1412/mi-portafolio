import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer =()=>{
    return(<>
        <footer>
            <div className="social_icons">    
                <div style={{ margin: '1.5rem'}}>
                    <a href="https://www.linkedin.com/in/yaretzi-a-briones/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <button className='iconBtn' onClick={handleEmailClick}><FontAwesomeIcon icon={faEnvelope} widthAuto  /></button>
                </div>
                <span>Yaretzi Briones 2025</span>
            </div>
        </footer>
    </>)
}

export default Footer


const handleEmailClick = () => {
  const user = 'yaretzi.a.briones';
  const domain = 'outlook.com';
  window.location.href = `mailto:${user}@${domain}`;
};