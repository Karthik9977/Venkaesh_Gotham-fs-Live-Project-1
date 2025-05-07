import React from "react";
//import ReactDOM from "react-dom";
//import DataFetching from "./common/components/DataFetching";
//import DataFetchingContainer from "./features/Playground/DataFetchingContainer";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { sales } from "./mocks/data"

export const globalContext = React.createContext()
const {Provider} = globalContext

const initialState = {
  loading: false,
  error: "",
  salesTotal: 3466,
  subscriptionsTotal: 1492,
  data: sales
};

const App = () => {
  return (
    <Provider value = {initialState}>
      <DashboardShell/>
    </Provider>
  )
}
export default App;
