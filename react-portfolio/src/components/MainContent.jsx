import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import StacksContainer from './StacksContainer';

const MainContent = () => {
    return <main id="main-content">
        <AboutContainer />
        <StacksContainer />
        <ProjectsContainer />

    </main>;
};

export default MainContent;