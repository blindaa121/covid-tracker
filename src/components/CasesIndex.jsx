import React, { useState } from 'react';
import './CasesIndex.css';
import CasesIndexItem from './CasesIndexItem'

const CasesIndex = ({ casesByCounty, casesByState }) => {
    const [caseType, setCaseType] = useState('state');
    // console.log(casesByState)
    const renderCountyCases = () => {
        if (casesByCounty) {
            return casesByCounty.map(countyCase => <CasesIndexItem countyCase={countyCase}/>)
        } else {
            return null;
        }
    }

    const renderStateCases = () => {
        if (casesByState) {
            return casesByState.map(stateCase => <CasesIndexItem stateCase={stateCase}/>)
        } else {
            return null;
        }
    }

    return (
        <div className="case__container">
            <div className="header">
                <h1>Cases by {caseType}</h1>
            </div>
            <div className="cases__index">
                { caseType === 'state' ? renderStateCases() : renderCountyCases()}
            </div>
        </div>
    )
}

export default CasesIndex
