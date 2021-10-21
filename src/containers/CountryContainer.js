import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetail from "../components/CountryDetail";


const CountryContainer = () => {
    
    const[countries, setCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] = useState(null)

    function fetchCountries(){
        fetch("https://restcountries.com/v3.1/all")
        .then (response => response.json())
        .then (countries => setCountries(countries))
    }

    useEffect(fetchCountries, [])

    const onCountrySelected = function(country){
        setSelectedCountry(country)
    }

    return(
        <>
        <h1>Countries:</h1>
        <CountrySelector countries = {countries} onCountrySelected={onCountrySelected}/>
        {selectedCountry ? <CountryDetail selectedCountry = {selectedCountry}/> :null}
        </>
    )

    





}



export default CountryContainer;