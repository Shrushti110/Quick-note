import React from 'react'
import './FeatureCard.css'

function Feature({featureImg, featureText}) {
  return (
    <div className="feature-card">
    <img src={featureImg} className="feature-img" alt="Brain"></img>
    <p className="feature-text">{featureText}</p>
  </div>

  )
}

export default Feature