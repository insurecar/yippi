import { h, Fragment } from 'preact'
import { t } from 'ttag'

import { formatPrice } from './formatPrice'

const UnitInformation = ({
   idx,
   unitId,
   bedroomCount,
   floorNumber,
   sizeM2,
   totalPrice,
   floorPlan,
   omkostninger
}) => (
  <Fragment>
    <div className={['table__vertical', (!!floorPlan && 'cursor-pointer')].join(' ')}
         data-toggle="collapse"
         data-target={`.collapse.unit-${idx}`}
    >
      <div className="table__cell unit">{unitId}</div>
      <div className="table__cell bedrooms">{bedroomCount}</div>
      <div className="table__cell floor">{Math.max(1, Number(floorNumber))}</div>
      <div className="table__cell size">
        {sizeM2} m<sup>2</sup>
      </div>
      <div className="table__price right">
        {formatPrice(totalPrice)}
          <i
            className={`fa fa-angle-down the-button animate-icon table__cell-icon ${!!floorPlan ? '' : 'white'}`}
            id="price"
          />
      </div>
    </div>

    {!!floorPlan && (
      <div className={['block', 'collapse', `unit-${idx}`].join(' ')}>
        <div className="block-left">
          <ul className="block__list">
            <li className="block__item">
              <div className="block__item-left">{ t`Soverom` }</div>
              <div className="block__item-right">{bedroomCount}</div>
            </li>
            <li className="block__item">
              <div className="block__item-left">{ t`Etasje` }</div>
              <div className="block__item-right">{Math.max(1, Number(floorNumber))}</div>
            </li>
            <li className="block__item">
              <div className="block__item-left">{ t`Bruksareal` }</div>
              <div className="block__item-right">
                {sizeM2} m<sup>2</sup>
              </div>
            </li>
            <li className="block__item">
              <div className="block__item-left">{ t`Pris` }</div>
              <div className="block__item-right">{formatPrice(totalPrice)}</div>
            </li>
            {omkostninger && (
              <li className="block__item">
                <div className="block__item-left">{ t`Omkostninger` }</div>
                <div className="block__item-right">---,-</div>
              </li>
            )}
          </ul>
        </div>

        <div className="block-right__img-wrapper">
          <img className="block-right__img" src={floorPlan} />
        </div>
      </div>
    )}
  </Fragment>
)

export default UnitInformation
