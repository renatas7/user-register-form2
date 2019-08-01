import React from 'react';
import './App.css';
import './style/index.scss';
import Home from './pages/home/home';
import FormModal from './modals/formModal/formModal';

function App() {
  return (
    <div>
      <Home />
      <FormModal />
    </div>
  );
}

export default App;
