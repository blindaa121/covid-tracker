import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import axios from 'axios';

const App = () => {
    const [casesByCounty, setCasesByCounty] = useState({});

    useEffect(() => {
        const fetchCases = async () => {
            const { data } = await axios.get('https://www.trackcorona.live/api/cities', {});
            const usCases = Object.values(data.data).filter(country => country.country_code === 'us')
            // console.log(usCases);
            setCasesByCounty(usCases);
        };

        fetchCases();
    }, [])

    console.log(casesByCounty);

    return (
        <div>
            <Map/>
        </div>
    )
}

export default App
