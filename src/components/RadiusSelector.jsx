import React, { useState } from 'react'

const RadiusSelector = ({ setCasesByCounty, setCasesByState }) => {
    const [radius, setRadius] = useState(0);


    // console.log(setCasesByCounty, setCasesByState)
    return (
        <div className="case__selector__container">
            {/* This component will allowed the 
            user to select a radius and populate
            the number of cases within that region
             */}
            
        </div>
    )
}

export default RadiusSelector
