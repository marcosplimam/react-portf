import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/marcosplimam' },
    { name: 'github', icon: <FaGithub />, url: 'https://github.com/marcosplimam' },
    { name: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com/marcosp_limam?igshid=NGExMmI2YTkyZg==' },
]

const SocialNetworks = () => {
    return <section id="social-networks">
                {socialNetworks.map((network) => (
                    <a target="_blank" rel="noreferrer" href={network.url} className="social-btn" id={network.name} key={network.name}>
                        {network.icon}
                    </a> 
                ))}
           </section>
};

export default SocialNetworks;