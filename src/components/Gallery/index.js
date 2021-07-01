import { h } from 'preact'
import { useEffect } from 'preact/compat'
import Glide from '@glidejs/glide'

import Transformer from './Transformer'

const Gallery = ({ galleryImages = [] }) => {
  useEffect(() => {
    if (galleryImages.length === 0) return

    const glide = new Glide('.glide', {
      autoplay: 6000,
      hoverpause: true,
      keyboard: true,
      type: 'carousel',
      animationDuration: 600,
      animationTimingFunc: 'linear',
      perView: 1,
      peek: 180,
      gap: 140,
      dots: '.dots',
      breakpoints: {
        1200: {
          peek: 130,
          gap: 120
        },
        901: {
          perView: 1,
          gap: 100,
          peek: 0
        }
      }
    }).mount({ Transformer })

    return () => glide.destroy()
  })

  if (galleryImages.length === 0) return null

  // Removes any dead image references from the API
  const filteredGalleryImages = galleryImages.filter(obj => obj.large !== null)

  return (
    <div className="gallery-container">
      <div className="glide" id='gallery'>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {filteredGalleryImages.map((src, idx) => (
              <img key={idx} className="glide__img" src={src.large} />
            ))}
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <div className="glide__arrow glide__arrow--prev" data-glide-dir="&lt;">
              <i className="fa fa-angle-left glide__arrow-icon" aria-hidden="true" />
            </div>
            <div className="glide__arrow glide__arrow--next" data-glide-dir="&gt;">
              <i className="fa fa-angle-right glide__arrow-icon" aria-hidden="true" />
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {filteredGalleryImages.map((_src, idx) => (
              <div key={idx} className="glide__bullet" data-glide-dir={`=${idx}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
