
import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
//import { useFetch } from '../../hooks/useFetch';
import {globalContext} from '../../App';
//import Loading from './Loading';

const DataFetching = () => {
  const context = useContext(globalContext);

  if (!context) {
    return <div>Error: Context is not available.</div>
  }

  const {sales} = context;

  return (
    <div>
      <h1>Sales Data:</h1>
      <pre>{JSON.stringify(sales,null,2)}</pre>
    </div>
  );
};

export default DataFetching;
