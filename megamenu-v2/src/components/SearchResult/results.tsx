import React from 'react';
import Result from './result'
import styles from '../../../../header-static/search_results.module.scss'

interface ResultsProps {
    results: any,
    query: string,
  }

const Results : React.FC<ResultsProps> = ({results, query}) => {
    const hostname = window.location.origin;
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_1336_1600)">
            <path d="M12.3209 11.0737L15.2727 14.0248L14.2975 15L11.3464 12.0482C10.2484 12.9285 8.8826 13.4072 7.47529 13.4052C4.05145 13.4052 1.27267 10.6265 1.27267 7.20262C1.27267 3.77877 4.05145 1 7.47529 1C10.8991 1 13.6779 3.77877 13.6779 7.20262C13.6799 8.60993 13.2012 9.9757 12.3209 11.0737ZM10.9384 10.5624C11.8131 9.66291 12.3015 8.45722 12.2996 7.20262C12.2996 4.53756 10.1404 2.37836 7.47529 2.37836C4.81024 2.37836 2.65103 4.53756 2.65103 7.20262C2.65103 9.86768 4.81024 12.0269 7.47529 12.0269C8.7299 12.0289 9.93559 11.5404 10.835 10.6657L10.9384 10.5624Z" fill="#003255"/>
        </g>
        <defs>
            <clipPath id="clip0_1336_1600">
            <rect width="15" height="15" fill="white" transform="translate(0.272705 0.5)"/>
            </clipPath>
        </defs>
    </svg>;
    
    return (
        <ul className={styles.search_result__container}>
            {
                results.length !== 0 &&
                results.map((result : any) => {
                    return <Result name={result} />
                })
            }
            {
                results[0] !== 'Ingen resultater.' &&
                <p>
                    <a className='see-all-result' href={`${hostname}/ovrigt/sok?query=${query}`}>
                        {searchIcon}
                        <span>Se fullstendig søkeresultat</span>
                    </a>
                </p>
            }
            
        </ul>
    )
}

export default Results;