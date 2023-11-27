import React from "react";
import * as CountryFlags from 'country-flag-icons/react/3x2';

interface CountryFlagProps {
    countryCode: string;
}
type CountryIcons = typeof CountryFlags & { [key: string]: React.ComponentType<any> };

const Ticker = ({name, country, URI} : any) => {
    const CountryFlag = ({countryCode} : CountryFlagProps) => {
        const CountryIcon = (CountryFlags as CountryIcons)[countryCode];

        if (!CountryIcon) {
            return null;
        }
    
        return <CountryIcon />;
    }

    const tickerStyling = {
        display: 'flex',
        alignItems: 'center',
        gap: '7px'
    }

    return (
        <li>
            <a className="ticker-item" href={URI} style={tickerStyling}>
                <CountryFlag countryCode={country} />
                <div>{name}</div>
            </a>
        </li>
    )
}

export default Ticker;