import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/NotificationBannerComponent/NotificationBannerComponent.tsx";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";
import "./components/SearchComponent/WebSearchComponent.tsx";

// import "/govuk-frontend.min.css?url";
function App() {
	return (
		<div className="App">
			<div
				style={{ display: "flex",  flexDirection: 'column', justifyContent: "center", margin: "10px" }}
			>
				<case-info-summary />

				<status-tag status="Renamed" />

				<notification-banner
					type="success"
					header="Success Header"
					content="Success Content"
				/>

				<cps-search-component />
			</div>
		</div>
	);
}

export default App;
