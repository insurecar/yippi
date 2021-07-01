import { h } from 'preact'
import { t } from 'ttag'

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__title">
          { t`Dette får du:` }
        </div>

        <div className="menu__text">
          <ul className="menu__text__list">
            <li className="menu__text-list__item">
              <i className="fa fa-check" aria-hidden="true" style="color:#b20012"></i>
              <div className="menu__text-list__item-text">
                { t`Tydelig gjennomgang av hvordan boligsalget gjøres` }
              </div>
            </li>
            <li className="menu__text-list__item">
              <i className="fa fa-check" aria-hidden="true" style="color:#b20012"></i>
              <div className="menu__text-list__item-text">
                { t`Plan for annonsering og visning` }
              </div>
            </li>
            <li className="menu__text-list__item">
              <i className="fa fa-check" aria-hidden="true" style="color:#b20012"></i>
              <div className="menu__text-list__item-text">
                { t`Strategi for salget: Hva skal til for å oppnå best mulig pris?` }
              </div>
            </li>
            <li className="menu__text-list__item">
              <i className="fa fa-check" aria-hidden="true" style="color:#b20012"></i>
              <div className="menu__text-list__item-text">
                { t`Tips til enkle grep som kan få frem det beste med boligen din` }
              </div>
            </li>
          </ul>
        </div>

        <div className="menu__subtitle">
          { t`Å selge bolig er en reise. Vi følger deg hele veien.` }
        </div>
      </div>
    </div>
  )
}

export default Menu
