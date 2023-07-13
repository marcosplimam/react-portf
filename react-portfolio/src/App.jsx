import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';


import './styles/components/app.sass';
import Header from './components/Header';



function App() {
  return (
 
      <section id="light">
        <div className="switch">
          <Header />
        </div>
        
        <div id="portfolio">
          <Sidebar />
          <MainContent />
        </div>
      </section>
  );
}

export default App;
