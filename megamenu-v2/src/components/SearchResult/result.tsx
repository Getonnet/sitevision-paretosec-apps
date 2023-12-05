import React from "react"

type ResultProps = {
    name: string;
}

const Result : React.FC<ResultProps> = ({name}) => {
    const encodedString = encodeURIComponent(name).replace(/%20/g, '+');
    
    
    if(name === 'Ingen resultater.') {
        return <li><a style={{pointerEvents: 'none'}} href="#">{name}</a></li>
    }

    return (
        <li>
            <a href={`/ovrigt/sok?query=${encodedString}`}>
                {name}
            </a>
        </li>
    )
}

export default Result;