import './CryptoTracker.css';
import ChartData from '../ChartData/ChartData';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const CryptoTracker = ({ cryptoName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const { data, isLoading } = useGetCardData(cryptoName, {
    refetchInterval: 60000,
    staleTime: 60000,
  });

  console.log(data, isLoading);

  if (isLoading) return null;

  const { image, name, market_data: marketData } = data;

  return (
    <div className={`card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {!isExpanded && <button onClick={onCardClick} className='hitzone' />}
      <div className='card-inner'>
        {isExpanded && (
          <button className='close' onClick={() => setIsExpanded(false)}>
            Close
          </button>
        )}
        <div className='top-data'>
          <img src={image?.large} alt={`${name} logo`} />
          <h3 className='crypto-name'>{name}</h3>
          <h4 className='crypto-price'>
            {formatPrice(marketData?.current_price?.usd)}
            {formatPlusMinus(marketData?.price_change_percentage_24h)}
          </h4>
          <ChartData cryptoName={cryptoName} isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
};

const useGetCardData = (cryptoName, options) => {
  return useQuery(
    `${cryptoName}-card`,
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );
      return await response.json();
    },
    options
  );
};

const formatPlusMinus = (priceChange) => {
  const isPositive = Math.sign(priceChange) >= 0;

  return (
    <span className={`${isPositive ? 'positive' : 'negative'}`}>
      {`${isPositive ? '+' : ''}${priceChange.toFixed(2)}%`}
    </span>
  );
};

export const formatPrice = (price) => {
  const formatConfig = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatConfig.format(price);
};

export default CryptoTracker;
