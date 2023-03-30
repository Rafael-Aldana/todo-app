import React, { useState } from 'react';



export const SettingsContext= React.createContext();

const SettingsProvider = ({ children }) => {

  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(true);
  const [sort, setSort] = useState('difficulty');
  // const [displayCount, setDisplayCount] = useState(3);

const values = {
  displayCount,
  showComplete,
  sort,
}

return (
  <SettingsContext.Provider value={values}>
    {children}
  </SettingsContext.Provider>
)

};

export default SettingsProvider;