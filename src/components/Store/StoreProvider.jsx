import React from 'react';
import StoreContext from './StoreContext';
import useStorage from '../../utils/useStore';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');

  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider;