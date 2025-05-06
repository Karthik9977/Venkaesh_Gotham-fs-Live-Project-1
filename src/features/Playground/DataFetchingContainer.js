// src/features/Playground/DataFetchingContainer.js

import React, { useState } from 'react';
import Select from '../../common/components/Select';
import DataFetching from '../../common/components/DataFetching';

const DataFetchingContainer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('');

  const optionsForSelect = [
    { label: 'Sales', value: "/api/sales"},
    {
      label: 'Subscriptions',
      value: "/api/subscriptions",
    },
  ];

  function handleSelectChange(event) {
    setSelectedEndpoint(event.target.value);
  }

  return (
    <>
      <Select
        handleChange={handleSelectChange}
        label="Please, select a chart"
        id="select-chart"
        options={optionsForSelect}
      />
      {selectedEndpoint ? <DataFetching endpoint={selectedEndpoint} /> : null}
    </>
  );
};

export default DataFetchingContainer;
