import React from 'react'
import './Virtual.css'
import shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image'

const Virtual = () => {
  return (
   <div className="virtual">
      <div className="virtual_left">
        <p>Virtual Try-on</p>
        <p>Never buy the wrong shade again</p>
        <p>Try Now !</p>
        <img src={shade} alt="shade" />
      </div>

      <div className="virtual-right">
        {/* here we are using reactCompareImage module this module only work when we wrap it in any div */}
        <div className="wraper">
        <ReactCompareImage leftImage={Before} rightImage={After}/>

        </div>
      </div>
   </div>
  )
}

export default Virtual