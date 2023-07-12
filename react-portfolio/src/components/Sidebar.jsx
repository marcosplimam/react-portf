import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src="https://github.com/marcosplimam.png" alt="kim" />
        <p className="job-title">Fullstack Developer</p>
        <SocialNetworks />
        <InformationContainer />
        <a target="_blank" rel="noreferrer" href="./assets/resume.pdf" className="btn">Download Curriculo</a>
    </aside>
};

export default Sidebar;