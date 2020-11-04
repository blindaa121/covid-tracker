import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import axios from 'axios';

const App = () => {
    const [casesByCounty, setCasesByCounty] = useState(null);

    useEffect(() => {
        const fetchCases = async () => {
            const { data } = await axios.get('https://www.trackcorona.live/api/provinces', {});
            const usCases = Object.values(data.data).filter(country => country.country_code === 'us');
            
            setCasesByCounty(usCases);
        };

        fetchCases();
    }, [])

    // console.log(casesByCounty);
    return (
        <div className="app__container">
            <header>COVID Tracker</header>
            <Map casesByCounty={casesByCounty}/>
        </div>
    )
}

export default App
