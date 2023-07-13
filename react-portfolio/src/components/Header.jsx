import React from 'react';
import Toggle from '../Toggle/Toggle';

import '../styles/components/header.sass';


const Header = () => {
    const [toggled, setToggled] = React.useState(false)
    const handleClick = () => {
    setToggled((s => !s))
}
    
    return <div className="teste">
        <Toggle toggled={toggled} onClick={handleClick}/>
    </div>
};

export default Header;