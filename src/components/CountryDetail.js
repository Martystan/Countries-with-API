import React from "react";
import { useState } from "react/cjs/react.development";
import CountryContainer from "../containers/CountryContainer";

const CountryDetail = ({selectedCountry})=>{
    return(
        <div>
        <h4>{selectedCountry.name.common}</h4>
        <p>{selectedCountry.capital}</p>
        <h3>Flag: </h3><img src={selectedCountry.flags.png}/>
        </div>

    )
}

export default CountryDetail;