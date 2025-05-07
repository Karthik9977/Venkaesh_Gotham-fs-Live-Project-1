import React, {createContext, useReducer, useEffect} from 'react'

import Loading from '../common/components/Loading'


export const globalContext = React.createContext();
const initialState = {
    sales: [],
    subscriptions: [],
    loading : true,
    error : null
};
function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...state,
          sales: action.payload.sales,
          subscriptions: action.payload.subscriptions,
          loading: false,
          error: null
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [salesRes, subscriptionsRes] = await Promise.all([
            fetch('/api/sales'),
            fetch('/api/subscriptions')
          ]);
  
          const salesData = await salesRes.json();
          const subscriptionsData = await subscriptionsRes.json();
  
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: {
              sales: salesData.sales,
              subscriptions: subscriptionsData.subscriptions
            }
          });
        } catch (error) {
          dispatch({
            type: 'FETCH_ERROR',
            payload: error.message
          });
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <globalContext.Provider value={{ ...state }}>
        {children}
      </globalContext.Provider>
    );
  };
  
  export default globalContext;

