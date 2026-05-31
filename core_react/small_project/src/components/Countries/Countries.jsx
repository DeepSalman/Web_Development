import { use,useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

export default function Countries({ countriesPromise }) {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);


    const handleVisitedCountries = (country) => {
       const newVisitedCountries = [...visitedCountries,country]
       setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags =[...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;


    return (
        <div>
            <p>Total Countries :{countries.length}</p>
            <h3>Total Country Visited :{visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>country.name.common</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag=><img src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => 
                    <Country key={country.cca3.cca3} country={country} 
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}>

                        </Country>)
                }
            </div>
        </div>
        
    )
}