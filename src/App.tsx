import React from 'react';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import { FirstPerson, SecondPerson, PersonSwitcher } from './components';

function App() {
  return (
    <BrowserRouter>
      <>
        <PersonSwitcher />
        <Routes>
          <Route path="/" element={<FirstPerson />} />
          <Route path="/first-person" element={<FirstPerson />} />
          <Route path="/second-person" element={<SecondPerson />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
