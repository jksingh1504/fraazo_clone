import React from 'react'
import ImageSlider from './ImageSlider'
import "../../stylesheets/HomePage/banner.css"

const Banner = () => {
  return (
    <div id="banner">
        <ImageSlider/>
        <div>
            <div><img src="https://webasset.fraazo.com/production/Web1.ab035db9ab9fe7b21326.png" alt="img_1" /></div>
            <div><img src="https://webasset.fraazo.com/production/Web2.3f0b675c24dcb702b13d.png" alt="img_2" /></div>
            <div><img src="https://webasset.fraazo.com/production/Web3.e2495d9eb26022ba0363.png" alt="img_3" /></div>
        </div>
    </div>
  )
}

export default Banner