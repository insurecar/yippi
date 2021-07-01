import { h } from 'preact'
import { t } from 'ttag'
import Gallery from './Gallery/index'

import Linkifier from './Linkifier'

const StaticGallery = ({ galleryImages, areaDescription, areaDescriptionImage, projectDescription, salesArgument1, salesArgument2, salesArgument3 }) => {

  function validateImg (img) {
    return typeof(img) !== 'undefined'
  }


  return (
    <div className="static-gallery">
      <div className="static-gallery__full-img">
        <img src={areaDescriptionImage.large} alt="area description image"/>
      </div>

      <div className="static-gallery__main">
        <div className="static-gallery__main__text-row">
          <p className="area-desc">
            <Linkifier value={areaDescription} />
            </p>
          <p>
            <Linkifier value={projectDescription} />
          </p>
        </div>
      <Gallery galleryImages = {galleryImages}/>
       
         <div className="static-gallery__main__sales-args">
          <p>
            <Linkifier value={salesArgument1} />
          </p>
          <p>
            <Linkifier value={salesArgument2} />
          </p>
          <p>
            <Linkifier value={salesArgument3} />
          </p>
        </div> 
      </div>


      {/* <div className="static-gallery__mobile-args">
        <p>
          <Linkifier value={salesArgument1} />
        </p>
        <p>
          <Linkifier value={salesArgument2} />
        </p>
        <p>
          <Linkifier value={salesArgument3} />
        </p>
      </div> */}
    </div>
  )
}

export default StaticGallery