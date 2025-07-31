// @ts-nocheck
import { useRef } from "react";
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/BannerComponent/BannerComponent";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";
import "./components/LinkButton/LinkButton";

function App() {
	const guidanceBtnRef = useRef<HTMLButtonElement | null>(null);
	const fn = () => {
		return 100;
	};
	const setColorFn = () => {
		return "red";
	};
	return (
		<div className="App">
			{/* <case-info-summary-component
        data={{
          id: 2161796,
          urn: "16XL9132025",
          leadDefendantFirstNames: "Homer",
          leadDefendantSurname: "SIMPSON",
          numberOfDefendants: 2,
          unitName: "Hull TU",
        }}
      /> */}

			{/* <status-tag status="Renamed" /> */}
			{/*       
      <banner-component
        type="success"
        header="Success Header"
        content="Success Content"
      ></banner-component> */}

			<link-button
				data-test-id="dataTestId"
				ref={guidanceBtnRef}
				aria-label="ariaLabel"
				aria-expanded="buttonOpen"
				text="Delete"
				type="submit"
				// onClick={fn}
				setColorFn={fn}
			/>
		</div>
	);
}

export default App;
