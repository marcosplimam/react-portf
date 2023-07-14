import React from 'react';
import '../styles/components/toggle.sass';

export default function Toggle( {toggled, onClick }) {
    return (
                <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
                    <div className="notch">
                        <div className="crater" />
                        <div className="crater" />
                    </div>
                    <div>
                        <div className="shape sm"></div>
                        <div className="shape sm"></div>
                        <div className="shape md"></div>
                        <div className="shape lg"></div>
                    </div>
                </div>
    )
}