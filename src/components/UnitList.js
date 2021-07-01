import { h } from 'preact'
import { t } from 'ttag'

import UnitInformation from './UnitInformation'

const UnitList = ({ units = [] }) => {
  if (units.length === 0) return null

  console.log(units)

  const visibleUnits = units
  const hiddenUnits = units.slice(5)

  return (
    <div className="unit" id="unit-list">
      <div className="container container_reset-mobile unit-list-container">
        <div className="unit-title">
          <h1 className="title unit__title">{ t`Boliger` }</h1>
        </div>

        <div className="table">
          <div className="table__vertical title-row">
            <div className="table__cell-title">{ t`Boliger` }</div>
            <div className="table__cell-title">{ t`Soverom` }</div>
            <div className="table__cell-title">{ t`Etasjer` }</div>
            <div className="table__cell-title">{ t`Størrelse` }</div>
            <div className="table__price-title">{ t`Pris` }</div>
          </div>

          {visibleUnits.map((unit, idx) => (
            <UnitInformation key={idx} idx={idx} {...unit} />
          ))}
        </div>

        <div className="spoiler">
          <div className="table spoiler-body">
            {hiddenUnits.map((unit, idx) => (
              <UnitInformation key={idx} idx={visibleUnits.length + idx} {...unit} />
            ))}
          </div>
        </div>

        {hiddenUnits.length > 0 && (
          <button className="unit__button spoiler-btn-bottom" id="unitButton">
            { t`Vis flere` }
          </button>
        )}
      </div>
    </div>
  )
}

export default UnitList
