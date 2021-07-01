import { h } from 'preact'
import { t } from 'ttag'

import Linkifier from './Linkifier'

const Info = ({ intro }) => {
  return (
    <div className="info__second">
      <div className="info__second__text-container">
        <div className="info__second__text">
          <Linkifier value={intro} />
        </div>
      </div>
    </div>
  )
}

export default Info
