import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './contexts/ThemeContext';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import userFetch from './utils/userFetch';
import mockUser from './mockData/mockUser';

const App = () => {
  const [light, setLight] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [userData, setUserData] = useState(mockUser);
  const [error, setError] = useState('');

  console.log(userData);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await userFetch(`${searchValue}`);

  //       setUserData(data);
  //     } catch (error) {
  //       if (error.response.status === 404) {
  //         let errorMessage = error.response.data.message;
  //         setError(errorMessage);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [searchValue]);

  const fetchData = async () => {
    try {
      const { data } = await userFetch(`${searchValue}`);

      setUserData(data);
      setError('');
    } catch (error) {
      if (error.response.status === 404) {
        let errorMessage = error.response.data.message;
        setError(errorMessage);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (userData) {
      fetchData();
    }
  };

  const toggleTheme = () => {
    setLight(prev => !prev);
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <AppContainer>
          <Header light={light} toggleTheme={toggleTheme} />
          <SearchInput
            searchValue={searchValue}
            handleChange={handleChange}
            userData={userData}
            error={error}
            handleSubmit={handleSubmit}
          />
          <SearchResults userData={userData} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex; */
  padding: 144px 355px 170px 355px;
  background-color: ${props => props.theme.backgroundColor};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 140px 98px 0 97px;
  }

  @media (max-width: 375px) {
    padding: 24px 24px 0 24px;
  }
`;

export default App;
