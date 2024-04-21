import { useState } from "react";
import OutputField from "./OutputField";
import { Toast, ToastDiv } from "./Toast";
import isValidUrl from "../actions/urlvalidator";

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
					<input type="text" onChange={(e) => { setInput({ longUrl: e.target.value }) }} name="search" value={input.longUrl} spellcheck="false" />
					<button className="search-btn" onClick={clickHandler}>Short</button>
				</div>
			</div>
			<OutputField outputData={output} />
			<ToastDiv toasts={toasts} />
		</>
	);
}

async function apiHandler(data) {
	const API_URL = import.meta.env.VITE_API_URL
	const API_KEY = import.meta.env.VITE_API_KEY

	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"X-Api-Key": API_KEY,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();
		console.log("Success:", result);
		return result
	} catch (error) {
		console.error("Error:", error);
	}
}

export default Inputbox