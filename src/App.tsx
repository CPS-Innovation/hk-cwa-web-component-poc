import React from "react";
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/NotificationBannerComponent/NotificationBannerComponent.tsx";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

/*CWA imports*/
import { ContextCWA } from "./components/Context/ContextCWA";
import "./components/SearchComponent/CpsSearchComponent.tsx";
import "./components/CaseSearchResults/CpsCaseSearchResults.tsx";

//import a react component just for testing purposes
import { CaseSearchResults } from "./components/CaseSearchResults/CaseSearchResults.tsx";
function App() {

	//sets data to be passed via props and context
	const [data, setData] = React.useState(10);
	
	return (
		<div className="App">
			{/* <case-info-summary />
			<status-tag status="Renamed" />

			<notification-banner
				type="success"
				header="Success Header"
				content="Success Content"
			/> */}

			<ContextCWA.Provider value={{ data } as any}>
				<>
					{/*just for testing purposes
				 	shows a react child<CaseSearchResults /> workin correctly with useContext*/}
					{/* <CaseSearchResults /> */}

					<cps-search-component />
					<cps-case-search-results data={data} />
				</>
			</ContextCWA.Provider>
		</div>
	);
}

export default App;
