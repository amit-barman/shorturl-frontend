import { useState } from "react";
import OutputField from "./OutputField";
import { Toast, ToastDiv } from "./Toast";
import isValidUrl from "../actions/urlvalidator";
import apiHandler from "../Api/apiHandler";

function Inputbox() {
	let [output, setOutput] = useState([])

	let [input, setInput] = useState({
		longUrl: ""
	})

	let [toasts, setToast] = useState([])

	const clickHandler = () => {
		if (isValidUrl(input.longUrl)) {
			apiHandler(input).then((response) => {
				setOutput([...output, response.shortUrl].reverse())
				setInput({ longUrl: "" })
			})
		} else {
			showError()
		}
	}

	const showError = () => {
		setToast([...toasts, <Toast />])
	}

	return (
		<>
			<div className="search-div flex-center">
				<div className="search-box">
					<input
						type="text"
						onChange={
							(e) => { setInput({ longUrl: e.target.value }) }
						}
						name="search"
						value={input.longUrl}
						spellCheck="false"
					/>
					<button className="search-btn" onClick={clickHandler}>Short</button>
				</div>
			</div>
			<OutputField outputData={output} />
			<ToastDiv toasts={toasts} />
		</>
	);
}

export default Inputbox