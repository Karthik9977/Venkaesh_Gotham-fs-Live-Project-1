// src/common/components/DataFetching.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';
import Loading from './Laoding';

const DataFetching = ({ endpoint }) => {
  const [loading, error, data, ] = useState(endpoint);

  if (loading) return <Loading/>
  if(error) return <p> Oops! Something went wrong: {error}</p>

  return (
    <ul>
      {data.map(item => (
        <li key={item.timestamp}>
          {item.timestamp} - {item.amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default DataFetching;
