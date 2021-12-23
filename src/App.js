import React from 'react';
import RenderTable from './components/RenderTable';
import Provider from './context/Provider';
import FilterInput from './components/FilterInput';
import FiltersSettings from './components/FiltersSettings';
import SavedFilters from './components/SavedFilters';
import GlobalStyle, { Title } from './style/style';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Title>Projeto Star Wars - Trybe!</Title>
      <FilterInput />
      <FiltersSettings />
      <SavedFilters />
      <RenderTable />
    </Provider>
  );
}

export default App;
