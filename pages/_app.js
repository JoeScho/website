import '../styles/global.css';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <footer>
        <div className="links">
          <a className="footer-icon-left" href="https://www.linkedin.com/in/joescho/" target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a className="footer-icon" href="https://github.com/JoeScho" target="_blank" >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a className="footer-icon" href="https://medium.com/@joescho" target="_blank" >
            <FontAwesomeIcon icon={faMedium} size="3x" />
          </a>
        </div>
      </footer>
    </div>
  );
}
