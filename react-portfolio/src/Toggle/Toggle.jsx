import "../styles/toggle.sass"

export default function Toggle({toggled, onClick}) {
    return (
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch" />
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    )
}