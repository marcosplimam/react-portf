import React from 'react'
//import useLocalStorage from 'use-local-storage'
import Toggle from './components/Toggle';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';


function App() {
  const [toggled, setToggled] = React.useState(false)
  const [theme, setTheme] = React.useState('light')

  const handleClick = () => {
      setToggled((s) =>  !s)
      setTheme(toggled ? 'light' : 'dark')
  }
  return (
      <section id="super" className={theme}>
        <div id="all-toggles">
              <Toggle toggled={toggled} onClick={handleClick} /> 
        </div>
        
        <div id="portfolio">
          <Sidebar />
          <MainContent />
        </div>
      </section>
  );
}

export default App;
