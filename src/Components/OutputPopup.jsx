import { useState } from "react"

function OutputPopup({ shortenUrl }) {
    let [icon, setIcon] = useState("fa-regular fa-copy");

    const clickhandler = () => {
        setIcon("fa-solid fa-check")
        navigator.clipboard.writeText(shortenUrl);
        setTimeout(() => {
            setIcon("fa-regular fa-copy")
        }, 3000)
    }

    return (
        <div className="output-popup">
            <p id="short-url">{shortenUrl}</p>
            <i className={icon} onClick={clickhandler}></i>
        </div>
    )
}

export default OutputPopup