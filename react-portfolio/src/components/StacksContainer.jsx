import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact, DiLinux } from 'react-icons/di'
import { PiFileSql } from 'react-icons/pi'

import '../styles/components/stackscontainer.sass';

const stacks = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sql", name: "SQL", icon: <PiFileSql /> },
]

const StacksContainer = () => {
    return <section className="stacks-container">
            <h2>Stacks</h2>
            <div className="stacks-grid">
                {stacks.map((stack) => (
                    <div className="stack-card" id={stack.id} key={stack.id}>
                        {stack.icon}
                        <div className="stack-info">
                            <h3>{stack.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
    </section>
};

export default StacksContainer;