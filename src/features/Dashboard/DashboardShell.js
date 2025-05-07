
import React, { useState } from "react";
import ChartContainer from "./ChartContainer";
import SummaryContainer from "./SummaryContainer";
import Aside from "../../common/components/Aside"
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main"
import Select from "../../common/components/Select";

const DashboardShell = () => {
  const [selectedLabel, setSelectedLabel] = useState("")

  const handleSelectChange = (event) => {
    const selectE1 = event.target;
    const selectedOption = selectE1.options[selectE1.selectedIndex];

    if (!selectedOption) return;

    const selectedLabel = selectedOption.label;
    const selectedValue = selectedOption.value;

    setSelectedLabel(selectedLabel)
  }


  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  return (
    <Layout>
      <Aside>
        <h2> #Polly Dashboard</h2>
        <Select label = "Please, Select a chart"
        handleChange={handleSelectChange}
        id="select-chart"
        options={optionsForSelect} />
      </Aside>
      <Main>
        <h1>
          Welcome , <span className="bold">learner!</span>
        </h1>
        <SummaryContainer/>
        <ChartContainer selectedLabel={selectedLabel}/>
      </Main>
    </Layout>
  )
};

export default DashboardShell