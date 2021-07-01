import { h } from 'preact'
import { t } from 'ttag'

const FooterWrapper = ({ logo }) => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div>
            <img className="footer__logo footer__logo--project" src={logo.large} />
          </div>
          <div>
            <a href="https://www.eiendomsmegler1.no/kontor/MSHED:16" target="_blank" rel="nofollow">
              <img className="footer__logo footer__logo--company" src="assets/EM1_logo.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterWrapper
