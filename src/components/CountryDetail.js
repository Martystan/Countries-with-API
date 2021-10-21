import React from "react";
import CountryContainer from "../containers/CountryContainer";

const CountryDetail = ({selectedCountry}) => {
    return(
        <div>
            <h3>{selectedCountry.name}</h3>
        </div>
    )
}

export default CountryDetail;