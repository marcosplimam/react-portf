import React from 'react'
import Toggle from './components/Toggle';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';


function App() {
  const [toggled, setToggled] = React.useState(false)
  const handleClick = () => {
      setToggled((s) =>  !s)
  }
  return (
      <section id="super">
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
