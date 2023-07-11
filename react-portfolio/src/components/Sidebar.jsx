import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src="https://github.com/marcosplimam.png" alt="kim" />
        <p className="job-title">Full stack developer</p>
        <p>Redes Sociais</p>
        <p>Informações de Contato</p>
        <a href="" className="btn">Download Curriculo</a>
    </aside>
};

export default Sidebar;