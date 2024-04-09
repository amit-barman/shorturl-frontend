import { useState } from "react"

function OutputField({ outputData }) {

	return (
		<div className="output-div flex-center">
			{outputData.map(val => <OutputPopup shortenUrl={val} />)}
		</div>
	)
}

function OutputPopup({ shortenUrl }) {
	let [icon, setIcon] = useState("fa-regular fa-copy");
	return (
		<div className="output-popup">
			<p id="short-url">{shortenUrl}</p>
			<i className={icon} onClick={() => {
				setIcon("fa-solid fa-check")
				navigator.clipboard.writeText(shortenUrl);
				setTimeout(() => {
					setIcon("fa-regular fa-copy")
				}, 3000)
			}}></i>
		</div>
	)
}

export default OutputField