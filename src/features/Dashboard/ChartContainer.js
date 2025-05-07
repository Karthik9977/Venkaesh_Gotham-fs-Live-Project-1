
import React, { useContext } from "react";
import { globalContext } from "../../App";
import LineChart from './LineChart'
import PropTypes from 'prop-types'


const ChartContainer = ({ selectedLabel }) => {
  const { data:dataset } = useContext(globalContext);

  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp)
  const chartValues = dataset.map(dataPoint => dataPoint.amount)

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
}
 
export default ChartContainer;
