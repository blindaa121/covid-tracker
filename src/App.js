import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import RadiusSelector from './components/RadiusSelector';
import CasesIndex from './components/CasesIndex';
import axios from 'axios';
import './App.css'


const App = () => {
    const [casesByState, setCasesByState] = useState(null);
    const [casesByCounty, setCasesByCounty] = useState(null);

    useEffect(() => {
        const fetchCasesByState = async () => {
            const { data } = await axios.get('https://www.trackcorona.live/api/provinces', {});
            const usCases = Object.values(data.data).filter(state => state.country_code === 'us');
            
            setCasesByState(usCases);
        };

        const fetchCasesByCounty = async () => {
            const { data } = await axios.get('https://www.trackcorona.live/api/cities',{});
            const countyCases = Object.values(data.data).filter(county => county.country_code === 'us');

            setCasesByCounty(countyCases);
        }

        fetchCasesByState();
        fetchCasesByCounty();
    }, [])

    // console.log(casesByState);
    return (
        <div className="app__container">
            {/* <RadiusSelector setCasesByState={setCasesByState} setCasesByCounty={setCasesByCounty}/> */}
            <div className="app__container__header">
                <h1>  COVID Tracker</h1>
                <Map casesByState={casesByState} casesByCounty={casesByCounty}/>
            </div>
            <CasesIndex casesByState={casesByState} casesByCounty={casesByCounty} />
        </div>
    )
}

export default App
