import OutputPopup from "./OutputPopup"

function OutputField({ outputData }) {

	return (
		<div className="output-div flex-center">
			{outputData.map(val => <OutputPopup shortenUrl={val} />)}
		</div>
	)
}

export default OutputField