import React from 'react';
import './CasesIndexItem.css'

const CasesIndexItem = ({ countyCase, stateCase }) => {
  const currentCase = countyCase || stateCase;

  return (
    <div className="case__item">
      <div className="case__item__location">
          <h1 id={currentCase === countyCase ? 'county__header' : ''} className="case__item__header">{currentCase.location}</h1>
      </div>
      <div className="case__item__info__container">
          <div>
              <span className="case__info case_count">{currentCase.confirmed} Cases</span>
          </div>
          <div>
              <span className="case__info case_death">{currentCase.dead} Deaths</span>
          </div>
      </div>
    </div>
  )
}

export default CasesIndexItem
