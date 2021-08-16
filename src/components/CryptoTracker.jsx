import React, { useState } from 'react'
import { useQuery } from 'react-query'

const CryptoTracker = ({ cryptoName }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const onCardClick = () => {
        if (!isExpanded) {
            setIsExpanded(true);
        }
    }

    return (
        <div className={`card ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {!isExpanded && (
                <button onClick={onCardClick} className="hitzone" />
            )}
            <div className="card-inner">
                {isExpanded && (
                    <button className="close" onClick={() => setIsExpanded(false)}>Close</button>
                )}
            </div>
            <div className="top-data">
                TODO CRYPTO info here
            </div>

        </div>
    )
}

const useGetCardData = (cryptoName, options) => {
    return useQuery(`${cryptoName}-card`, async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
        return await response.json();
    }, options);
}

export default CryptoTracker
