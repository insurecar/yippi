import { h } from 'preact'
import Linkifier from './Linkifier'

const Description = ({
     projectDescription,
     projectDescriptionImage,
     areaDescription,
     areaDescriptionImage,
     projectDescriptionEnabled,
     areaDescriptionEnabled
}) => {
  return (
    <div className="description">
      <div className="description__content">
        <div className="left-col">
          <div className="left-col__text">
            <div className="text">
              <Linkifier value={projectDescription} />
            </div>
          </div>
          <img src={ projectDescriptionImage.large } alt=""/>
        </div>
        <div className="right-col">
          <img src={ areaDescriptionImage.large } alt=""/>
        </div>
      </div>
      <div className="description__deco"></div>
    </div>
  )
}

export default Description