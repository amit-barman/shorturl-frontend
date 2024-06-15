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

export default apiHandler