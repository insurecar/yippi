import { h } from 'preact'
import { t } from 'ttag'
import Linkifier from './Linkifier'

const Header = ({ title, titleEnabled, headerImage, logo }) => (
  <div className="header-main">
    <img className="header-img" src={ headerImage.large } alt=""/>
    <div className="info">
      <img className="header-img--show-mobile" src={ headerImage.large } alt=""/>
      <div className="logo">
        <img src={logo.large} alt="Apeltunvegen"/>
      </div>
      {(titleEnabled === undefined || titleEnabled) && (
        <div className="info__title">
          <Linkifier value={title} />
        </div>
      )}
      <a className="btn info__main" href="#form">
        { t`Meld interesse` }
      </a>
    </div>
  </div>
)

export default Header
